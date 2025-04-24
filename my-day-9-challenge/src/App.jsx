import { useState } from "react";
import "./App.css";

const RandomUser = ()=>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  
}


function App() {
  

  return (
    <>
      <div>
        <RandomUser />
      </div>
    </>
  );
}

export default App;
