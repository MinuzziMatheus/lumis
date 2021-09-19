import { Route} from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
        <Header/>
        <Route path="/" exact><Home /></Route>
        <Route path="/contact"><Contact /></Route>
        <GlobalStyle />
    </>
  );
}

export default App;
