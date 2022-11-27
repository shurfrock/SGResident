import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Flex ,Card , Button, TextInput, PasswordInput, Modal, Group, Image, Space } from '@mantine/core';

import SGResidentWhite from '../assets/SGResidentWhite.png';

function Login(){
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);

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
                        transition="fade"
                        transitionDuration={600}
                        transitionTimingFunction="ease"
                    >  
                        <Flex
                            gap="xl"
                            direction="column" 
                            >     
                            <TextInput
                                placeholder="Nombre de Usuario"
                                label="Usuario"
                                radius="lg"
                                size="sm"
                                withAsterisk
                            />    
                            <PasswordInput
                                placeholder="Contraseña"
                                label="Contraseña"
                                radius="lg"
                                size="sm"
                                withAsterisk
                            />  
                            <Button color="cyan" radius="lg" size="md" onClick={() => navigate('/home')}>
                                Siguiente
                            </Button> 
                        </Flex>    
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