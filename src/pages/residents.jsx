import MainLayout from "../layouts/MainLayout";

import { useState } from 'react';
import { z } from 'zod'
import { useNavigate } from "react-router-dom";
import { IconAlertCircle } from '@tabler/icons';
import { useMutation } from "@tanstack/react-query";
import { useForm, zodResolver } from '@mantine/form';
import { TimeInput, DatePicker} from '@mantine/dates';
import { Flex, Card, Grid, TextInput, Title, Text, Button, Modal, Table, Select, Alert, NativeSelect, Space, Image, NumberInput } from '@mantine/core';
import { useQuery } from '@tanstack/react-query'

import SGResidentWhite from '../assets/SGResidentWhite.png';
import { FaArrowLeft, FaTrashAlt, FaExclamationCircle, FaPen, FaSearch, FaDonate } from "react-icons/fa";
import axios from "../configs/axios";

const schema = z.object({
    name: z.string().min(5),
    address: z.string().min(8),
    phone: z.string().min(4),
    age: z.number().min(2),
    gender: z.string().min(3),
    description: z.string().min(5),
    firstRoad: z.string().min(5),
    secondRoad: z.string().min(5),
})

function Residents(){ 
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [opened, setOpened] = useState(false);
    const [opened_addP, setOpened_addP] = useState(false);
    const [opened_add, setOpened_add] = useState(false);
    const [opened_mod, setOpened_mod] = useState(false);
    const [opened_det, setOpened_det] = useState(false);
    const [datePicker, setDatePicker] = useState(new Date())
    const [timeInput, setTimeInput] = useState(new Date())
    const [selectedId, setSelectedId] = useState(null)
    console.log("🚀 ~ file: residents.jsx:39 ~ Residents ~ selectedId", selectedId)

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            address: '',
            phone: '',
            age: '',
            gender: '',
            description: '',
            firstRoad: '',
            secondRoad: '',
        },
    })

    const { isLoading, data } = useQuery({
        queryKey: ['resident'],
        queryFn: () => axios.get('/resident').then(res => res.data),
    })
    console.log("🚀 ~ file: residents.jsx:59 ~ Residents ~ data", data)

    const mutation = useMutation({
        mutationFn: ({ name, address, phone, age, gender, description, firstRoad, secondRoad }) => axios.post('/resident', { name, address, phone, age, gender, description, firstRoad, secondRoad }),
        onError: (error) => {
            console.log()
        },
        onSuccess: () => {
            setError('')
            setOpened_add(false)
        }
    })

    const handleOnSubmit = (values) => {
        console.log(values)
        mutation.mutate(values) 
    }

    const rows = (data || []).map((element) => ( 
        <tr key={element.id}>    
            <td>{element.address}</td>
            <td>{element.name}</td>
            <td>{element.phone}</td>
            <td>{element.firstRoad}</td>
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
                    <Button color="green" radius="xl" size="sm" onClick={() => { setSelectedId(element.id); setOpened_addP(true); }}>
                        <FaDonate size="20px" color="white"/>
                    </Button>   
                </Flex>
            </td>

        </tr>       
      
    ));

    return(
        <MainLayout>
                <Space h="50px" />
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                >            
                    <Card shadow="sm" p="lg" radius="md" mih="600px" miw="1400px" withBorder> 
                        <FaArrowLeft size="20px" color="#7AC4C5" onClick={() => navigate('/home')}/>  
                        <Title align="center" size={35} fw={700} c="cyan">Residentes</Title> 
                        <Modal
                            onClose={() => setOpened(false)}
                            centered
                            size="md"
                            title="Eliminar"
                            opened={opened}
                            overlayOpacity={0.55}
                            overlayBlur={3}
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
                                    Al eliminar esta informacion del residente no se borrara en su totalidad del sistema, entrara en un estado de inactividad.
                                </Alert>

                                    <Button onClick={() => setOpened(false)} color="gray" radius="lg" size="md">Cancelar</Button>
                                    <Button onClick={() => setOpened(false)} color="red"radius="lg" size="md">Eliminar</Button> 
                            </Flex>
                        </Modal> 
                        <Modal
                            onClose={() => setOpened_addP(false)}
                            centered
                            size="50%"
                            title="Agregar Pago"
                            opened={opened_addP}
                            overlayOpacity={0.55}
                            overlayBlur={3}
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
                                        value={timeInput}
                                        onChange={setTimeInput}

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
                                        value={datePicker}
                                        onChange={setDatePicker}
                                    />
                                </Grid.Col>  
                                <Grid.Col span={5}>
                                    <Text fz="md" fw={500}>Concepto</Text>
                                    <Text fz="md">Pago de Residente</Text>
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
                                            <Button onClick={() => setOpened_addP(false)} color="green" radius="lg" size="md">Agregar Pago</Button>
                                    </Flex> 
                                </Grid.Col>  
                            </Grid> 
                        </Modal>
                        <Modal
                            onClose={() => setOpened_add(false)}
                            centered
                            size="50%"
                            title="Agregar Residente"
                            opened={opened_add}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                        >      
                            {error && <Alert title="Error" color="red">
                                    {error}
                            </Alert>}  
                            <form onSubmit={form.onSubmit(handleOnSubmit)}> 
                                <Grid>
                                    <Grid.Col span={8}>
                                        <TextInput
                                            placeholder="Nombre Completo"
                                            label="Nombre Completo"
                                            radius="lg"
                                            size="sm"
                                            withAsterisk
                                            {...form.getInputProps('name')}
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
                                            {...form.getInputProps('address')}
                                        />   
                                    </Grid.Col>   
                                    <Grid.Col span={3}> 
                                        <TextInput
                                            placeholder="Entre Vialidad - 1"
                                            label="Entre Vialidad - 1"
                                            radius="lg"
                                            size="sm"
                                            withAsterisk
                                            {...form.getInputProps('firstRoad')}
                                        /> 
                                    </Grid.Col>  
                                    <Grid.Col span={3}> 
                                        <TextInput
                                            placeholder="Entre Vialidad - 2"
                                            label="Entre Vialidad - 2"
                                            radius="lg"
                                            size="sm"
                                            withAsterisk
                                            {...form.getInputProps('secondRoad')}
                                        /> 
                                    </Grid.Col>  
                                    <Grid.Col span={3}> 
                                        <NativeSelect
                                            data={['Otro', 'Masculino', 'Femenino']}
                                            label="Sexo"
                                            radius="lg"
                                            withAsterisk
                                            {...form.getInputProps('gender')}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={3}> 
                                        <NumberInput
                                            defaultValue={0}
                                            placeholder="Edad"
                                            label="Edad"
                                            size="sm"
                                            radius="lg"
                                            withAsterisk
                                            {...form.getInputProps('age')}
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
                                            {...form.getInputProps('phone')}
                                        />   
                                    </Grid.Col>   
                                    <Grid.Col span={6}> 
                                        <TextInput
                                            placeholder="Referencia"
                                            label="Referencia"
                                            radius="lg"
                                            size="sm"
                                            withAsterisk
                                            {...form.getInputProps('description')}
                                        /> 
                                    </Grid.Col>  
                                </Grid> 
                                <Grid>
                                    <Grid.Col span={4}  offset={4}> 
                                        <Space h="20px" />
                                        <Flex
                                            mih={15}
                                            gap="md"
                                            justify="center"
                                            align="flex-end"
                                            direction="row"
                                            wrap="wrap"
                                            >
                                                <Button type="submit" color="green" radius="lg" size="lg" >Agregar</Button>
                                        </Flex> 
                                    </Grid.Col>  
                                </Grid> 
                            </form>                            
                        </Modal> 
                        <Modal
                            onClose={() => setOpened_det(false)}
                            centered
                            size="50%"
                            title="Detalles"
                            opened={opened_det}
                            overlayOpacity={0.55}
                            overlayBlur={3}
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
                                    <Button color="cyan" radius="lg" size="md" onClick={() => setOpened_det(false)} >Atras</Button>
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
                                        <Button onClick={() => setOpened_mod(false)} color="yellow" radius="lg" size="md">Guardar</Button>
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
                            <FaSearch size="20px" color="#7AC4C5" />
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