import React from "react";
import Header from "./../header";
import Footer from "../footer";
import "./../../App.css";
function Layout({ children }): JSX.Element {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {children}
        <Footer />
      </header>
    </div>
  );
}

export default Layout;
