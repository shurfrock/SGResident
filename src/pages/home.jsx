import MainLayout from "../layouts/MainLayout";

import { FaRegMoneyBillAlt, FaUserFriends } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Flex, Card, AppShell, Header, Title, Button, Avatar, Modal, Space, Text, Image } from '@mantine/core';

import SGResident from '../assets/SGResident.png';

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
                    <Avatar alt="Usuario" color="cyan" radius="xl" size="100px" variant="filled" />
                    <Space h="35px" />
                    <Title order={3} size="h3" c= "cyan"> Nombre Completo </Title>
                    <Text fz="lg"> Nombre Completo </Text>
                    <Title order={3} size="h3" c= "cyan"> Nombre de Usuario </Title>
                    <Text fz="lg"> Nombre de Usuario </Text>
                    <Space h="35px" />
                </Flex>
                <Flex
                    gap="md"
                    justify="center"
                    align="flex-end"
                    direction="row"
                >
                    <Button color="cyan" radius="lg" onClick={() => setOpened(false)}>Atras</Button>
                    <Button color="red" radius="lg" onClick={() => navigate('/')}>Salir</Button>
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
                            gap="70px"
                            justify="center"
                            align="center"
                            direction="row" 
                            h="100%"  
                        >
                            <div style={{ width: 400 }}>
                                <Button fullWidth color="cyan" radius="lg" size="xl" mih="170px" onClick={() => navigate('/residents')}> 
                                    <Title order={3} size="h1">
                                        Residentes
                                    </Title>
                                    <Space w="20px" />
                                    <FaUserFriends size="150px"/>       
                                </Button>
                            </div>
                            <div style={{ width: 400 }}>
                                <Button fullWidth color="cyan" radius="lg" size="xl"mih="170px" onClick={() => navigate('/payments')}> 
                                    <Title order={3} size="h1">
                                        Pagos
                                    </Title>
                                    <Space w="50px" />
                                    <FaRegMoneyBillAlt size="150px"/>
                                </Button>  
                            </div>             
                        </Flex>
                    </Card> 
                </Flex>
            </AppShell>
        </MainLayout>
    )
}

export default Home;