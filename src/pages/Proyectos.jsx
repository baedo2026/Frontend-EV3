import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'API REST con FastAPI',
      descripcion: 'Servicio backend en Python (Taller-Evaluado1-grupo-8) utilizando FastAPI y Pydantic, manejando respuestas JSON estandarizadas.',
      enlace: 'https://github.com/baedo2026/Taller-2.git'
    },
    {
      id: 2,
      titulo: 'Desarrollo de Diagramas UML',
      descripcion: 'Modelado y diseño de arquitectura de software utilizando diagramas UML para la estructuración lógica de sistemas.',
      enlace: '' 
    },
    {
      id: 3,
      titulo: 'Creación de una Calculadora para límites en Python',
      descripcion: 'Desarrollo de script en Python enfocado en el cálculo matemático de límites para soporte académico.',
      enlace: 'https://github.com/jaraemily08-hub/EID-de-Limites.git'
    }
  ];

  return (
    <section>
      <h1>Mis Proyectos</h1>
      <div className="grid-proyectos">
        {listaProyectos.map(proyecto => (
          <TarjetaProyecto 
            key={proyecto.id} 
            titulo={proyecto.titulo} 
            descripcion={proyecto.descripcion} 
            enlace={proyecto.enlace} 
          />
        ))}
      </div>
    </section>
  );
}