import { Provider } from "react-redux";
import Body from "./components/Body";
import Store from "./utiles/Store";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
