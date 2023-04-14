//dave TODO
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isEditing: false,
    index: -1,   
  });
  const [doneList, setDoneList] = useState([]);

  const [todoTab, setTodoTab] = useState(true);

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const descriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ title: "", description: "" });
  };

  function deleteClicked(index) {
    let modifedTodos = todos.filter((data, todoIndex) => {
      if (index !== todoIndex) return data;
    });
    setTodos(modifedTodos);
  }

  function doneClicked(index) {
    let modifedTodos = todos.filter((data, todoIndex) => {
      if (index !== todoIndex) return data;
    });
    setTodos(modifedTodos);

    let doneTodos = todos.filter((data, doneIndex) => {
      if (index === doneIndex) {
        let done = {
          title: data.title,
          description: data.description,
        };

        setDoneList([...doneList, done]);
      }
    });
    console.log("donelist", doneList);
    console.log("donetodos", doneTodos);
  }

  function undoneClicked(index) {
    let modifiedTodos = doneList.filter((data, todoIndex) => {
      if (index === todoIndex) {
        let undone = {
          title: data.title,
          description: data.description,
        };
        setTodos([...todos, undone]);

        return data;
      }
    });

    let doneTodos = doneList.filter((data, doneIndex) => {
      if (index !== doneIndex) {
        return data;
      }
    });
    setDoneList(doneTodos);
    console.log(doneList);
  }

  function editClicked(index, todoItem) {
    setTodo({
      title: todoItem.title,
      description: todoItem.description,
      isEditing: true,
      index: index,
    });
  }

  function updateClicked() {
    let newTodos = todos.map((data, index) => {
      if (index === todo.index) {
        return { title: todo.title, description: todo.description };
      }
      return data;
    });
    setTodos(newTodos);
    setTodo({ ...todo, title: "", description: "", isEditing: false });
  }

  function switchDone() {
    setTodoTab(false);
  }
  function switchTodo() {
    setTodoTab(true);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="flex justify-center grid ">
        <div className="flex justify-center grid font-bold text-4xl py-5 ">
          To-Do List
        </div>
        <div className="flex justify-center">
          <button
            onClick={switchTodo}
            className="mt-3 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
            type="button"
          >
            To Do List
          </button>
          <button
            onClick={switchDone}
            className="mt-3 ml-5 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
            type="button"
          >
            Done
          </button>
        </div>

        {todoTab ? (
          <div className="-cols-2 gap-4">
            <div className="flex justify-center flex-col  items-center">
              <div className="grow shrink-0 w-[500px] ">
                <div className="pt-5 ">
                  <div className="text-lg font-bold">Tasks</div>
                  Title:{" "}
                  <input
                    name="title"
                    value={todo.title}
                    onChange={titleChange}
                    className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                  />
                  Description:{" "}
                  <input
                    name="description"
                    value={todo.description}
                    onChange={descriptionChange}
                    className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    autocomplete="off"
                  />
                  {todo.isEditing ? (
                    <button
                      onClick={updateClicked}
                      className="mt-3 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={addTodo}
                      className="mt-3 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Add Task
                    </button>
                  )}
                </div>

                <ul>
                  {todos.map((todo, index) => {
                    return (
                      <li className="text-lg pt-5 flex" key={index}>
                        <div class="grow p-6 border border-grey rounded-lg shadow dark:bg-purple-300">
                          <div className="grid grid-cols-1">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                              {index + 1}: {todo.title}
                            </h5>

                            <p class="mb-3 font-normal text-gray-700  dark:text-white">
                              {todo.description}
                            </p>
                        </div>
                        <div className="justify-center flex">
                            <button
                              onClick={() => doneClicked(index)}
                              className="mt-3 mr-4 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                              type="button"
                            >
                              Mark as Done
                            </button>
                            <button
                              onClick={() => editClicked(index, todo)}
                              className="mt-3 mr-4 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                              type="button"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteClicked(index)}
                              className="mt-3 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center flex-col  items-center">
              <div className="grow shrink-0 w-[500px] ">
                <div className="pt-5 ">
                  <div className="text-lg font-bold">Completed Tasks</div>
                </div>

                <ul>
                  {doneList.map((doneTodo, index) => {
                    return (
                      <li className="text-lg pt-5 flex" key={index}>
                        <div className="grow">
                          <div className="font-bold">
                            {index + 1}: {doneTodo.title}
                          </div>
                          <div>{doneTodo.description}</div>
                        </div>
                        <div>
                          <button
                            onClick={() => undoneClicked(index)}
                            className="mt-3 mr-4 shadow bg-colorPallete2 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                            type="button"
                          >
                            Mark Undone
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}