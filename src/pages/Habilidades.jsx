export default function Habilidades() {
  const tecnologias = [
    { id: 1, nombre: 'Python', nivel: '50%' },
    { id: 2, nombre: 'React', nivel: '30%' },
    { id: 3, nombre: 'HTML & CSS', nivel: '30%' },
    { id: 4, nombre: 'Linux', nivel: '40%' }
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman'];

  return (
    <section>
      <h1>Habilidades y Lenguajes</h1>

      <h2>Tecnologías</h2>
      <div className="skills-grid">
        {tecnologias.map(tech => (
          <article key={tech.id} className="skill-card">
            <h3>{tech.nombre}</h3>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: tech.nivel }}></div>
            </div>
            <span>{tech.nivel}</span>
          </article>
        ))}
      </div>

      <h2 style={{ marginTop: '2rem' }}>Herramientas</h2>
      <div className="tools-list">
        {herramientas.map((herr, index) => (
          <span key={index} className="tool-tag">{herr}</span>
        ))}
      </div>
    </section>
  );
}