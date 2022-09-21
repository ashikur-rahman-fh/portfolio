import './App.css';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import BallLeft from './BallLeft';
import BallRight from './BallRight';

function App() {
  return (
    <div className="App">
      <ReactP5Wrapper sketch={BallLeft}/>
      <ReactP5Wrapper sketch={BallRight}/>
    </div>
  );
}

export default App;
