import Cep from './Pages/Cep'
import Navbar from './Components/Header';
import scroll from './StyleGuide/atoms/scroll';
import { animation } from './StyleGuide/styles';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${scroll}
  ${animation}
`
const appLinks= {
  sorce:'https://github.com/mateusfaustino/consulta-de-endereco-pelo-cep',
  github:'https://github.com/mateusfaustino/',
  likedin:'https://www.linkedin.com/in/mateus-faustino-021967172/',
  email:'mailto:mateusfaustino2017@gmail.com'
  }
function   App() {
  return (
   <Router>
     <GlobalStyle/>
     <Navbar appLinks={appLinks}/>
     <Switch>
       <Route path='/'>
         <Cep/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
