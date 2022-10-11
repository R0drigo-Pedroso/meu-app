import Menu from "../Menu";

/* Objeto de estilos CSS */
const Estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  return (
    /* CSS IN JS: estilos CSS embutidos no meio do JavaScript */
    /* Css inline (usa propriedade style e sintaxe de objeto) */
    <header
      style={{
        backgroundColor: "yellow",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      <h1 style={Estilos}>Interface React</h1>

      <Menu />
    </header>
  );
};

// export default Cabecalho;
export default Cabecalho;
