import User from "./container/user";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
