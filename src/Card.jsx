import React from "react";

export default function Card(props) {
  return (
    <div className="todo todo-card my-5 mx-3 d-flex flex-column shadow rounded py-3">
      <div className="mb-2 px-3">
        <h5>{props.card.title}</h5>
      </div>
      <div className="mb-2 px-3">
        <p>{props.card.note}</p>
      </div>
      <button
        className="btn btn-warning text-light rounded-circle shadow del-btn"
        onClick={() => {
          props.delFunc(props.card.id);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      <button
        className="btn btn-warning text-light rounded-circle shadow edit-btn"
        onClick={() => {
          props.editFunc(props.card.id);
        }}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  );
}
