import { useState } from "react";
import "./style.css";

export function MenuList({ setFilter }) {
  const [btnTodos, setBtnTodos] = useState(true);
  const [btnEntradas, setBtnEntradas] = useState(false);
  const [btnDespesas, setBtnDespesas] = useState(false);

  function clickTodos() {
    setFilter("todos");
    setBtnTodos(true);
    setBtnEntradas(false);
    setBtnDespesas(false);
  }

  function clickEntradas() {
    setFilter("Entrada");
    setBtnEntradas(true);
    setBtnTodos(false);
    setBtnDespesas(false);
  }

  function clickDespesas() {
    setFilter("Despesa");
    setBtnDespesas(true);
    setBtnTodos(false);
    setBtnEntradas(false);
  }

  return (
    <>
      <h2>Resumo financeiro</h2>
      <div className="menu">
        {btnTodos ? (
          <button
            id="todos"
            onClick={(clickTodos, clickTodos)}
            style={{ backgroundColor: "#FD377E", color: "#E9ECEF" }}
          >
            Todos
          </button>
        ) : (
          <button
            id="todos"
            onClick={clickTodos}
            style={{ backgroundColor: "#E9ECEF", color: "black" }}
          >
            Todos
          </button>
        )}

        {btnEntradas ? (
          <button
            id="entradas"
            onClick={clickEntradas}
            style={{ backgroundColor: "#FD377E", color: "#E9ECEF" }}
          >
            Entradas
          </button>
        ) : (
          <button
            id="entradas"
            onClick={clickEntradas}
            style={{ backgroundColor: "#E9ECEF", color: "black" }}
          >
            Entradas
          </button>
        )}

        {btnDespesas ? (
          <button
            id="despesas"
            onClick={clickDespesas}
            style={{ backgroundColor: "#FD377E", color: "#E9ECEF" }}
          >
            Despesas
          </button>
        ) : (
          <button
            id="despesas"
            onClick={clickDespesas}
            style={{ backgroundColor: "#E9ECEF", color: "black" }}
          >
            Despesas
          </button>
        )}
      </div>
    </>
  );
}
