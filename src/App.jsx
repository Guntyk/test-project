import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Header } from "./layout/Header";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  console.log(location.key)
  const transitions = useTransition(location, (location) => location.key, {});
  return (
    <>
      <Header />
      <main className="container">
        {transitions.map(({ item, props, key }) => (
          <animated.div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
