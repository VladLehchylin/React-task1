import "./App.css";
import info from "./info.json";

function App() {
  return (
    <main className="App">
      <h1>About Me</h1>
      <p>My name is {info.name}</p>
      <h2>My skils</h2>
      <ul>
        {info.skils.map((item) => (
          <li className="skils-item">
            <p>{item.name}</p>
            <img className="icon" src={item.icon} alt="icon" />
          </li>
        ))}
      </ul>
      <h2>Work experience</h2>
      <p>
        I worked as a {info.workingExp[0]} for {info.workingExp[1]} years.
      </p>
      <h2>Just a little bit about my hobbies</h2>
      <ul>
        {info.hobbies.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
