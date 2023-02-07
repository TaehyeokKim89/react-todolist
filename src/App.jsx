import { useState } from 'react';
import './App.css';
import Header from './component/Header';

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
            const addList = {
                id: list.length + 1,
                title,
                desc,
                isDone: false,
            };
            setList([...list, addList]);
    
            setTitle('');
            setDesc('');             
        
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

            <div className="inputBox">
                <form>
                    <div>
                        <label className="inputName"> 제목 </label>

                        <input
                            type="text"
                            className="inputBoxIn"
                            value={title}
                            onChange={onTitleHandler}
                        ></input>
                        <label className="inputName"> 내용 </label>
                        <input
                            type="text"
                            className="inputBoxIn"
                            value={desc}
                            onChange={onDescHandler}
                        ></input>
                    </div>
                </form>
                <button onClick={clickAddButtonHandler} className="addButton">
                    추가하기
                </button>
            </div>

            <div className="wd">Working.. 할 일을 추가해보세요!</div>
            <div className="backTodoList">
                {list.map((item) => {
                    if (!item.isDone) {
                        return (
                            <div className="toDoList">
                                <div>
                                    <label className="title">{item.title}</label>
                                    <div className="desc">{item.desc}</div>
                                    <div>
                                        <button
                                            onClick={() => deleteButtonHandler(item.id)}
                                            className="deleteButton"
                                        >
                                            삭제하기
                                        </button>
                                        <button
                                            className="doneButton"
                                            onClick={() => doneButtonHandler(item.id)}
                                        >
                                            {list.isDone ? '취소' : '완료'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="wd">Done.. 미션 클리어!</div>
            <div className="backDoneList">
                {list.map((item) => {
                    console.log(item);
                    if (item.isDone) {
                        return (
                            <div key={item.id} className="doneList">
                                <div>
                                    <div className="title">{item.title}</div>
                                    <div className="desc">{item.desc}</div>
                                    <div>
                                        <button
                                            onClick={() => deleteButtonHandler(item.id)}
                                            className="deleteButton"
                                        >
                                            삭제하기
                                        </button>
                                        <button
                                            className="cancelButton"
                                            onClick={() => doneButtonHandler(item.id)}
                                        >
                                            {list.isDone ? '완료' : '취소'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default App;
