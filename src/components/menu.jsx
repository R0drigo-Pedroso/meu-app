/* Importação para se torna assycrono */
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      {/* Troca a tag "a" pelo componente 'NavLink' e o "href" pelo 'to': 
        Isso ativará o carregamento assincrono dos componentes e rotas (ESSENCIAL!)
      */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produto</NavLink>
      <NavLink to="/servicos">Serviço</NavLink>
    </nav>
  );
};

export default Menu;
