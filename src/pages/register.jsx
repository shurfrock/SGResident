import MainLayout from "../layouts/MainLayout"

import { useNavigate } from "react-router-dom";
import { Flex, Card, TextInput, PasswordInput, Button, Checkbox, Grid } from '@mantine/core';


function Register() {  
    const navigate = useNavigate();

    return (
        <MainLayout>
            <Flex
                justify="center"
                align="center"
                direction="column"
                h="100vh"
            >
                <Card  shadow="sm" p="lg" radius="lg" miw="600px" withBorder>  
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
                                />   
                            </Grid.Col>   
                            <Grid.Col span={6}> 
                                <TextInput
                                    placeholder="Apellido"
                                    label="Apellido"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                /> 
                            </Grid.Col>  
                        </Grid> 
                        <TextInput
                            placeholder="Nombre Usuario"
                            label="Nombre Usuario"
                            radius="lg"
                            size="sm"
                            withAsterisk
                        />    
                        <PasswordInput
                            placeholder="Contraseña"
                            label="Contraseña"
                            description="La contraseña debe incluir al menos una letra y un número."
                            radius="lg"
                            size="sm"
                            withAsterisk
                        />  
                        <PasswordInput
                            placeholder="Confirmar Contraseña"
                            label="Confirmar Contraseña"
                            radius="lg"
                            size="sm"
                            withAsterisk
                        />
                        <Checkbox
                            label="Acepto vender mi privacidad"
                            color="cyan"
                            radius="xs"
                            size="sm"
                        />
                        <Button color="cyan" radius="lg" size="md" onClick={() => navigate('/login')}>
                            Siguiente
                        </Button> 
                    </Flex>    
                </Card>
            </Flex>
        </MainLayout>
    )
}

export default Register