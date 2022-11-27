import { useState } from "react";
import "./style.css";

export function Form({ setListTransactions }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();

    const listTransactions = {
      descricao,
      valor,
      tipo,
    };

    setListTransactions((oldList) => [...oldList, listTransactions]);
    // setDescricao("");
    // setValor("");
    // setTipo("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>

      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        value={descricao}
        required
        onChange={(event) => setDescricao(event.target.value)}
      />
      <small>Ex: Compra de roupas</small>

      <div>
        <div className="valor">
          <label htmlFor="valor">Valor</label>
          <div>
            <input
              type="number"
              name="valor"
              placeholder="1"
              value={valor}
              required
              onChange={(event) => setValor(Number(event.target.value))}
            />
            <p>R$</p>
          </div>
        </div>
        <div className="entradas">
          <label htmlFor="tipo">Tipo de valor</label>
          <div>
            <select
              name="tipo"
              value={tipo}
              required
              onChange={(event) => setTipo(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
      </div>

      <button>Inserir valor</button>
    </form>
  );
}
