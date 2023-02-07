import React from 'react';

function Edit({item,list,deleteButtonHandler,doneButtonHandler}) {
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
                            삭제하기
                        </button>
                        <button className="doneButton" onClick={() => doneButtonHandler(item.id)}>
                            {list.isDone ? '취소' : '완료'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
