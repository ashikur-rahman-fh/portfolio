import './App.css';
import NavigationBar from './NavigationBar';
import SVGLogo from './SGVLogo';
import { LOGO_KEY } from './SGVLogo/constants';

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
      <SVGLogo componentKey={LOGO_KEY.REACT} withText />
      <SVGLogo componentKey={LOGO_KEY.HTML} withText />
    </div>
  );
}

export default App;
