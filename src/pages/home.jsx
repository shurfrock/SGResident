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
                    <Card  shadow="sm" p="lg" radius="md" mih="600px" miw="1400px" withBorder>  
                        <Flex
                            gap="md"
                            justify="center"
                            align="center"
                            direction="row"   
                        >
                            <Button color="cyan" radius="lg" size="xl">Residentes</Button>
                            <Button color="cyan" radius="lg" size="xl">Pagos</Button>              
                        </Flex>
                    </Card> 
                </Flex>

            </AppShell>
        </MainLayout>
    )
}

export default Home;