import React, { useEffect, useState, FC } from 'react';
import { ContainerItems, Items, NewActionButton } from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material'
import { CustomAutoComplete, Container, CustomTextField, ContainerCustomField, InputContainer, Label } from './utils.styled';
import RemoveIcon from '@mui/icons-material/Remove';
import { TreeView, TreeItem } from '@mui/lab';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface testContainerProps {
    fn: any;
    edit?: any;
    proposal: boolean
}

export const TestContainer: FC<testContainerProps> = ({ fn, edit, proposal }) => {
    const [itemIndex, setIndex] = useState('0');

    console.log({ fn, edit })

    const [name, setName] = useState([]);


    useEffect(() => {
        setName(edit ? edit :
            [
                {
                    name: 'list',
                    unit: "",
                    quantity: 0,
                    "partial-amount": 0,
                    "unit-amount": 0,
                    id: '0',
                    child: [],
                },
            ]
        )
    }, [edit])

    const showIndex = (item?) => {
        let index = item ?? itemIndex;
        let element = getElement(index, false);

        element.child && element.child.push({
            id: element.id + '.' + element.child.length,
            name: '',
            unit: "",
            quantity: 0,
            "partial-amount": 0,
            "unit-amount": 0,
            child: [],
        })

        !element.child && element.push({
            name: '',
            unit: "",
            quantity: 0,
            "partial-amount": 0,
            "unit-amount": 0,
            id: index + '.' + element.length,
            child: [],
        })

        setName([...name]);
    };

    const changeInput = (value, field, id) => {
        let newObject = getElement(id, true);

        newObject[field] = value;

        setName([...name]);
        fn(name)
    }

    const getElement = (id, findChild: boolean) => {
        if (id.split('.').length == 1) {
            return name[id]
        } else {
            let child;

            id.split('.').map((v, i) => {
                let index = Number(v);
                child = !child ? name[index].child : (!findChild ? (child[index].child ? child[index].child : child[index]) : (i === id.split('.').length - 1 ? child[index] : child[index].child));
            });

            return child
        }
    }

    const addRow = () => {
        name.push({
            name: '',
            unit: "",
            quantity: 0,
            "partial-amount": 0,
            id: name.length.toString(),
            "unit-amount": 0,
            child: [],
        });

        setName([...name])
    }

    const deleteItem = () => {
        let indexArr = itemIndex.split('.');

        let itemDeleted = indexArr.splice(indexArr.length - 1, 1).join();

        let element = getElement(indexArr.join('.'), false);

        element.child ? delete element.child[itemDeleted] : delete element[itemDeleted];

        setName([...name])
    }
    const dummyOptions = [
        'EXCAVACION Y RETIRO DEL MATERIAL',
        'RELLENO PIEDRA RAJON',
        'RELLENO CON TRITURADO CALIZO TM 3 PULGADAS',
        'SUMINISTRO E INSTALACIÓN DE GEOTEXTIL FORTEX BX-40 O SIMILAR',
        'SUMINISTRO E INSTALACIÓN DE GEOMALLA TENSAR TX-160 O SIMILAR',
        'CONFORMACION Y COMPACTACION DE BANCA'
    ];
    return (
        <div>
            <TreeView defaultCollapseIcon={<ArrowRightIcon />} defaultExpandIcon={<ArrowDropDownIcon />} sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <TestItem items={name} fn={setIndex} setValue={changeInput}></TestItem>
            </TreeView>
            {
                !proposal ? (
                    <>
                        <NewActionButton startIcon={<AddIcon />} onClick={() => showIndex()}>Nuevo Item</NewActionButton>
                        <NewActionButton startIcon={<AddIcon />} onClick={() => addRow()}>Nueva Fila</NewActionButton>
                        <NewActionButton startIcon={<RemoveIcon />} onClick={() => deleteItem()}>Eliminar Item</NewActionButton>
                    </>
                ) : null
            }

        </div>
    );
};

export default TestContainer;

const getId = (id: string) => {
    const caracteres = id.split('.');
    const value = caracteres.length == 1 ? Number(id) + 1 : caracteres.length > 1 && Number(caracteres[1]) == 0 ?
        `${Number(caracteres[0]) + 1}.1` :
        `${Number(caracteres[0])}.${Number(caracteres[1] + 1)}`
    return value
}

export const Item = ({ item, fn, id, setValue }) => {
    const dummyOptions = [
        'EXCAVACION Y RETIRO DEL MATERIAL',
        'RELLENO PIEDRA RAJON',
        'RELLENO CON TRITURADO CALIZO TM 3 PULGADAS',
        'SUMINISTRO E INSTALACIÓN DE GEOTEXTIL FORTEX BX-40 O SIMILAR',
        'SUMINISTRO E INSTALACIÓN DE GEOMALLA TENSAR TX-160 O SIMILAR',
        'CONFORMACION Y COMPACTACION DE BANCA'
    ];
    const unitOptions = ['M2', 'UN', 'GL', 'ML', 'M3']

    return (
        <TreeItem onClick={() => fn(id)} nodeId={id} style={{ marginTop: '0.7em' }} label={
            <Container>
                <p> {id.split('.').map((i, index) => Number(i) + 1 + (id.split('.').length - 1 === index ? '' : '.'))} </p>
                <InputContainer>
                    <Label>Descriptor</Label>
                    <CustomAutoComplete
                        options={dummyOptions}
                        // @ts-ignore
                        getOptionLabel={(option) => option}
                        value={item.name}
                        onChange={(event, value) => setValue(value, 'name', id)}
                        renderInput={(params) => (
                            <TextField {...params} />
                        )}
                    />
                </InputContainer>
                <ContainerCustomField>
                    <InputContainer>
                        <Label>Unidad</Label>
                        <CustomAutoComplete
                            style={{ width: '100%' }}
                            options={unitOptions}
                            // @ts-ignore
                            getOptionLabel={(option) => option}
                            value={item.unit ?? 'und'}
                            onChange={(event, value) => setValue(value, 'unit', id)}
                            renderInput={(params) => (
                                <TextField {...params} />
                            )}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>Cantidad</Label>
                        <CustomTextField type="number" value={item.quantity ?? 0} onChange={({ target }) => setValue(target['valueAsNumber'], 'quantity', id)} />
                    </InputContainer>
                    <InputContainer>
                        <Label>Valor unitario</Label>
                        <CustomTextField type="number" value={item["partial-amount"] ?? 0} onChange={({ target }) => setValue(target['valueAsNumber'], "partial-amount", id)} />
                    </InputContainer>
                    <InputContainer>
                        <Label>Valor total</Label>
                        <p>{'$' + (item["partial-amount"] * item.quantity)}</p>
                    </InputContainer>
                </ContainerCustomField>
            </Container>
        }>
        </TreeItem>
    )
};

export const TestItem = ({ items, fn, setValue }) => {
    useEffect(() => {
        console.log(items);
    }, []);

    return items.map((item, index) => (
        <>
            {
                item.child && item.child.length > 0 ? (
                    <>
                        <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                        <TreeItem nodeId={item.id} label={
                            <TestItem items={item.child} fn={fn} setValue={setValue}></TestItem>
                        }>
                        </TreeItem>
                    </>
                ) : (
                    <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                )
            }

        </>
    ));
}