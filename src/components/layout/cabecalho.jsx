import styled from "styled-components";
import { Menu } from "../menu";

const periodo = "diurno";

/* Tagged template para uso com styled components `` */
const StyleCabecalho = styled.header`
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: aliceblue;
  }

  p {
    font-weight: bold;
    color: azure;
    font-size: 1.5rem;

    &:hover {
      color: burlywood;
      background: white;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyleCabecalho>
      <h1>Interface React</h1>

      <Menu />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        libero amet dolore molestiae iusto officiis?
      </p>
    </StyleCabecalho>
  );
};

// export default Cabecalho;
export { Cabecalho };
