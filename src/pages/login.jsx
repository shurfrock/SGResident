import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { z } from 'zod'
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm, zodResolver } from '@mantine/form';
import { Flex ,Card , Button, TextInput, PasswordInput, Modal, Group, Image, Space, Alert } from '@mantine/core';

import axios from '../configs/axios'
import SGResidentWhite from '../assets/SGResidentWhite.png';

const schema = z.object({
    username: z.string().min(4),
    password: z.string().min(4),
})

function Login(){
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [error, setError] = useState('');

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            username: '',
            password: '',
        },
    })

    const mutation = useMutation({
        mutationFn: ({ username, password }) => axios.post('/login', { username, password }),
        onError: (error) => {
            if (error.response.status === 404) {
                setError('El usuario o la contraseña son incorrectos')
            }
        },
        onSuccess: () => {
            setError('')
            navigate('/home')
        }
    })

    return( 
    <MainLayout>
        <Flex
            justify="center"
            align="center"
            direction="column"
            h="100vh"
        >
            <Flex
                gap="md"
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Image
                    height={100} 
                    fit="contain"
                    src={SGResidentWhite}
                />
            </Flex> 
            <Space h="50px" />
            <Card  shadow="sm" p="lg" radius="xl" mih="400px" miw="400px" withBorder>
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"   
                    h="100%"
                    >
                    <Modal
                        onClose={() => setOpened(false)}
                        title="Inicio de Sesión"
                        centered
                        size="md"
                        opened={opened}
                        overlayOpacity={0.55}
                        overlayBlur={3}
                    >  
                        {error && <Alert title="Error" color="red">
                            {error}
                        </Alert>}
                        <form onSubmit={form.onSubmit(({ username, password }) => mutation.mutate({ username: username.toLowerCase(), password }))}>
                            <Flex
                                gap="xl"
                                direction="column" 
                            >
                                <TextInput
                                    error="Usuario Incorrecto"
                                    placeholder="Nombre de Usuario"
                                    label="Usuario"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                    {...form.getInputProps('username')}
                                />    
                                <PasswordInput
                                    error="Contraseña Incorrecta"
                                    placeholder="Contraseña"
                                    label="Contraseña"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                    {...form.getInputProps('password')}
                                />  
                                <Button type="submit" color="cyan" radius="lg" size="md">
                                    Siguiente
                                </Button> 
                            </Flex>    
                        </form>
                    </Modal>

                    <Group position="center">
                        <Button  onClick={() => setOpened(true)} variant="subtle" color="cyan" radius="lg" size="xl">Iniciar Sesion</Button>
                    </Group>
                    <Button variant="subtle" color="cyan" radius="lg" size="xl" onClick={() => navigate('/register')}>Registrarse</Button>
                </Flex>
            </Card>
        </Flex>
    </MainLayout>) 

} 

export default Login