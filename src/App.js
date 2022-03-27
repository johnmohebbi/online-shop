// components
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import store from './Redux/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
