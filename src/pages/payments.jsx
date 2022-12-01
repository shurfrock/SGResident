import MainLayout from "../layouts/MainLayout"

import { useState } from 'react';
import dayjs from "dayjs";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { IconAlertCircle } from '@tabler/icons';
import { FaArrowLeft , FaTrashAlt, FaExclamationCircle, FaPen, FaPrint, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Flex, Card, Grid, Title, Button, Modal, Table, Alert, Text, Space, Image, Loader } from '@mantine/core';

import SGResidentWhite from '../assets/SGResidentWhite.png';
import axios from '../configs/axios'

function Payments(){
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();
    const [opened_mod, setOpened_mod] = useState(false);
    const [opened_det, setOpened_det] = useState(false);
    const [opened_pri, setOpened_pri] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    const queryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ['payments'],
        queryFn: () => axios.get('/payment').then(res => res.data),
    })
    
    const deleteMutation = useMutation({
        mutationFn: ({ id }) => axios.delete(`/payment/${id}`),
        onError: (error) => {
            console.log('PaymentError', error)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['payments'] })
            setError('')
            setOpened_add(false)
        }
    })

    const payments = data || [];

    const selectedPayment = payments.find(({ id }) => id === selectedId)

    const rows = payments.map((element) => ( 
        <tr key={element.id}>    
            <td>{element?.resident?.address}</td>
            <td>{element.resident.name}</td>
            <td>{element.person}</td>
            <td>{element.amount}</td>
            <td>{element?.resident?.active ? 'Activo' : 'Inactivo'}</td>
            <td>
                <Flex justify="center" align="center" gap="lg">
                    <Button color="yellow" radius="xl" size="sm" onClick={() => { setSelectedId(element.id); setOpened_mod(true); }}>
                        <FaPen size="20px" color="white" />
                    </Button> 
                
                    <Button color="cyan" radius="xl" size="sm" onClick={() => { setSelectedId(element.id); setOpened_det(true); }}>
                        <FaExclamationCircle size="20px" color="white" />
                    </Button> 
                
                    <Button color="red" radius="xl" size="sm" onClick={() => { setSelectedId(element.id); setOpened(true); }}>
                        <FaTrashAlt size="20px" color="white" />   
                    </Button> 
                
                    <Button color="indigo" radius="xl" size="sm" onClick={() => { setSelectedId(element.id); setOpened_pri(true); }}>
                        <FaPrint size="20px" color="white" />   
                    </Button>    
                </Flex>
            </td>
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
                                <Button
                                    color="red"
                                    radius="lg"
                                    size="md"
                                    onClick={() => {
                                        deleteMutation.mutate({ id: selectedId });
                                        setOpened(false);
                                    }}
                                >
                                    Eliminar
                                </Button> 
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
                                    <th>Nombre del Residente</th>
                                    <th>Quien pagó</th>
                                    <th>Cantidad</th>
                                    <th>Tipo</th>
                                    <th>Fecha de pago</th>
                                    <th>Estado</th>
                                </tr>
                            </thead> 
                            <tbody>
                                {selectedPayment && (
                                    <tr>
                                        <td>{selectedPayment?.resident?.address}</td>
                                        <td>{selectedPayment?.resident?.name}</td>
                                        <td>{selectedPayment.person}</td>
                                        <td>{selectedPayment.amount}</td>
                                        <td>{selectedPayment.type}</td>
                                        <td>{dayjs(selectedPayment.createdAt).format('lll')}</td>
                                        <td>{selectedPayment?.resident?.active ? 'Activo' : 'Inactivo'}</td>
                                    </tr>  
                                )} 
                            </tbody>
                        </Table>  
                        <Table  striped horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                            <thead>
                                <tr>
                                    <th>Entre vialidad 1</th>
                                    <th>Entre vialidad 2</th>
                                    <th>Telefono</th>
                                    <th>Edad</th>
                                    <th>Sexo</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead> 
                            <tbody>
                                {selectedPayment && (
                                    <tr>
                                        <td>{selectedPayment?.resident?.firstRoad}</td>    
                                        <td>{selectedPayment?.resident?.secondRoad}</td>
                                        <td>{selectedPayment?.resident?.phone}</td>
                                        <td>{selectedPayment?.resident?.age}</td>
                                        <td>{selectedPayment?.resident?.gender}</td>
                                        <td>{selectedPayment?.resident?.description}</td>  
                                    </tr> 
                                )}
                            </tbody>
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
                            {/* <tbody>{rows_4}</tbody>*/}
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
                                <th>Nombre del Residente</th>
                                <th>Quien pagó</th>
                                <th>Cantidad</th>
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