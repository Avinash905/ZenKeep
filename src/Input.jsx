import React from "react";

export default function Input(props) {
  return (
    <div className="todo w-25 mx-auto my-5 shadow rounded">
      <div className="mb-3">
        <input
          name="title"
          type="text"
          className="form-control title border-0 fs-4"
          id="exampleFormControlInput1"
          placeholder="Title"
          value={props.input.title}
          onChange={props.inputEvent}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="note"
          className="form-control note border-0 pb-3"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write a note"
          value={props.input.note}
          onChange={props.inputEvent}
        ></textarea>
      </div>
      {props.edit ? (
        <button
          className="btn btn-warning text-light rounded-circle shadow plus"
          onClick={props.editAdd}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      ) : (
        <button
          className="btn btn-warning text-light rounded-circle shadow plus"
          onClick={props.addBtn}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
}
