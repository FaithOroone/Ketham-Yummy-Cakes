import React from "react";
import './App.css'
import './components/CarouselComponent.css'
import './components/Contact.css'
import MainComponent from './components/MainContent'
import Login from './components/Login'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./components/Contact";
import Header from './components/Header'
import Footer from './components/Footer'
import BirthdayCakes from "./components/BirthdayCakes";
import About from './components/About'
import ImageSlider from "./components/ImageSlider";
import { SliderData } from './components/SliderData'


function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          
          <Route path='/Login'>  <Login /> </Route>
          <Route path ='/Signup'> <Signup /> </Route>      
          <Route path = '/Contact'><Contact/></Route>
          <Route exact path = '/'> <MainComponent/> </Route>
          <Route path ='/BirthdayCakes'><BirthdayCakes/></Route>
          <Route path = '/About'><About/></Route>
                
        </Switch>
        {/* <ImageSlider slides={SliderData}/>   */}
        <Footer/>
      </Router>
     
      
    </div>
  );
}

export default App;
