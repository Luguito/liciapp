import React, { useEffect, useState, FC } from 'react';
import { ContainerItems, Items, NewActionButton } from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material'
import { CustomAutoComplete, Container, CustomTextField, ContainerCustomField } from './utils.styled';
import RemoveIcon from '@mui/icons-material/Remove';
import { TreeView, TreeItem } from '@mui/lab';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface testContainerProps {
    fn: any;
    edit?: any;
}

export const TestContainer: FC<testContainerProps> = ({ fn, edit }) => {
    const [itemIndex, setIndex] = useState('0');

    const [name, setName] = useState(edit ?? [
        {
            name: 'list',
            unit: "",
            qty: 0,
            qtyUnit: 0,
            id: '0',
            child: [],
        },
    ]);

    const showIndex = (item?) => {
        let index = item ?? itemIndex;
        let element = getElement(index, false);

        element.child && element.child.push({
            name: '',
            unit: "",
            qty: 0,
            qtyUnit: 0,
            id: element.id + '.' + element.child.length,
            child: [],
        })

        !element.child && element.push({
            name: '',
            unit: "",
            qty: 0,
            qtyUnit: 0,
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
            qty: 0,
            qtyUnit: 0,
            id: name.length.toString(),
            child: [],
        });

        setName([...name])
    }

    const deleteItem = () => {
        let item = itemIndex;

        let element = getElement(item, false);

        console.log(element)

        // setName([...name]);
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

            <NewActionButton startIcon={<AddIcon />} onClick={() => showIndex()}>Nuevo Item</NewActionButton>
            <NewActionButton startIcon={<AddIcon />} onClick={() => addRow()}>Nueva Fila</NewActionButton>
            <NewActionButton startIcon={<RemoveIcon />} onClick={() => deleteItem()}>Eliminar Item</NewActionButton>
        </div>
    );
};

export default TestContainer;

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
                <ContainerCustomField>
                    <CustomAutoComplete
                        style={{ width: '20%' }}
                        options={unitOptions}
                        // @ts-ignore
                        getOptionLabel={(option) => option}
                        value={item.unit ?? 'und'}
                        onChange={(event, value) => setValue(value, 'unit', id)}
                        renderInput={(params) => (
                            <TextField {...params} />
                        )}
                    />
                    <CustomTextField type="number" value={item.qty ?? 0} onChange={({ target }) => setValue(target.value, 'qty', id)} />
                    <CustomTextField type="number" value={item.qtyUnit ?? 0} onChange={({ target }) => setValue(target.value, 'qtyUnit', id)} />
                    <p>{'$' + (item.qtyUnit * item.qty)}</p>
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