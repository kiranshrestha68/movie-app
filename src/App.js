import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favourite from "./pages/favourite/Favourite";
import Singlepage from "./pages/singlepage/Singlepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favourites" component={Favourite}/>
          <Route exact path="/view-detail/:id" component={Singlepage}/>


        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
