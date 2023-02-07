import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Input from './component/Input';
import List from './component/List';

function App() {
    const [list, setList] = useState([
        { id: 0, title: '오늘 할 일!', desc: '어떤 것을 해볼까?', isDone: false },
    ]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const onDescHandler = (event) => {
        setDesc(event.target.value);
    };
    const clickAddButtonHandler = (event) => {
        const getTitle = document.getElementById('title');
        const getDesc = document.getElementById('desc');
        if (getTitle.value.length == 0) {
            return false;
        } else if (getDesc.value.length == 0) {
        } else {
            const addList = {
                id: list.length + 1,
                title,
                desc,
                isDone: false,
            };
            setList([...list, addList]);

            setTitle('');
            setDesc('');
        }
    };
    const deleteButtonHandler = (id) => {
        const newList = list.filter((list) => list.id !== id);
        setList(newList);
    };

    const doneButtonHandler = (id) => {
        const doneLits = list.map((x) => {
            if (x.id === id) {
                return {
                    ...x,
                    isDone: !x.isDone,
                };
            } else {
                return { ...x };
            }
        });
        setList(doneLits);
    };

    return (
        <div className="main">
            <Header />
            <Input 
            title={title}
            onTitleHandler={onTitleHandler}
            desc={desc}
            onDescHandler={onDescHandler}
            clickAddButtonHandler={clickAddButtonHandler}
            />
            <List
            list={list}
            deleteButtonHandler={deleteButtonHandler}
            doneButtonHandler={doneButtonHandler}
            />
           

            
        </div>
    );
}

export default App;
