// components
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import store from './Redux/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <div className="h-20 bg-red-800 text-white">footer</div>
      </Provider>
    </>
  );
}

export default App;
