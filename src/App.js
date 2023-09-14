import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import "@fontsource/roboto";
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Header from './Container/Header/Header';
import Home from './Container/Home/Home';
import Services from './Container/Services/Services';
import { makeStyles } from '@material-ui/core';
import Footer from './Container/Footer/Footer';

const useStyles = makeStyles(() => ({
  headerContainer: {
    width : "100%",
    height : 100,
    position : "relative",
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
       <div className={classes.headerContainer}>
      <Header />
       </div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
     <Footer />
    </div>
  );
}

export default App;
