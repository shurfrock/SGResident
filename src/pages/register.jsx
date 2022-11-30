import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { z } from 'zod'
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { useForm, zodResolver } from '@mantine/form';
import { Flex, Card, TextInput, PasswordInput, Button, Grid, Alert} from '@mantine/core';

import axios from "../configs/axios";

const schema = z.object({
    username: z.string().min(4),
    firstname: z.string().min(4),
    lastname: z.string().min(4),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
})


function Register() {  
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            confirmPassword: '',
        },
    })

    const mutation = useMutation({
        mutationFn: ({ username, fullname, password }) => axios.post('/signup', { username, fullname, password }),
        onError: (error) => {
            console.log()
        },
        onSuccess: () => {
            setError('')
            navigate('/')
        }
    })

    const handleOnSubmit = ({ username, firstname, lastname, password, confirmPassword }) => {
        const fullname = `${firstname} ${lastname}`

        if (password === confirmPassword) {
            mutation.mutate({
                username: username.toLowerCase(),
                fullname,
                password
            })
        } else {
            setError('Las contraseñas no coinciden')
        }
            
    }

    return (
        <MainLayout>
            <Flex
                justify="center"
                align="center"
                direction="column"
                h="100vh"
            >
                <Card  shadow="sm" p="lg" radius="lg" miw="600px" withBorder>
                    <FaArrowLeft size="20px" color="#1FBFBE" onClick={() => navigate('/')}/> 
                    {error && <Alert title="Error" color="red">
                            {error}
                    </Alert>}  
                    <form onSubmit={form.onSubmit(handleOnSubmit)}>
                        <Flex
                            gap="lg"
                            direction="column" 
                        >
                            <Grid>
                                <Grid.Col span={6}>
                                    <TextInput
                                        placeholder="Nombre"
                                        label="Nombre"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                        {...form.getInputProps('firstname')}
                                    />   
                                </Grid.Col>   
                                <Grid.Col span={6}> 
                                    <TextInput
                                        placeholder="Apellido"
                                        label="Apellido"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                        {...form.getInputProps('lastname')}
                                    /> 
                                </Grid.Col>  
                            </Grid> 
                            <TextInput
                                placeholder="Nombre Usuario"
                                label="Nombre Usuario"
                                radius="lg"
                                size="sm"
                                withAsterisk
                                {...form.getInputProps('username')}
                            />    
                            <PasswordInput
                                placeholder="Contraseña"
                                label="Contraseña"
                                description="La contraseña debe incluir al menos una letra y un número."
                                radius="lg"
                                size="sm"
                                withAsterisk
                                {...form.getInputProps('password')}
                            />  
                            <PasswordInput
                                placeholder="Confirmar Contraseña"
                                label="Confirmar Contraseña"
                                radius="lg"
                                size="sm"
                                withAsterisk
                                {...form.getInputProps('confirmPassword')}
                            />
                            <Button type="submit" color="cyan" radius="lg" size="md">
                                Siguiente
                            </Button> 
                        </Flex>
                    </form>     
                </Card>
            </Flex>
        </MainLayout>
    )
}

export default Register