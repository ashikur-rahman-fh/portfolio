import './App.css';
import Rainfall from './sketches/RainFall';

function App() {

  return (
    <div style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700' }} className="App">
      Under contruction
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Rainfall
          width={1200}
          height={400}
          background="rgba(120, 120, 120, 1)"
          color="rgba(250, 250, 250, 0.5)"
        />
      </div>
    </div>
  );
}

export default App;
