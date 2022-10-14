/* Importação para se torna assycrono */
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produto</NavLink>
      <NavLink to="/servicos">Serviço</NavLink>
    </nav>
  );
};

export default Menu;
