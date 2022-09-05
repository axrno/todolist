import React, {useState, useEffect} from 'react';
import List from "./components/List";
import Alert from './components/Alert';

const App = () => {
  const [name, setname] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

const handleSubmit = () => {};
const showAlert = () => {};
const removeItem = () => {};
const editItem = () => {};
const clearList = () => {};


  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{marginBottom: "1.5rem", textAlign: "center"}}>
          ToDo List using Local Storage
          </h3>
        <div className="mb-3 form">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Bread"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
          <button type="submit" className="btn btn-success">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{marginTop: "2rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="text-center">
            <button className="btn-btn-warning" onClick={clearList}>
              Clear Items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};


export default App;
