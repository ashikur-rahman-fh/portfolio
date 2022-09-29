import './App.css';
import NavigationBar from './NavigationBar';
import Skills from './Skills';
import About from './About';

const  App = (props) => {
  const { backgroundColor } = props;

  return (
    <div
      className="app"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      
      <NavigationBar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
