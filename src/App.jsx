import Cabecalho from "./components/layout/cabecalho";
import Rodape from "./components/layout/rodape";

/* Importação da pages */
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      <Cabecalho />

      <Home />

      <Produtos />

      <Servicos />

      <Rodape />
    </>
  );
};

export default App;
// export {App};
