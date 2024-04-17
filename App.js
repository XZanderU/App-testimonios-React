import './App.css';
import Testimonio from "./componentes/testimonios"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre Free Code Camp:</h1>
      <Testimonio
      nombre="Claudia Perez"
      pais="Colombia" 
      imagen="claudia"
      cargo="Ingeniera de Software"
      empresa="Spotify"
      testimonio="Hola a todos, soy Claudia, una mujer colombiana apasionada por la música. Gracias a los cursos de FreeCodeCamp, he podido avanzar en mi carrera en Spotify. Aprendí habilidades técnicas clave que me permitieron destacar en el desarrollo de aplicaciones relacionadas con la música. Estoy agradecida por la plataforma y el apoyo que recibí, ¡y ahora estoy contribuyendo al mundo de la música de una manera completamente nueva!" />
      <Testimonio
      nombre="Juan Cardenas"
      pais="Perú" 
      imagen="Juan"
      cargo="Analista de datos"
      empresa="Google"
      testimonio="Gracias a FreeCodeCamp, mi viaje como analista de datos en Google ha sido asombroso. Los cursos me proporcionaron las habilidades clave que necesitaba para destacar en proyectos desafiantes. En Google, he aplicado estas habilidades para trabajar en proyectos significativos y contribuir al impacto global de la empresa. ¡Una experiencia realmente gratificante que ha transformado mi carrera!" />
       <Testimonio
      nombre="Luisa Suarez"
      pais="Canada" 
      imagen="Luisa"
      cargo="Algo por ahi"
      empresa="La calle"
      testimonio="Aunque aún estoy en las primeras etapas de mi carrera como analista de datos, FreeCodeCamp ha sido mi guía invaluable. Los cursos me han proporcionado una sólida base, permitiéndome explorar y aprender. Aunque aún no he alcanzado grandes logros, estoy emocionada por el viaje que tengo por delante. Cada desafío es una oportunidad para crecer, y estoy agradecida por la plataforma que me está preparando para el éxito en el mundo de la analítica de datos." />
      </div>
    </div>
  );
}

export default App;
