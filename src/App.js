import React, {useState, useEffect} from 'react';
import List from "./components/List";
import List from "./components/Alert";
import Alert from './components/Alert';


const App = () => {
  const [name, setname] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert=/>}
      </form>
    </section>
  )
}


export default App;
