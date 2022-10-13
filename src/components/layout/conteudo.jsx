import Artigo from "../artigo";

const Conteudo = () => {
  const artigos = [
    {
      titulo: "artigo 01",
      subtitulo: "Subtitulo do artigo 01",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam in",
      curso: "curso 01",
    },
    {
      titulo: "artigo 02",
      subtitulo: "Subtitulo do artigo 03",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam in",
      curso: "curso 02",
    },
    {
      titulo: "artigo 03",
      subtitulo: "Subtitulo do artigo 03",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam in",
      curso: "curso 03",
    },
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

        {artigos.map((artigo) => {
          return (
            <Artigo
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              curso={artigo.curso}
            >
              {artigo.texto}
            </Artigo>
          );
        })}
      </section>
    </main>
  );
};

// export default Conteudo;
export default Conteudo;
