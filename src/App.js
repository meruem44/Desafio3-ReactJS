import React, { useState } from "react";

import "./styles.css";
import { useEffect } from "react";
import api from "./services/api";

import Item from './components/Item';
import Header from './components/Header';
import Form from './components/Form';
import Empty from './components/Empty';
import Loading from './components/Load';

function App() {
  const [repositorys, setRepositorys] = useState([]);
  const [add, setAdd] = useState(false);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    loadRepository();
  }, []);

  const loadRepository = () => {
    api.get('/repositories').then(response => {
      console.log(response);
      const { data } = response;
      if (data.length < 1) {
        setError(true);
      }

      setRepositorys([...data]);
      setLoad(false);
    }).catch(err => {
      setError(true);
      setLoad(false);
    });
  };

  async function handleAddRepository(body) {
    const response = await api.post('/repositories', {
      ...body
    }).then(response => {
      console.log(response);
      const { data } = response;
      console.log(data);
      setRepositorys([...repositorys, data]);
      setAdd(false);
    }).catch(err => {
      console.log(err);
    });
  }

  async function handleRemoveRepository(id) {
    api.delete(`/repositories/${id}`).then(response => {
      loadRepository();
    });
  }

  return (
    <div>

      {load && <Loading />}

      {!load && (
        <div>
          {!add && (
            <>
              <Header handleAdd={() => setAdd(true)} />

              <ul data-testid="repository-list">
                {repositorys.map(repository => (
                  <Item data={repository} delete={handleRemoveRepository}/>
                ))}
              </ul>

              {error && <Empty />}
            </>
          )}



          {add && <Form
            handleAdd={handleAddRepository}
            back={() => setAdd(false)} />}
        </div>
      )}




    </div>
  );
}

export default App;

//<button onClick={handleAddRepository}>Adicionar</button>
