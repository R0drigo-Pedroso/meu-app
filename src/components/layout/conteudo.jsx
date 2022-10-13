import { useState } from "react";
import Artigo from "../artigo";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState("green");

  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => {
    setCorFundo("#ffff18");
  };

  const fundoAzul = () => {
    setCorFundo("lightblue");
  };

  const fundoVerde = () => {
    setCorFundo("lightgreen");
  };

  const atualizaContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>

      <button onMouseOver={fundoAzul}>Azul</button>

      <button onMouseOver={fundoVerde}>Vermelho</button>

      <section>
        <h2 onClick={atualizaContagem}>contador: {contador}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam in,
          officia soluta dignissimos nesciunt excepturi numquam voluptatibus a
          consequuntur atque adipisci quo aut repellat ratione, inventore
          mollitia culpa rem? Voluptas, cumque facere. Et, ipsum suscipit. Vero
          libero voluptate qui vitae obcaecati temporibus odit ipsum iusto
          quidem facilis voluptatibus nihil et ex eligendi, fugit eaque expedita
          quae odio. Temporibus dolorem perspiciatis atque. Esse velit inventore
          odit dolore! Mollitia, quisquam nisi. Officiis doloremque adipisci
          odio tempora natus impedit temporibus dolore inventore, unde deleniti
          rerum iusto. Deserunt inventore sit alias
        </p>

        {/* esse artigo e um components */}
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

// export default Conteudo;
export default Conteudo;
