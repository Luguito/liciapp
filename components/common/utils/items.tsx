import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { Item } from '../../project/ProyectEdit/edit.styled';
import OpenWithIcon from '@mui/icons-material/OpenWith';

export const TestContainer = () => {
    const [itemIndex, setIndex] = useState('');
    const [indexParent, setParent] = useState([]);
    const [name, setName] = useState([
        {
            name: 'francisco',
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
            <button onClick={() => showIndex()}>New line</button>
        </div>
    );
};

// export const TestItem = ({ items, fn }) => {
//     return items.map((item, index) => (
//         <ul>
//             {item.child && item.child.length > 0 ? (
//                 <div>
//                     <Item key={index} name={item?.name} fn={fn} id={item.id}></Item>
//                     <TestItem items={item?.child} fn={fn}></TestItem>
//                 </div>
//             ) : (
//                 <Item key={index} name={item?.name} fn={fn} id={item.id}></Item>
//             )}
//         </ul>
//     ));
// };

// export const Item = ({ name, fn, id }) => {
//     return <li onClick={() => fn(id)}>{name}</li>;
// };

export default TestContainer;


export const TestItem = ({ items, fn }) => {
    useEffect(()=> {
        console.log(items)
    },[])
    return items.map((item, index) => (
        <>
            {
                item.child && item.child.length > 0 ? (
                    <>
                        <TreeItem nodeId={index} label={() => <TreeItems name={item.name} fn={fn} id={item.id}></TreeItems>} />
                        <TestItem items={item.child} fn={fn}></TestItem>
                    </>
                ) : (
                    <TreeItem nodeId={index} label="Test" onClick={() => fn(item.id)}/>
                )
            }

        </>
    ));
}

export const TreeItems = ({ name, fn, id }) => {
    useEffect(() => {
        console.log(name)
    }, [])
    return <Item onClick={() => fn(id)}>
        <p>Premilinares</p>
        <p>m2</p>
        <p>200</p>
        <p>10</p>
        <p>2000</p>
    </Item>
}