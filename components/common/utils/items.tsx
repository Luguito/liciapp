import React, { useEffect, useState } from 'react';
import { ContainerItems, Items, NewActionButton } from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material'
import { CustomAutoComplete, Container, CustomTextField, ContainerCustomField } from './utils.styled';

export const TestContainer = ({ fn, edit }) => {
    const [itemIndex, setIndex] = useState('');

    const [name, setName] = useState(edit ?? [
        {
            name: 'Francisco',
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

    return (
        <div>
            <TestItem items={name} fn={setIndex} setValue={changeInput}></TestItem>
            <NewActionButton startIcon={<AddIcon />} onClick={() => showIndex()}>Nuevo Item</NewActionButton>
            <NewActionButton startIcon={<AddIcon />} onClick={() => addRow()}>Nueva Fila</NewActionButton>
        </div>
    );
};

export const Item = ({ item, fn, id, setValue }) => {
    const dummyOptions = ['Fuego', 'Peter', 'Parker', 'Francisco'];
    const unitOptions = ['und', 'mts', 'cm']
    return <Items onClick={() => fn(id)}>
        <OpenWithIcon></OpenWithIcon>
        <Container>
            <CustomAutoComplete
                options={dummyOptions}
                getOptionLabel={(option) => 'Item'}
                renderInput={(params) => (
                    <TextField {...params} onChange={({ target }) => setValue(target.value, 'name', id)} />
                )}
            />
            <ContainerCustomField>
                <CustomAutoComplete
                    style={{width: '20%'}}
                    options={unitOptions}
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
    </Items>;
};

export default TestContainer;


export const TestItem = ({ items, fn, setValue }) => {
    useEffect(() => {
        console.log(items)
    }, [])
    return items.map((item, index) => (
        <>
            {
                item.child && item.child.length > 0 ? (
                    <>
                        <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                        <ContainerItems>
                            <TestItem items={item.child} fn={fn} setValue={setValue}></TestItem>
                        </ContainerItems>
                    </>
                ) : (
                    <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                )
            }

        </>
    ));
}