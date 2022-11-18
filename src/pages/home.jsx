import MainLayout from "../layouts/MainLayout";

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Flex ,Card, AppShell, Header, Title, Button, Avatar, Modal} from '@mantine/core';

function Home() {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);

    return (
        <MainLayout>
            <Modal
                size="xs" 
                opened={opened}
                onClose={() => setOpened(false)}
            >
                <Flex
                    mih={50} 
                    justify="center"
                    align="center"
                    wrap="wrap"
                    direction="column"
                >
                    <Avatar alt="Usuario" color="cyan" radius="xl" size="xl" variant="filled" />
                    <Title order={3} size="h4" c= "cyan"> Nombre Completo </Title>
                    <Title order={3} size="h4" c= "cyan"> Nombre de Usuario </Title>
                    
                </Flex>
                <Flex
                    gap="md"
                    justify="center"
                    align="flex-end"
                    direction="row"
                >
                    <Button color="cyan" radius="lg" onClick={() => setOpened(false)}>Atras</Button>
                    <Button color="red" radius="lg" onClick={() => navigate('/login')}>Salir</Button>
                </Flex>
                
            </Modal>

            <AppShell
                padding="xs"
                header={
                    <Header height={10} p="30px">      
                        <Flex
                             gap="md"
                             justify="center"
                             align="center"
                             direction="row" 
                             h="100%"  
                        >
                            
                            <Title order={3} size="h1" c= "cyan"> SGResident </Title>
                            <Avatar alt="Usuario" color="cyan" radius="xl" size="md" variant="filled" onClick={() => setOpened(true)}/>
                        </Flex>
                    </Header>}
            >
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    h="100vh"
                >
                    <Card  shadow="sm" p="lg" radius="lg" mih="400px" miw="1000px" withBorder>  
                    
                        <Flex
                            gap="150px"
                            justify="center"
                            align="center"
                            direction="row" 
                            h="100%"  
                        >
                            <div style={{ width: 300 }}>
                                <Button fullWidth color="cyan" radius="lg" size="xl" onClick={() => navigate('/residents')}>Residentes</Button>
                            </div>
                            
                            <div style={{ width: 300}}>
                                <Button fullWidth color="cyan" radius="lg" size="xl" onClick={() => navigate('/payments')}>Pagos</Button>      
                            </div>        
                        </Flex>
                    </Card> 
                </Flex>

            </AppShell>
        </MainLayout>
    )
}

export default Home;