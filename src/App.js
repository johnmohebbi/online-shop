import React from "react";
// components
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import store from "./Redux/store";
function App() {
  return (
    <div >
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
