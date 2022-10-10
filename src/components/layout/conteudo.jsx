import { Artigo } from "../artigo";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2>Conteudo do Site</h2>
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

        <article>
          <h3>Titulo...</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            iusto consequuntur consectetur qui porro numquam quidem tenetur
            dolores laboriosam voluptatibus eligendi, vero perferendis earum,
            distinctio magnam, facilis quo corporis! Rem!
          </p>
        </article>

        <article>
          <h3>Titulo...</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            iusto consequuntur consectetur qui porro numquam quidem tenetur
            dolores laboriosam voluptatibus eligendi, vero perferendis earum,
            distinctio magnam, facilis quo corporis! Rem!
          </p>
        </article>
      </section>
    </main>
  );
};

// export default Conteudo;
export { Conteudo };
