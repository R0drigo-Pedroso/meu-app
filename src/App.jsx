/* Importação react-router-dom */
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Importação components */
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";

/* Importação da pages */
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      {/* Container de rotas (precisa envolvover todos componentes do App)*/}
      <BrowserRouter>
        <Cabecalho />

        {/* Switch: mecanismo para troca/alternância de rotas */}
        <Switch>
          {/* Route: Configuração de cada rota (qual caminho, qual componente) */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route path="/produtos" component={produto} /> */}
          <Route path="/produtos">
            <Produtos />
          </Route>

          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>

        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
// export {App};
