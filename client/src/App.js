import React from "react";
import logo from './logo.svg';
import './App.css';

import BasicTabs from "./tabs.js"

function App() {
  const [data, setData] = React.useState(null);

  const tabs = BasicTabs();
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
         */}
        <div >
          {tabs}
        </div>
        
      </header>
    </div>
  );
}

export default App;
