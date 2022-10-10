import { Menu } from "../menu";

/* Objeto de estilos CSS */
const estilos = {
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
      <h1 style={estilos}>Interface React</h1>

      <Menu />
    </header>
  );
};

// export default Cabecalho;
export { Cabecalho };
