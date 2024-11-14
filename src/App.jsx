import "./App.css";
import { Title, Add } from "./Title.jsx";
import { Description } from "./Description.jsx";

function App() {
  let subject = ["Mechanics", "PPS", "OOP"]
  return (
    <form action="https://villas-booking-system.onrender.com" target="_blank">
      <Title
        title="Om Rakibe"
        college="KJ College of Engineering Management and Reaseach"
        age={19}
        subjects={["Engineering Mathematics", "Graphics"]}
      />
      <Add />
      <Description />
      <button className="btn">GreatPark</button>

      <Title
        title="Ashish"
        college="GH Raisoni College of Engineering"
        subjects={subject}
      />
      <Description />
      <button>GreatPark</button>
    </form>
  );
}

export default App;
