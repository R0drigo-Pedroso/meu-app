/* Acesso as props usando destructuring de objeto */
const Artigo = ({ titulo, curso, children, subtitulo }) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <p>Curso:{curso}</p>
      <p>{children}</p>
    </article>
  );
};

export default Artigo;
