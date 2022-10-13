import { useState } from "react";
import Menu from "../menu";

const Cabecalho = () => {
  const exemplo02 = () => {
    console.log("exemplo02");
  };

  /* Exemplo 01 de gerenciamento de states
    Aqui, definimos no useState um valor inicial (colocando entre os parênteses do useState), além de desestruturar o state em uma variavel (titulo) e em uma função (setTitulo) que será responsavel por atualizar este state/titulo
  */
  const [titulo, setTitulo] = useState("Exemplo de state");

  const atualizaTitulo = () => {
    setTitulo("Opa, state do titulo foi alterado!");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo01")}>Exemplo 01</button>

      <button onClick={exemplo02}>Exemplo 02</button>

      <hr />

      {/* Aqui, aplicamos a variavel de state chamada titulo */}
      <h1 onClick={atualizaTitulo}>{titulo}</h1>

      <Menu />
    </header>
  );
};

// export default Cabecalho;
export default Cabecalho;
