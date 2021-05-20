import './App.css';
import Home from "./pages/Home.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"

function App() {
  return (
    <>
      <CssBaseline />
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
