import estilo from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={estilo.nav}>
      <ul>
        {["Home", "Serviço", "Contato", "teste"].map((item) => {
          return (
            <li key={item}>
              <a href="">{item}</a>
            </li>
          );
        })}

        {/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Serviço</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        */}
      </ul>
    </nav>
  );
};

export default Menu;
