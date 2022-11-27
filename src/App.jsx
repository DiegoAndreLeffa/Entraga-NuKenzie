import Logo from "./imgs/Nu Kenzie.svg";
import Img from "./imgs/imageHome.svg";

import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { MenuList } from "./components/menuList";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  const [filter, setFilter] = useState("todos");

  const filtrados = listTransactions.filter((tipos) =>
    filter === "todos" ? true : tipos.tipo === filter
  );

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  function removeValor(item) {
    const filtro = listTransactions.filter((elemDif) => {
      return elemDif !== item;
    });

    setListTransactions(filtro);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            logout={logout}
          />
          <div className="home">
            <div className="formTotal">
              <Form setListTransactions={setListTransactions} />
              <TotalMoney filtrados={filtrados} />
            </div>
            <div className="menu-list">
              <MenuList setFilter={setFilter} />
              <List
                filtrados={filtrados}
                setListTransactions={setListTransactions}
                removeValor={removeValor}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="App-home">
          <div className="App-title">
            <img src={Logo} alt="logo NuKenzie" />
            <div>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rápida e segura</p>

              <button onClick={login}>Iniciar</button>
            </div>
          </div>
          <div className="App-image">
            <img src={Img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
