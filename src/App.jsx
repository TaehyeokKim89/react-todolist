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
            return false;
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
            setList={setList}
            /> 
        </div>
    );
}

export default App;
