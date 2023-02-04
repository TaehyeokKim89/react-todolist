import { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([
        { id: 1, title: '리액트 공부하기', desc: '리액트 기초를 공부해봅시다' },
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
        };

        setList([...list, addList]);
    };

    return (
        <div className="main">
            <div className="header">
                <div>My Todo List</div>
                <div>React</div>
            </div>

            <div className="inputBox">
                <div>
                    제목 <input type="text" value={title} onChange={onTitleHandler}></input>
                    내용 <input type="text" value={desc} onChange={onDescHandler}></input>
                </div>

                <button onClick={clickAddButtonHandler}>추가하기</button>
            </div>
            <div>Working..</div>
            <div className="backTodoList">
                
                    {list.map((item) => {
                        return (
                          <div className="toDoList">
                            <div>
                                <div>{item.title}</div>
                                <div>{item.desc}</div>
                                <div>
                                    <button>삭제하기</button>
                                    <button>완료하기</button>
                                </div>
                            </div>
                            </div>
                        );

                    })}
                
            </div>
            <div className="backDoneList">
                <div>Done..</div>
                <div className="toDoList">
                    <div>리액트 공부하기</div>
                    <div>리액트 기초를 공부해봅시다.</div>
                    <div>
                        <button>삭제하기</button>
                        <button>완료하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
