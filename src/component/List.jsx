import React from 'react';
import Edit from './Edit';

const List = ({ list, deleteButtonHandler, doneButtonHandler }) => {
    return (
        <div>
            <div className="wd">Working.. 할 일을 추가해보세요!</div>
            <div className="backTodoList">
                {list.map((item) => {
                    if (!item.isDone) {
                        return (
                            <Edit
                                item={item}
                                deleteButtonHandler={deleteButtonHandler}
                                doneButtonHandler={doneButtonHandler}
                                list={list}
                            />
                        );
                    }
                })}
            </div>
            <div className="wd">Done.. 미션 클리어!</div>
            <div className="backTodoList">
                {list.map((item) => {
                    console.log(item);
                    if (item.isDone) {
                        return (
                            <Edit
                                item={item}
                                deleteButtonHandler={deleteButtonHandler}
                                doneButtonHandler={doneButtonHandler}
                                list={list}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default List;
