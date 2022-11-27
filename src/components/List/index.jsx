import "./style.css";
import Lixo from "../../imgs/remove.svg";
import PreLoad from "../../imgs/preLoad.svg";

export function List({ filtrados, removeValor }) {
  function listaVasia() {
    if (filtrados.length === 0) {
      return (
        <div>
          <h3>Você ainda não possui nenhum lançamento</h3>
          <img src={PreLoad} alt="imagem preload" />
        </div>
      );
    }
  }

  return (
    <ul className="list">
      {listaVasia()}
      {filtrados.map((element, index) => {
        return element.tipo === "Entrada" ? (
          <li className="liVerde" key={index}>
            <h2>{element.descricao}</h2>
            <div>
              <span>R$ {element.valor}</span>
              <span>{element.tipo}</span>
              <img
                onClick={() => removeValor(element)}
                src={Lixo}
                alt="lixeira"
              />
            </div>
          </li>
        ) : (
          <li className="liCinza" key={index}>
            <h2>{element.descricao}</h2>
            <div>
              <span>R$ {element.valor}</span>
              <span>{element.tipo}</span>
              <img
                onClick={() => removeValor(element)}
                src={Lixo}
                alt="lixeira"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
