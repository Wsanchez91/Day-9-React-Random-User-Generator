import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <fieldset>
          
        </fieldset>
      </div>
    </>
  );
}

export default App;
