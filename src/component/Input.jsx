import React from 'react'

function Input({title,onTitleHandler,onDescHandler,desc,clickAddButtonHandler}) {
  return (
    <div className="inputBox">
        <div>
            <label className="inputName"> 제목 </label>
            <input
                type="text"
                id="title"
                className="inputBoxIn"
                value={title}
                onChange={onTitleHandler}
            ></input>
            <label className="inputName"> 내용 </label>
            <input
                type="text"
                id="desc"
                className="inputBoxIn"
                value={desc}
                onChange={onDescHandler}
            ></input>
        </div>
    <div className="button">
        <button onClick={clickAddButtonHandler} className="addButton">
            추가하기
        </button>
    </div>
</div>
  )
}

export default Input