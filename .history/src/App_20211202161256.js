import logo from './logo.svg';
import  { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          SonicTrend Shop
        </h2>
        
        <Button>Login</Button>
      </header>
    </div>
  );
}

export default App;
