import MainLayout from "../layouts/MainLayout";

import { Flex ,Card, AppShell, Header, Text, Button } from '@mantine/core';

function Home() {
    return (
        <MainLayout>
            <AppShell
                padding="xs"
                header={
                    <Header height={10} p="xl">      
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            h=".5vh"
                        >
                            <Text order={1} fz="xl" fw={700} c= "cyan">SGResident</Text>
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
                                <Button fullWidth color="cyan" radius="lg" size="xl">Residentes</Button>
                            </div>
                            
                            <div style={{ width: 300}}>
                                <Button fullWidth color="cyan" radius="lg" size="xl">Pagos</Button>      
                            </div>        
                        </Flex>
                    </Card> 
                </Flex>

            </AppShell>
        </MainLayout>
    )
}

export default Home;