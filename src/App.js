import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuetros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        alt='Foto de Emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat dignissim neque, at posuere eros tempus id. Praesent semper tincidunt lacus ut facilisis. Curabitur faucibus finibus lacus, non dictum felis facilisis commodo. Vestibulum mollis arcu non egestas laoreet. Integer quis imperdiet tortor.Integer eu est nec purus facilisis scelerisque. Donec interdum fermentum lobortis. Aliquam id dolor ut diam consequat mattis. Etiam ornare lobortis turpis nec feugiat.'> 
        </Testimonio>

      <Testimonio
        nombre='Carlos Sanchez'
        pais='Dinamarca'
        imagen='carlos'
        alt='Foto de Carlos'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio="Duis et dolor elit. Praesent interdum cursus neque, vel pharetra ligula ultricies at. Vivamus pharetra, arcu non efficitur tristique, tellus ante porta quam, vitae viverra lectus erat eu leo. Proin vitae pretium sem. Vivamus at lacus nec lectus interdum fermentum at vel odio. Ut placerat enim quis purus luctus maximus. Donec imperdiet eget ante vel condimentum. Fusce elementum justo ut risus condimentum rhoncus. Integer vitae porttitor mauris, non dictum ex." />

<Testimonio
        nombre='Sara Nelo'
        pais='Bangladesh'
        imagen='sara'
        alt='Foto de Sara'
        cargo='IT Recuiter'
        empresa='Chat Desk'
        testimonio="Fusce sed nisi tempor, posuere purus at, rutrum leo. Curabitur pellentesque felis felis, sit amet fringilla sem condimentum vitae. Aenean eu ex nec felis sagittis auctor. Vivamus interdum dolor eros, a placerat leo gravida quis. Curabitur sodales congue egestas. Quisque ultricies ligula id nisi porttitor, vehicula interdum libero vehicula. Maecenas facilisis mattis pharetra. Nulla malesuada ut odio at aliquam. Etiam vel venenatis lorem. Vestibulum et eros vitae nisl laoreet varius non sit amet sem." />
      </div>
    </div>
  );
}

export default App;
