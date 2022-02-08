import React from "react";
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import BasicTabs from "./tabs.js";
import BasicCard from "./card.js";

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
                <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
            <BasicCard title="Current Running" content="Script 10"/>
            <BasicCard title="Script Status" content="1 Failed" />
            <BasicCard title="Date" content="8/2/2022"/>
      </Box>

        </div>
        <div >
          {tabs}
        </div>
        
      </header>
    </div>
  );
}

export default App;
