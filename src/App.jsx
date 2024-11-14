import "./App.css";
import {Title, Add} from "./Title.jsx"
import {Description} from "./Description.jsx"

function App() {
  return (
    <form action="https://villas-booking-system.onrender.com">
      <Title title="Om Rakibe" college="KJ College of Engineering Management and Reaseach" age={19}/>
      <Add/>
      <Description/>
      <button className="btn">GreatPark</button>
      
      <Title title="Ashish" college="GH Raisoni College of Engineering"/>
      <Description/>
      <button>GreatPark</button>
    </form>
  );
}

export default App;
