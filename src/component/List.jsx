import React from 'react';
import Edit from './Edit';

const List = ({ list,setList}) => {
    return (
        <div>
            <div className="wd">Working.. 할 일을 추가해보세요!✨</div>
            <div className="backTodoList">
                {list.map((item) => {
                    if (!item.isDone) {
                        return (
                            <Edit key={item.id}
                                list={list}
                                item={item}
                                setList={setList}
                            />
                        );
                    }
                })}
            </div>
            <div className="wd">Done.. 미션 클리어!👌</div>
            <div className="backTodoList">
                {list.map((item) => {
                    console.log(item);
                    if (item.isDone) {
                        return (
                            <Edit key={item.id}
                                list={list}
                                item={item}
                                setList={setList}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default List;
