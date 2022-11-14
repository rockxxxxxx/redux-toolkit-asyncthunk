import "./App.css";
import CakeView from "./feature/cake/cakeView";
import IceCreamView from "./feature/icecream/increamView";
import UserView from "./feature/user/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
