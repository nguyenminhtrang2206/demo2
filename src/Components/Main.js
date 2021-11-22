import Boxes from "./Boxes";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  )
}

const Contacts = () => {
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  )
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/boxes" component={Boxes} />
      </Switch>
    </main>
  );
};

export default Main;