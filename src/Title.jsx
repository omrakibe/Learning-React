import { Name } from "./Description.jsx";

function Title() {
  return (
    // React fragment
    <>
      <h1>
        Myself,
        <Name />
      </h1>
      <h3>Pursuing BE in KJ College of Engineering Management and Reaseach</h3>
    </>
  );
}
function Add() {
  let a = 10;
  let b = 20;
  return <p>Addition of A and B is: {a + b}</p>;
}

export { Title, Add };
