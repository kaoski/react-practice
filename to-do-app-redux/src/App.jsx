import {Provider} from "react-redux";
import { store } from "./store";
import TodoDashboard from "./components/TodoDashboard";

function App() {


  return (
    <>
      <Provider store={store}>
        <TodoDashboard/>
      </Provider>
    </>
  )
}

export default App
