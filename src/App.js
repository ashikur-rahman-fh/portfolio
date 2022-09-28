import './App.css';
import NavigationBar from './NavigationBar';
import Skills from './Skills';

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
      <Skills />
    </div>
  );
}

export default App;
