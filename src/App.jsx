import "./App.css";
import {Title, Add} from "./Title.jsx"
import {Description} from "./Description.jsx"

function App() {
  return (
    <form action="https://villas-booking-system.onrender.com">
      <Title/>
      <Add/>
      <Description/>
      <button className="btn">GreatPark</button>
      <Title/>
      <Description/>
      <button>GreatPark</button>
    </form>
  );
}

export default App;
