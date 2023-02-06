import { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([
        { id: 1, title: '리액트 공부하기', desc: '리액트 기초를 공부해봅시다', isDone: false },
    ]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const onDescHandler = (event) => {
        setDesc(event.target.value);
    };
    const clickAddButtonHandler = () => {
        const addList = {
            id: list.length + 1,
            title,
            desc,
            isDone: false,
        };
        setList([...list, addList]);
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
            <div className="header">
                <div>My Todo List</div>
                <div>React</div>
            </div>

            <div className="inputBox">
                <div>
                    <b>제목</b>{' '}
                    <input
                        type="text"
                        className="inputBoxIn"
                        value={title}
                        onChange={onTitleHandler}
                    ></input>
                    <b>내용</b>{' '}
                    <input
                        type="text"
                        className="inputBoxIn"
                        value={desc}
                        onChange={onDescHandler}
                    ></input>
                </div>

                <button onClick={clickAddButtonHandler} className="addButton">
                    추가하기
                </button>
            </div>

            <div>Working..</div>
            <div className="backTodoList">
                {list.map((item) => {
                    if (!item.isDone) {
                        return (
                            <div className="toDoList">
                                <div>
                                    <div>{item.title}</div>
                                    <div>{item.desc}</div>
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
                                            완료
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div>Done..</div>
            <div className="backDoneList">
                {list.filter((item) => {
                    console.log(item)
                    if (item.isDone) {
                        return (
                            <div key={item.id} className="toDoList">
                                <div>
                                    <div>{item.title}</div>
                                    <div>{item.desc}</div>
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
                                            완료
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
