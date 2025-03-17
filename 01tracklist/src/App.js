import './App.css';
import Track from './components/track.jsx';

/* var tracks = {
  titulo: 'Bambun',
  year='2019',
  album='Preludio EP',
  texto='Mi primera cancion bajo el nombre de Christian Való, quise hacer un ritmo R&B altenarivo pero con instrumentos synthpop. Un poco acustico, un poco sintetico, con una progresión de acordes bastante simple, pero con una ide  expresa sus sentimientos hacia una mujer perfecta que no conoce',
  imagen='bambun',
}
  */

function App() {
  return (
    <div className='App'>
        <div className='contenedor-principal'>
            <h1>Ineedito songs</h1>
          <Track
            titulo='Bambun'
            year='2019'
            album='Preludio EP'
            texto='Mi primera cancion bajo el nombre de Christian Való, quise hacer un ritmo R&B altenarivo pero con instrumentos synthpop. Un poco acustico, un poco sintetico, con una progresión de acordes bastante simple, pero con una ide  expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='bambun'/>
          <Track
            titulo='Tiempo'
            year='2020'
            album='Preludio EP'
            texto='Segunda cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, intenta '
            imagen='tiempo'/>
          <Track
            titulo='Te siento'
            year='2021'
            album='Preludio EP'
            texto='Primera cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='te-siento'/>
          <Track
            titulo='Conexion'
            year='2022'
            album='inédito'
            texto='Primera cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='conexion'/>
          <Track
            titulo='Algo mas que decir'
            year='2023'
            album='Preludio EP'
            texto='Primera cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='algo-mas-que-decir'/>
          <Track
            titulo='Ojos estelares'
            year='2023'
            album='ZU'
            texto='Primera cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='zu'/>
          <Track
            titulo='331'
            year='2024'
            album='inédito'
            texto='Primera cancion bajo el nombre de Christian Való, con un ritmo R&B altenarivo e instrumentos synthpop, expresa sus sentimientos hacia una mujer perfecta que no conoce'
            imagen='inedito'/>
        </div>
    </div>
  );
}

export default App;

      


