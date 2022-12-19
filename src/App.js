import "./App.css";
import Navbar from "./Navbar";
import Input from "./Input";
import Card from "./Card";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  const list = localStorage.getItem("todolist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
let saveid;
function App() {
  const [arr, setArr] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    title: "",
    note: "",
  });

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(arr));
    getLocalStorage();
  }, [arr]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const addBtn = () => {
    if (!input.title && !input.note) {
      alert("Input should not be empty");
    } else {
      const id = new Date().getTime().toString();
      input.id = id;
      setArr((prev) => {
        return [...prev, input];
      });

      setInput({
        id: "",
        title: "",
        note: "",
      });
    }
  };
  const delFunc = (id) => {
    setArr((prev) => {
      return prev.filter((ele, index) => {
        return id !== ele.id;
      });
    });
  };

  const editFunc = (id) => {
    setEdit(true);
    const got = arr.find((elem) => {
      saveid = id;
      return elem.id === id;
    });

    setInput({
      title: got.title,
      note: got.note,
    });
  };
  const editAdd = () => {
    arr.find((elem) => {
      if (elem.id === saveid) {
        elem.title = input.title;
        elem.note = input.note;
      }
      return 0;
    });

    setInput({
      title: "",
      note: "",
    });
    setEdit(false);
  };
  return (
    <>
      <Navbar />
      <Input
        input={input}
        inputEvent={inputEvent}
        addBtn={addBtn}
        edit={edit}
        editAdd={editAdd}
      />
      <div className="container d-flex flex-wrap mx-auto">
        {arr.map((ele) => {
          return (
            <Card
              key={ele.id}
              card={ele}
              delFunc={delFunc}
              editFunc={editFunc}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
