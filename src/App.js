import './App.css';
import NavigationBar from './NavigationBar';

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
    </div>
  );
}

export default App;
