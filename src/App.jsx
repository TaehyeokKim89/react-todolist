import { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([
        { id: 0, title: '', desc: '', isDone: false },
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
                    <label className='inpuName'> 제목 </label>
                    <input
                        type="text"
                        className="inputBoxIn"
                        value={title}
                        onChange={onTitleHandler}
                    ></input>
                    <label className='inpuName'> 내용 </label>
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

            <div className='wd'>Working..</div>
            <div className="backTodoList">
                {list.map((item) => {
                    if (!item.isDone) {
                        return (
                            <div className="toDoList">
                                <div>
                                    <textarea rows="3" className='title' type="text" value={item.title}> </textarea>
                                    <div className='desc'>{item.desc}</div>
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
            <div className='wd'>Done..</div>
            <div className="backDoneList">
                {list.map((item) => {
                    console.log(item);
                    if (item.isDone) {
                        return (
                            <div key={item.id} className="toDoList">
                                <div>
                                    <div className='title'>{item.title}</div>
                                    <div className='desc'>{item.desc}</div>
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
