import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons';
import { FaArrowLeft , FaTrashAlt, FaExclamationCircle, FaPen, FaPrint, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Flex, Card, Grid, Title, Button, Modal, Table, Alert, Text, Space, Image, Loader } from '@mantine/core';

import SGResidentWhite from '../assets/SGResidentWhite.png';

function Payments(){
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();
    const [opened_mod, setOpened_mod] = useState(false);
    const [opened_det, setOpened_det] = useState(false);
    const [opened_pri, setOpened_pri] = useState(false);
    const elements = [{ domicilio: 0, vialidad: 0, phoneNumber: 0, name: 0 , entre_vialidad_2: 0, referencia: 0, edad: 0, sexo: 0, situacion: 0, pagos_atrasados: 0, meses_pagados: 0, tipo_de_pago: 0, fecha: 0, hora: 0, cantidad: 0 }];

    const rows = elements.map((element) => ( 
        <tr key={element.name}>    
            <td>{element.domicilio}</td>
            <td>{element.name}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.vialidad}</td>
            <td>
                <Flex justify="center" align="center" gap="lg">
                    <Button color="yellow" radius="xl" size="sm" onClick={() => setOpened_mod(true)}>
                        <FaPen size="20px" color="white" />
                    </Button> 
                
                    <Button color="cyan" radius="xl" size="sm" onClick={() => setOpened_det(true)}>
                        <FaExclamationCircle size="20px" color="white" />
                    </Button> 
                
                    <Button color="red" radius="xl" size="sm" onClick={() => setOpened(true)}>
                        <FaTrashAlt size="20px" color="white" />   
                    </Button> 
                
                    <Button color="indigo" radius="xl" size="sm" onClick={() => setOpened_pri(true)}>
                        <FaPrint size="20px" color="white" />   
                    </Button>    
                </Flex>
            </td>
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
            <Space h="50px" />
            <Flex
                justify="center"
                align="center"
                direction="column"
            >
                <Card  shadow="sm" p="lg" radius="md" mih="600px" miw="1400px" withBorder> 
                    <FaArrowLeft size="20px" color="#7AC4C5" onClick={() => navigate('/Residents')}/>
                    <Title align="center" size={35}  fw={700} c= "cyan">Pagos</Title> 
                    <Modal
                        opened={opened_pri}
                        onClose={() => setOpened_pri(false)}
                        centered
                        size="md"
                        overlayOpacity={0.55}
                        overlayBlur={3}
                    >
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                        >
                            <Title align="center" size={25}  fw={700} c= "violet">
                                Se imprimira el ultimo pago realizado...
                            </Title>
                            <Space h="50px" />
                            <Loader color="violet" size="xl" variant="dots" />
                            <Space h="50px" />
                            <Button onClick={() => setOpened_pri(false)} color="gray" radius="lg" size="lg">Cancelar</Button>
                        </Flex>
                    </Modal>
                    <Modal
                        onClose={() => setOpened(false)}
                        centered
                        size="md"
                        title="Eliminar"
                        opened={opened}
                        overlayOpacity={0.55}
                        overlayBlur={3}
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
                                Al eliminar esta informacion del pago no se borrara en su totalidad del sistema, entrara en un estado de inactividad.
                            </Alert>
                                <Button  onClick={() => setOpened(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                <Button color="red"radius="lg" size="md" onClick={() => setOpened(false)} >Eliminar</Button> 
                        </Flex>
                    </Modal>  
                    <Modal
                        onClose={() => setOpened_det(false)}
                        centered
                        size="70%"
                        title="Detalles"
                        opened={opened_det}
                        overlayOpacity={0.55}
                        overlayBlur={3}
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
                        <Space h="25px" />    
                        <Grid gutter="xl">
                            <Grid.Col span={4}  offset={4}> 
                                <Flex
                                    gap="md"
                                    justify="center"
                                    align="flex-end"
                                    direction="row"
                                    >
                                    <Button onClick={() => setOpened_det(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                    <Button onClick={() => setOpened_det(false)} color="cyan" radius="lg" size="md">Guardar</Button>
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
                    >      
                         <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Tipo de Pago</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Cantidad</th>
                                    <th>
                                        <Flex justify="center" align="center" gap="lg">
                                            <Button color="yellow" radius="xl" size="sm" onClick={() => setOpened_mod(true)}>
                                                <FaPen size="20px" color="white" />
                                            </Button> 
                                        </Flex>
                                    </th>
                                </tr>
                            </thead> 
                            <tbody>{rows_4}</tbody>
                        </Table> 
                        <Space h="25px" />
                        <Flex
                            gap="md"
                            justify="center"
                            align="flex-end"
                            direction="row"
                            wrap="wrap"
                            >
                            <Button onClick={() => setOpened_mod(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                            <Button onClick={() => setOpened_mod(false)} color="yellow" radius="lg" size="md">Guardar</Button>
                        </Flex>
                    </Modal> 
                    <Flex
                        gap="md"
                        justify="flex-end"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <FaSearch size="20px" color="#7AC4C5" />
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