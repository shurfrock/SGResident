import MainLayout from "../layouts/MainLayout";

import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons';
import { useNavigate } from "react-router-dom";
import { Flex, Card, Grid, TextInput, Title, Text, Button, Modal, Table, Select, Alert, Space, Image} from '@mantine/core';

import SGResident from '../assets/SGResident.png';
import SGResidentWhite from '../assets/SGResidentWhite.png';

function Residents(){ 
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [opened_add, setOpened_add] = useState(false);
    const [opened_mod, setOpened_mod] = useState(false);
    const [opened_det, setOpened_det] = useState(false);

    const elements = [{ domicilio: 0, vialidad: 0, phoneNumber: 0, name: 0 }];

    const rows = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.domicilio}</td>
            <td>{element.name}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.vialidad}</td>

            <Grid>
                <Grid.Col span={3} offset={3}>
                    <td>
                        <Button color="yellow" radius="lg" size="xs" onClick={() => setOpened_mod(true)}>
                            Modificar
                        </Button> 
                    </td>
                    <td>
                        <Button color="cyan" radius="lg" size="xs" onClick={() => setOpened_det(true)}>
                            Detalles
                        </Button> 
                    </td>
                    <td>
                        <Button color="red" radius="lg" size="xs" onClick={() => setOpened(true)}>
                            Eliminar
                        </Button> 
                    </td>
                </Grid.Col>
            </Grid>

        </tr>       
      
    ));

    return(
        <MainLayout>
            
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    h="100vh"
                >   
                           
                    <Card  shadow="sm" p="lg" radius="md" mih="600px" miw="1400px" withBorder> 
                        <Title align="center" size={35}  fw={700} c= "cyan">Residentes</Title> 
                        <Modal
                            onClose={() => setOpened(false)}
                            centered
                            size="md"
                            title="Eliminar"
                            opened={opened}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            transitionDuration={600}
                            transitionTimingFunction="ease"
                        >      
                            <Flex
                                mih={15}
                                gap="md"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap"
                            >
                                <Alert icon={<IconAlertCircle size={16} />} title="¡Atencion!" color="red">
                                    Al borrar la informacion del Residente la informacion del residente y los pagos y no se podra volver a acceder a esta informacion.
                                </Alert>

                                    <Button  onClick={() => setOpened(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                    <Button color="red"radius="lg" size="md">Eliminar</Button> 
                            </Flex>
                        </Modal> 
                        <Modal
                            onClose={() => setOpened_add(false)}
                            centered
                            size="50%"
                            title="Agregar Residente"
                            opened={opened_add}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            transitionDuration={600}
                            transitionTimingFunction="ease"
                        >      
                            <Grid>
                                <Grid.Col span={8}>
                                    <TextInput
                                        placeholder="Nombre Completo"
                                        label="Nombre Completo"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    />   
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <Image
                                        height={70}
                                        fit="contain"
                                        src={SGResident}
                                    />
                                </Grid.Col>
                                
                                
                            </Grid> 
                            <Grid>
                                <Grid.Col span={5}>
                                    <TextInput
                                        placeholder="Domicilio"
                                        label="Domicilio"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    />   
                                </Grid.Col>   
                                <Grid.Col span={3}> 
                                    <TextInput
                                        placeholder="Entre Vialidad - 1"
                                        label="Entre Vialidad - 1"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                                <Grid.Col span={3}> 
                                    <TextInput
                                        placeholder="Entre Vialidad - 2"
                                        label="Entre Vialidad - 2"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                            </Grid> 
                            <Grid>
                                <Grid.Col span={5}>
                                    <TextInput
                                        placeholder="Telefono/Celular"
                                        label="Telefono/Celular"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    />   
                                </Grid.Col>   
                                <Grid.Col span={6}> 
                                    <TextInput
                                        placeholder="Referencia"
                                        label="Referencia"
                                        radius="lg"
                                        size="sm"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                            </Grid> 
                            <Grid verticalSpacing="xl">
                                <Grid.Col span={4}  offset={4}> 
                                    <Flex
                                        mih={15}
                                        gap="md"
                                        justify="center"
                                        align="flex-end"
                                        direction="row"
                                        wrap="wrap"
                                        >
                                            <Button color="green" radius="lg" size="md">Agregar</Button>
                                    </Flex> 
                                </Grid.Col>  
                            </Grid> 
                            
                        </Modal> 
                        <Modal
                            onClose={() => setOpened_det(false)}
                            centered
                            size="50%"
                            title="Detalles"
                            opened={opened_det}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            transitionDuration={600}
                            transitionTimingFunction="ease"
                        >    
                        
                            <Text fz="xl" fw={700}>Nombre Completo</Text>
                            <Text fz="lg" fw={400}>Nombre Completo</Text> 
                            <Space h="sm" />
                            <Grid>
                                <Grid.Col span={5}>
                                    <Text fz="xl" fw={700}>Sexo</Text>
                                    <Text fz="lg" fw={400}>Sexo</Text>      
                                </Grid.Col>    
                                <Grid.Col span={7}>
                                    <Text fz="xl" fw={700}>Edad</Text>
                                    <Text fz="lg" fw={400}>Edad</Text>
                                </Grid.Col>
                                <Grid.Col span={5}>
                                    <Text fz="xl" fw={700}>Entre Vialidad 1</Text>
                                    <Text fz="lg" fw={400}>Entre Vialidad 1</Text>
                                </Grid.Col>
                                <Grid.Col span={5}>
                                    <Text fz="xl" fw={700}>Entre Vialidad 2</Text>
                                    <Text fz="lg" fw={400}>Entre Vialidad 2</Text>
                                </Grid.Col>
                                <Grid.Col span={5}>
                                    <Text fz="xl" fw={700}>Telefono/Celular</Text>
                                    <Text fz="lg" fw={400}>Telefono/Celular</Text>
                                </Grid.Col>
                                <Grid.Col span={5}>
                                    <Text fz="xl" fw={700}>Referencia</Text>
                                    <Text fz="lg" fw={400}>Referencia</Text>
                                </Grid.Col>
                            </Grid>
                            <Space h="xl" />
                                <Flex
                                    gap="md"
                                    justify="center"
                                    align="flex-end"
                                    direction="row"
                                    >
                                    <Button onClick={() => setOpened_det(false)} color="gray" radius="lg" size="md">Atras</Button>
                                    <Button color="cyan" radius="lg" size="md">Siguiente</Button>
                                </Flex>   
                             
                        </Modal> 

                        <Modal
                            onClose={() => setOpened_mod(false)}
                            centered
                            size="55%"
                            title="Modificar Residente"
                            opened={opened_mod}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            transitionDuration={600}
                            transitionTimingFunction="ease"
                        >      
                            <Grid gutter="xl">
                                <Grid.Col span={9}>
                                    <TextInput
                                        placeholder="Nombre Completo"
                                        label="Nombre Completo"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    />   
                                </Grid.Col>     
                                <Grid.Col span={4}>
                                    <Select
                                        label="Sexo"
                                        placeholder="Sexo"
                                        data={[
                                            { value: 'Masculino', label: 'Masculino' },
                                            { value: 'Femenino', label: 'Femenino' },
                                        ]}
                                        size="lg"
                                        radius="lg"
                                    />
                                </Grid.Col>   
                                <Grid.Col span={4}> 
                                    <TextInput
                                        placeholder="Edad"
                                        label="Edad"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                                <Grid.Col span={5}>
                                    <TextInput
                                        placeholder="Domicilio (con numero)"
                                        label="Domicilio"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    />   
                                </Grid.Col>   
                                <Grid.Col span={3}> 
                                    <TextInput
                                        placeholder="Entre Vialidad - 1"
                                        label="Entre Vialidad - 1"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                                <Grid.Col span={3}> 
                                    <TextInput
                                        placeholder="Entre Vialidad - 2"
                                        label="Entre Vialidad - 2"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                                <Grid.Col span={5}>
                                    <TextInput
                                        placeholder="Telefono/Celular"
                                        label="Telefono/Celular"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    />   
                                </Grid.Col>   
                                <Grid.Col span={6}> 
                                    <TextInput
                                        placeholder="Referencia"
                                        label="Referencia"
                                        radius="lg"
                                        size="lg"
                                        withAsterisk
                                    /> 
                                </Grid.Col>  
                                <Grid.Col span={4}  offset={4}> 
                                    <Flex
                                        gap="md"
                                        justify="center"
                                        align="flex-end"
                                        direction="row"
                                        wrap="wrap"
                                        >
                                        <Button onClick={() => setOpened_mod(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                        <Button color="yellow" radius="lg" size="md">Guardar</Button>
                                    </Flex> 
                                </Grid.Col>  
                            </Grid>        
                        </Modal> 
                        <Flex
                            gap="md"
                            justify="flex-end"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button color="indigo" radius="lg" size="md" onClick={() => navigate('/payments')}>
                                Pagos
                            </Button> 
                            <Button color="green" radius="lg" size="md" onClick={() => setOpened_add(true)}>
                                Agregar
                            </Button>   
                        </Flex>
                            <Table  striped horizontalSpacing="lg" verticalSpacing="md" fontSize="lg">
                                <thead>
                                    <tr>
                                        <th>Domicilio</th>
                                        <th>Nombre</th>
                                        <th>Telefono</th>
                                        <th>Entre Vialidad</th>
                                        <th></th>
                                    </tr>
                                </thead> 
                                <tbody>{rows}</tbody>
                            </Table>                     
                    </Card> 
                    <Space h="xl" />
                    <Flex
                        gap="md"
                        justify="flex-end"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <Image
                            onClick={() => navigate('/home')}
                            height={70} 
                            fit="contain"
                            src={SGResidentWhite}
                        />
                    </Flex>  
                </Flex>
        </MainLayout>
    )
}

export default Residents