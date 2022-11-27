import "./style.css";

export function TotalMoney({ filtrados }) {
  return (
    <div className="totalMoney">
      <div>
        <h2>Valor total:</h2>
        <p>
          ${" "}
          {filtrados.reduce((valorA, valorB) => {
            if (valorB.tipo === "Entrada") {
              return valorA + valorB.valor;
            } else {
              return valorA - valorB.valor;
            }
          }, 0)}
        </p>
      </div>
      <p>O valor total se refere ao saldo.</p>
    </div>
  );
}
