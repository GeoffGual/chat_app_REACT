import React from 'react';
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
        <Contact 
        name ="Geoff Gual" 
        url='https://i.postimg.cc/BQW4FPd6/pikachu.png'
        online= {true}/>
        <Contact
        name="Yacine Mehai"
        url="https://i.postimg.cc/pLBddxWs/bulbizarre.png"
        online = {true}/>
        <Contact
        name="Mathias Goude"
        url="https://i.postimg.cc/htZHs3pS/carapuce.png"
        online={false}/>
    </div>
  );
}

export default App;
