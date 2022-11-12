import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { Flex ,Card , Button, TextInput, PasswordInput, Modal, Group, Checkbox} from '@mantine/core';


function Login(){
    const [opened, setOpened] = useState(false);

    return( 
    <MainLayout>
        <Flex
            justify="center"
            align="center"
            direction="column"
            h="100vh"
        >
            <Card  shadow="sm" p="lg" radius="xl" mih="400px" miw="400px" withBorder>  
                <Flex
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"   
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
                                <Checkbox
                                    label="Acepto vender mi privacidad"
                                    color="cyan"
                                    radius="xs"
                                    size="sm"
                                />
                                <Button color="cyan" radius="lg" size="md">
                                    Siguiente
                                </Button> 
                            </Flex>    
                    </Modal>

                    <Group position="center">
                        <Button  onClick={() => setOpened(true)} variant="subtle" color="cyan" radius="lg" size="xl">Iniciar Sesion</Button>
                    </Group>
                    
                    <Button variant="subtle" color="cyan" radius="lg" size="xl">Registrarse</Button>
                </Flex>
            </Card>
        </Flex>
    </MainLayout>) 

} 

/* function Login(){
    return( 
    <MainLayout>
        <Flex
            justify="center"
            align="center"
            direction="column"
            h="100vh"
        >
            <Card  shadow="sm" p="lg" radius="xl" miw="600px" withBorder>  
        
                <Flex
                    gap="lg"
                    direction="column" 
                    >   
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
                        description="La contraseña debe incluir al menos una letra, un número."
                        radius="lg"
                        size="sm"
                        withAsterisk
                    />  
                    <Button color="cyan" radius="lg" size="md">
                        Siguiente
                    </Button> 
                </Flex>    
            </Card>
        </Flex>
    </MainLayout>) 

} */

export default Login