import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { ContainerItems, Items, NewActionButton} from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';

export const TestContainer = () => {
    const [itemIndex, setIndex] = useState('');
    const [indexParent, setParent] = useState([]);
    const [name, setName] = useState([
        {
            name: 'Francisco',
            id: '0',
            child: [],
        },
    ]);

    const handleItems = (newItem) => {
        console.log(newItem);
        setName([...name, newItem]);
    };

    const showIndex = (item?) => {
        let index = item ?? itemIndex;
        console.log(name)
        if (index.split('.').length == 1) {
            name[index].child.push({
                name: 'Peter',
                id: index + '.' + name[index].child.length,
                child: [],
            });
        } else {
            let child;
            index.split('.').map((v) => {
                let index = Number(v);
                child = !child ? name[index].child : child[index].child;
            });

            child.push({
                name: 'Fuego',
                id: index + '.' + child.length,
                child: [],
            });
        }

        setName([...name]);
    };

    return (
        <div>
            <TestItem items={name} fn={setIndex}></TestItem>
            <NewActionButton startIcon={<AddIcon />} onClick={() => showIndex()}>Nuevo Item</NewActionButton>
        </div>
    );
};

export const Item = ({ name, fn, id }) => {
    return <Items onClick={() => fn(id)}><OpenWithIcon></OpenWithIcon>{name}</Items>;
};

export default TestContainer;


export const TestItem = ({ items, fn }) => {
    useEffect(() => {
        console.log(items)
    }, [])
    return items.map((item, index) => (
        <>
            {
                item.child && item.child.length > 0 ? (
                    <>
                        <Item name={item.name} fn={fn} id={item.id}></Item>
                        <ContainerItems>
                            <TestItem items={item.child} fn={fn}></TestItem>
                        </ContainerItems>
                    </>
                ) : (
                    <Item name={item.name} fn={fn} id={item.id}></Item>
                )
            }

        </>
    ));
}