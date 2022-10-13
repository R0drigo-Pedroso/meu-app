import Artigo from "../artigo";

const Conteudo = () => {
  const Curso = [
    "React.js",
    "Estilização CSS",
    "O aprendizado vale super apenas",
  ];

  const Sub = [
    "Vem aprender React.js",
    "Deixe seu projeto mais bonito",
    "valorize seu conhecimento",
  ];

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
        <Artigo titulo={Curso[0]} subtitulo={Sub[0]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            repellat nostrum iusto aspernatur ut suscipit in non rem consectetur
            nihil quisquam cum inventore molestiae voluptatum impedit hic
            tenetur consequuntur, fugit eligendi architecto, aliquid modi enim
            illum id! Perferendis impedit quibusdam, architecto, fugiat officia
            iste voluptas vitae corporis neque sunt eius cumque voluptatibus
            repellat. Animi unde accusantium porro, reiciendis iste saepe nobis
            amet repellendus quis, id, blanditiis non? At, voluptatibus. Quos?
          </p>
        </Artigo>
        <Artigo titulo={Curso[1]} subtitulo={Sub[1]}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            eveniet labore necessitatibus. Rerum officia fugit porro perferendis
            quisquam ratione, nam vitae. Numquam repellat ratione cum fuga
            necessitatibus in, reprehenderit ipsa quos. A qui commodi, illo
            harum sed, magni nisi dolores cumque animi eius eaque voluptatibus.
          </p>
        </Artigo>
        <Artigo titulo={Curso[2]} subtitulo={Sub[2]}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae asperiores ducimus debitis corporis culpa omnis.
          </p>
        </Artigo>
      </section>
    </main>
  );
};

// export default Conteudo;
export default Conteudo;
