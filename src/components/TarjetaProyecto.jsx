export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {enlace ? (
        <a href={enlace} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
      ) : (
        <span>Repositorio privado / Sin enlace</span>
      )}
    </article>
  );
}