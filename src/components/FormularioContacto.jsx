import { useState } from 'react';

export default function FormularioContacto() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const validar = () => {
    let nuevosErrores = {};
    if (!datos.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!datos.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(datos.correo)) {
      nuevosErrores.correo = 'El formato del correo es inválido';
    }
    if (!datos.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio';
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validar();
    if (Object.keys(validacion).length > 0) {
      setErrores(validacion);
      setEnviado(false);
    } else {
      setErrores({});
      setEnviado(true);
      setDatos({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {enviado && <p className="success-msg">¡Mensaje enviado con éxito y está a la espera de ser respondido!</p>}
      
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={datos.nombre} 
          onChange={handleChange} 
        />
        {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
      </div>

      <div>
        <label htmlFor="correo">Correo:</label>
        <input 
          type="email" 
          id="correo" 
          name="correo" 
          value={datos.correo} 
          onChange={handleChange} 
        />
        {errores.correo && <span className="error-msg">{errores.correo}</span>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea 
          id="mensaje" 
          name="mensaje" 
          value={datos.mensaje} 
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <span className="error-msg">{errores.mensaje}</span>}
      </div>

      <button type="submit" className="btn">Enviar mensaje</button>
    </form>
  );
}