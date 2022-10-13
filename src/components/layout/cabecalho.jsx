import Menu from "../menu";

const Cabecalho = () => {
  const exemplo02 = () => {
    console.log("exemplo02");
  };
  return (
    <header>
      <button onClick={() => console.log("exemplo01")}>Exemplo 01</button>

      <button onClick={exemplo02}>Exemplo 02</button>

      <hr />

      <h1>Interface React</h1>

      <Menu />
    </header>
  );
};

// export default Cabecalho;
export default Cabecalho;
