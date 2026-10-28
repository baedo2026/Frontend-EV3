import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Benjamín Aedo</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "active" : ""}>Sobre mí</NavLink>
        <NavLink to="/habilidades" className={({ isActive }) => isActive ? "active" : ""}>Habilidades</NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
      </nav>
    </header>
  );
}