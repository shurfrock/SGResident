import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons';
import { TimeInput, DatePicker} from '@mantine/dates';
import { useNavigate } from "react-router-dom";
import { Flex, Card, Grid, TextInput, Title, Button, Modal, Table, Select, Alert, Text, Space, Image} from '@mantine/core';

import SGResident from '../assets/SGResident.png';
import SGResidentWhite from '../assets/SGResidentWhite.png';

function Payments(){
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();
    const [opened_add, setOpened_add] = useState(false);
    const [opened_mod, setOpened_mod] = useState(false);
    const [opened_det, setOpened_det] = useState(false);

    const elements = [{ domicilio: 0, vialidad: 0, phoneNumber: 0, name: 0 , entre_vialidad_2: 0, referencia: 0, edad: 0, sexo: 0, situacion: 0, pagos_atrasados: 0, meses_pagados: 0, tipo_de_pago: 0, fecha: 0, hora: 0, cantidad: 0 }];

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
                    <td>
                        <Button color="indigo" radius="lg" size="xs">
                            Imprimir
                        </Button> 
                    </td>
                </Grid.Col>
            </Grid>

        </tr>       
      
    ));

    const rows_1 = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.domicilio}</td>
            <td>{element.name}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.vialidad}</td>
        </tr>       
      
    ));

    const rows_2 = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.entre_vialidad_2}</td>
            <td>{element.referencia}</td>
            <td>{element.edad}</td>
            <td>{element.sexo}</td>
            <td>{element.situacion}</td>  
        </tr>          
    ));

    const rows_3 = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.pagos_atrasados}</td>
            <td>{element.meses_pagados}</td>
        </tr>          
    ));

    const rows_4 = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.tipo_de_pago}</td>
            <td>{element.fecha}</td>
            <td>{element.hora}</td>
            <td>{element.cantidad}</td>
        </tr>          
    ));   

    return (
        <MainLayout>
            <Flex
                justify="center"
                align="center"
                direction="column"
                h="100vh"
                >
                <Card  shadow="sm" p="lg" radius="md" mih="600px" miw="1400px" withBorder> 
                    <Title align="center" size={35}  fw={700} c= "cyan">Pagos</Title> 
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
                                Al borrar la informacion del Pago, se borrara el ultimo pago agregado y no se podra volver a acceder a esta informacion.
                            </Alert>

                                <Button  onClick={() => setOpened(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                <Button color="red"radius="lg" size="md">Eliminar</Button> 
                        </Flex>
                    </Modal> 
                    <Modal
                        onClose={() => setOpened_add(false)}
                        centered
                        size="50%"
                        title="Agregar Pago"
                        opened={opened_add}
                        overlayOpacity={0.55}
                        overlayBlur={3}
                        transitionDuration={600}
                        transitionTimingFunction="ease"
                    >      
                        <Grid>
                            <Grid.Col span={7}>
                                <TextInput
                                    placeholder="Nombre Titular"
                                    label="Nombre Titular"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                />   
                                <Space h="sm" />
                                <TextInput
                                    placeholder="Quien realiza el pago"
                                    label="Quien realiza el pago"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                /> 
                            </Grid.Col>  
                            <Grid.Col span={6}>
                                <TextInput
                                    placeholder="Domicilio"
                                    label="Domicilio"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                />   
                            </Grid.Col>   
                            <Grid.Col span={3}> 
                                <TimeInput
                                    defaultValue={new Date()}
                                    radius="lg"
                                    label="Hora"
                                    format="12"
                                    amLabel="AM"
                                    pmLabel="PM"
                                    withAsterisk
                                />
                            </Grid.Col>  
                            <Grid.Col span={3}> 
                                <DatePicker
                                    defaultValue={new Date()}
                                    radius="lg"
                                    placeholder="Fecha"
                                    label="Fecha"
                                    inputFormat="MM/DD/YYYY"
                                    labelFormat="MM/YYYY"
                                    withAsterisk
                                    />
                            </Grid.Col>  
                            <Grid.Col span={5}>
                                <TextInput
                                    placeholder="Concepto"
                                    label="Concepto"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                />   
                            </Grid.Col>   
                            <Grid.Col span={6}> 
                                <Text fz="md" fw={500}>Cantidad a pagar</Text>
                                <Text fz="md">$320.00(trescientos veinte pesos)</Text>
                            </Grid.Col>  
                            <Grid.Col span={5}>
                                <TextInput
                                    placeholder="Cantidad Recibida"
                                    label="Cantidad Recibida"
                                    radius="lg"
                                    size="sm"
                                    withAsterisk
                                />  
                            </Grid.Col>
                            <Grid.Col span={4}> 
                                <Select
                                        label="Tipo de Pago"
                                        placeholder="Tipo de Pago"
                                        data={[
                                            { value: 'Efectivo', label: 'Efectivo' },
                                            { value: 'Transferencia', label: 'Transferencia' },
                                            { value: 'Deposito', label: 'Deposito' },
                                            { value: 'Cheque', label: 'Cheque' },
                                        ]}
                                        
                                        radius="lg"
                                    />
                            </Grid.Col>
                            <Grid.Col span={4}  offset={4}> 
                                <Flex
                                    mih={15}
                                    gap="md"
                                    justify="center"
                                    align="flex-end"
                                    direction="row"
                                    wrap="wrap"
                                    >
                                        <Button color="green" radius="lg" size="md">Agregar Pago</Button>
                                </Flex> 
                            </Grid.Col>  
                        </Grid> 
                    </Modal> 
                    <Modal
                        onClose={() => setOpened_det(false)}
                        centered
                        size="70%"
                        title="Detalles"
                        opened={opened_det}
                        overlayOpacity={0.55}
                        overlayBlur={3}
                        transitionDuration={600}
                        transitionTimingFunction="ease"
                    >   
                         <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Domicilio</th>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Entre Vialidad</th>
                                    <th></th>
                                </tr>
                            </thead> 
                            <tbody>{rows_1}</tbody>
                        </Table>  
                        <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Entre vialidad 2</th>
                                    <th>Referncia</th>
                                    <th>Edad</th>
                                    <th>Sexo</th>
                                    <th>Situacion</th>
                                    <th></th>
                                </tr>
                            </thead> 
                            <tbody>{rows_2}</tbody>
                        </Table>  
                        <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Pagos Atrasados</th>
                                    <th>Meses Pagados</th>
                                    <th></th>
                                </tr>
                            </thead> 
                            <tbody>{rows_3}</tbody>
                        </Table>  
                        <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Tipo de Pago</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead> 
                            <tbody>{rows_4}</tbody>
                        </Table>       
                        <Grid gutter="xl">
                            <Grid.Col span={4}  offset={4}> 
                                <Flex
                                    gap="md"
                                    justify="center"
                                    align="flex-end"
                                    direction="row"
                                    >
                                    <Button onClick={() => setOpened_det(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                    <Button color="cyan" radius="lg" size="md">Guardar</Button>
                                </Flex> 
                            </Grid.Col>  
                        </Grid>
                    </Modal> 
                    <Modal
                        onClose={() => setOpened_mod(false)}
                        centered
                        size="55%"
                        title="Modificar Pago"
                        opened={opened_mod}
                        overlayOpacity={0.55}
                        overlayBlur={3}
                        transitionDuration={600}
                        transitionTimingFunction="ease"
                    >      
                         <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Tipo de Pago</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead> 
                            <tbody>{rows_4}</tbody>
                        </Table> 
                    </Modal> 
                    <Flex
                        gap="md"
                        justify="flex-end"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <Button color="green" radius="lg" size="md" onClick={() => setOpened_add(true)}>
                            Agregar
                        </Button>   
                    </Flex>
                    <Table  striped horizontalSpacing="lg" verticalSpacing="md" fontSize="lg">
                        <thead>
                            <tr>
                                <th>Domicilio</th>
                                <th>Nombre</th>
                                <th>Pagos Atrasados</th>
                                <th>Estado</th>
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

export default Payments