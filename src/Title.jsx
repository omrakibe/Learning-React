import "./Title.css"
import { Name } from "./Description.jsx";

function Title({title, college, age=18}) {
  return (
    // React fragment
    <>
      <h1 className="Title"> 
        Myself, {title}
        {/* <Name /> */}
      </h1>
      <h3>Pursuing BE in {college}</h3>
      <h3>Age: {age + 2-2}</h3>
    </>
  );
}
function Add() {
  let a = 10;
  let b = 20;
  return <p>Addition of A and B is: {a + b}</p>;
}

export { Title, Add };
