import React, { useEffect, useState } from 'react';
import { ContainerItems, Items, NewActionButton } from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material'
import { CustomAutoComplete, Container, CustomTextField, ContainerCustomField } from './utils.styled';

export const TestContainer = ({ fn }) => {
    const [itemIndex, setIndex] = useState('');

    const [name, setName] = useState([
        {
            name: 'Francisco',
            unit: 0,
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
            unit: 0,
            qty: 0,
            qtyUnit: 0,
            id: element.id + '.' + element.child.length,
            child: [],
        })

        !element.child && element.push({
            name: '',
            unit: 0,
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
        console.log(newObject)

        setName([...name]);
        fn(name)
    }

    const getElement = (id, findChild: boolean) => {
        if (id.split('.').length == 1) {
            return name[id]
        } else {
            let child;

            id.split('.').map((v) => {
                let index = Number(v);
                child = !child ? name[index].child : (!findChild ? (child[index].child ? child[index].child : child[index]) : child[index].child);
            });

            return child
        }
    }

    return (
        <div>
            <TestItem items={name} fn={setIndex} setValue={changeInput}></TestItem>
            <NewActionButton startIcon={<AddIcon />} onClick={() => showIndex()}>Nuevo Item</NewActionButton>
        </div>
    );
};

export const Item = ({ name, fn, id, setValue }) => {
    const dummyOptions = ['Fuego', 'Peter', 'Parker', 'Francisco'];

    return <Items onClick={() => fn(id)}>
        <OpenWithIcon></OpenWithIcon>
        <Container>
            <CustomAutoComplete
                options={dummyOptions}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                    <TextField {...params} onChange={({ target }) => setValue(target.value, 'name', id)} />
                )}
            />
            <ContainerCustomField>
                <CustomTextField onChange={({ target }) => setValue(target.value, 'unit', id)} />
                <CustomTextField onChange={({ target }) => setValue(target.value, 'qty', id)} />
                <CustomTextField onChange={({ target }) => setValue(target.value, 'qtyUnit', id)} />
                <p>$2000</p>
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
                        <Item name={item.name} fn={fn} id={item.id} setValue={setValue}></Item>
                        <ContainerItems>
                            <TestItem items={item.child} fn={fn} setValue={setValue}></TestItem>
                        </ContainerItems>
                    </>
                ) : (
                    <Item name={item.name} fn={fn} id={item.id} setValue={setValue}></Item>
                )
            }

        </>
    ));
}