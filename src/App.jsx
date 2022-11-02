import "./App.css";
import info from "./info.json";
import skillsIcon from "./assets/skills.png";
import hobbiesIcon from "./assets/hobbies.png";
import expIcon from "./assets/exp.png";

function App() {
  return (
    <main className="App">
      <h1>About Me</h1>
      <p>My name is {info.name}</p>
      <h2>
        My skills
        <img className="icon" src={skillsIcon} alt="icon" />
      </h2>
      <ul>
        {info.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>
        Work experience
        <img className="icon" src={expIcon} alt="icon" />
      </h2>
      <p>
        I worked as a {info.workingExp[0]} for {info.workingExp[1]} years.
      </p>
      <h2>
        Just a little bit about my hobbies
        <img className="icon" src={hobbiesIcon} alt="icon" />
      </h2>
      <ul>
        {info.hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
