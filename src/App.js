import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import LandingPage from "./components/screens/LandingPage.jsx";
import QuoteScreen from "./components/screens/QuoteScreen.jsx";
import RestaurantPage from "./components/screens/RestaurantPage.jsx";

function App() {

  // const [page, setPage] = useState(1);
  // function which will get a ID

  return (
    
    <div className="App">
{/*       
      <LandingPage />
      <QuoteScreen /> */}

     <RestaurantPage />

    </div>  
    


  //   <Router>
  //   <div className="App">
  //     <Routes>
  //       <Route path="/" exact component={LandingPage} />
  //       <Route path="/quote" component={QuoteScreen} />
  //       <Route path="/restaurant" component={RestaurantPage} />
  //       <Route path="/foods" component={foods} />
  //       <Route path="/contact" component={contact} />
  //     </Routes>
  //   </div>
  // </Router>
  );
}



export default App;
  