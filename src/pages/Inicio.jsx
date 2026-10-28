import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section>
      <h1>Hola, soy Benjamín Aedo</h1>
      <h2>Estudiante de Ingeniería Civil en Informática</h2>
      <p>Bienvenido a mi portafolio web. Aquí podrás conocer más sobre mi trabajo y habilidades.</p>
      <Link to="/proyectos" className="btn">Explorar proyectos</Link>
    </section>
  );
}