import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { ListPerson } from "./components/ListPerson/index";

function App() {
  const [data, setData] = useState([]);

  const removeEverything = () => {
    data.splice(0, data.length);
    setData([...data]);
  };

  console.log(data);
  console.log(data.length);

  return (
    <div className="App">
      <header className="App-header">
        {data.length > 0 ? (
          <ListPerson data={data} removeEverything={removeEverything} />
        ) : (
          <Form setData={setData} data={data} />
        )}
      </header>
    </div>
  );
}

export default App;
