import Clock from './Pages/Clock'
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
function   App() {
  return (
   <Router>
     <GlobalStyle/>
     <Navbar/>
     <Switch>
       <Route path='/'>
         <Clock/>
       </Route>
     </Switch>
     
   </Router>
  );
}

export default App;
