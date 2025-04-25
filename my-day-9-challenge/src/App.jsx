import { useState, useEffect } from "react";
import "./App.css";

const RandomUser = () => {
  //this will be for the user info.
  const [user, setUser] = useState(null);
  //This will be for the loading check.
  const [loading, setLoading] = useState(true);
  //This will be for the error check.
  const [error, setError] = useState("");

  //This will be for the API call to pull the info of the image. Here we also use the async await method.
  const fetchUser = async () => {
    try {
      //This will check if the file is ready to load all the information.
      setLoading(true);
      // Make an API request to fetch a random user profile
      const res = await fetch("https://randomuser.me/api");
      //Data is where we convert the res variable into js.
      const data = await res.json();
      //This selects the first set of info for the profile.
      setUser(data.results[0]);
      //This sets the error message to an empty string.
      setError("");
    } catch {
      // Show an error message if the fetch request fails
      setError("Failed to fetch user");
    } finally {
      // Set loading to false after the API call is complete (success or fail)
      setLoading(false);
    }
  };

  //The useEffect will run after the the fetchUser function runs.
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div>
        <h1>Random User</h1>
        <fieldset>
          {/* this will just show the loading... until everything is fully loaded */}
          {loading && <p>Loading...</p>}
          {/* this is where the message will show up if there is an error, and it will be red. */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* This will be the section that the actual profile will show up */}
          {user && (
            <div>
              {/* this will be the image of the profile which is linked to the API, so it will pull the picture from there*/}
              <img src={user.picture.large} alt="User" />
              <p>
                {/* this will pull the first and last name */}
                {user.name.first} {user.name.last}
              </p>
              {/* this will pull the email from the API call */}
              <p>{user.email}</p>
            </div>
          )}
        </fieldset>
        {/* this is the button that runs the actual fetch call */}
        <button onClick={fetchUser}>Get New User</button>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <RandomUser />
      </div>
    </>
  );
}

export default App;
