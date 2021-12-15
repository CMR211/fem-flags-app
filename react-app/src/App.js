import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from "./Components/Header";
import Wrapper from './Components/Wrapper';

function App() {

  const [colorMode, setColorMode] = React.useState("light");

  const colors = {
    light: {
      "--colortext": "hsl(200, 15%, 8%)",
      "--colorbackground": "hsl(0, 0%, 98%)",
      "--colorelements": "hsl(0, 0%, 100%)",
      "--colorinput": "hsl(0, 0%, 52%)",
      "--boxshadow": "2px 2px 7px 0px rgba(50, 50, 50, 0.2)"
    },
    dark: {
      "--colortext": "hsl(0, 0%, 100%)",
      "--colorbackground": "hsl(207, 26%, 17%)",
      "--colorelements": "hsl(209, 23%, 22%)",
      "--colorinput": "hsl(0, 0%, 100%)",
      "--boxshadow": "2px 2px 7px 0px rgba(0, 0, 0, 0.2)"
    }
  }

  return (
    <div className="App" style={colors[colorMode]}>
      <Header 
        colorMode={colorMode} 
        setColorMode={setColorMode} 
        colors={colors} />
      <Wrapper
        colorMode={colorMode}
        colors={colors} />
    </div>
  );
}

export default App;
