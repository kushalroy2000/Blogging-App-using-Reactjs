import './App.css';
import Home from './containers/Home/index'
import Header from './components/Header';
import Hero from './components/Hero/index'
import {BrowserRouter,Route} from 'react-router-dom'
import AboutUs from './containers/AboutUs';
import Post from './containers/Post';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/post" component={Post}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
