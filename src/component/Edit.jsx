import React from 'react';

function Edit({list,setList,item}) {
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
        <div>
            <div className="toDoList">
                <div>
                    <label className="title">{item.title}</label>
                    <div className="desc">{item.desc}</div>
                    <div className="button">
                        <button
                            onClick={() => deleteButtonHandler(item.id)}
                            className="deleteButton"
                        >
                            삭제
                        </button>
                        <button className="doneButton" onClick={() => doneButtonHandler(item.id)}>
                            {item.isDone ? '취소' : '완료'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
