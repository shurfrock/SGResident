import MainLayout from "../layouts/MainLayout";

import { Flex ,Card} from '@mantine/core';

function Residents(){ 
    return(
        <MainLayout>
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    h="100vh"
                >
                    <Card  shadow="sm" p="lg" radius="md" mih="650px" miw="1400px" withBorder>                
                    </Card> 
                </Flex>
        </MainLayout>
    )
}

export default Residents