import { useState, useEffect } from "react";

// export default function App() {
//   const [count, SetCount] = useState(0);
//   return (
//     <div>
//       <p className="text-red">you clicked in this Button{count}</p>
//       <button onClick={() => SetCount(count + 1)}>clickedme</button>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1> Hello {name || "guest"}</h1>
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//   );
// }

// build todo-app

// function App() {
//   const [todos, setTodos] = useState([]); // List of todos
//   const [input, setInput] = useState(""); // Input value

//   const addTodo = () => {
//     if (input.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: input,
//       completed: false,
//     };

//     setTodos([newTodo, ...todos]);
//     setInput("");
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>✅ Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a task..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ marginTop: 10 }}>
//             <span
//               onClick={() => toggleTodo(todo.id)}
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//                 cursor: "pointer",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               style={{ marginLeft: 10 }}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>

//   );
// }
// export default App;

function App() {
  const [curretTab, setCurrentTab] = useState(1);
  const [tabData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + curretTab).then(
      async (res) => {
        const json = await res.json();
        setData(json);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: curretTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={function () {
          setCurrentTab(2);
        }}
        style={{ color: curretTab == 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={function () {
          setCurrentTab(3);
        }}
        style={{ color: curretTab == 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={function () {
          setCurrentTab(4);
        }}
        style={{ color: curretTab == 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}
export default App;
