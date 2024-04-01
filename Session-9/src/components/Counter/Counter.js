// function Counter() {
//   var countValue = 0;
//   const increaseCount = () => {
//     //    countValue++
//     // ++countValue;
//     countValue = countValue + 1;
//     console.log(countValue);
//   };
//   return (
//     <div className="mt-5 mb-3 text-center">
//       <h2 className="mb-3">Count Value : {countValue}</h2>
//       <button onClick={increaseCount} className="btn btn-outline-success mx-3">
//         incCount
//       </button>
//       <button
//         className="btn btn-outline-danger mx-3
//       "
//       >
//         decCount
//       </button>
//     </div>
//   );
// }
import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);

  const increaseCount = () => {
    setState(state + 1);
  };
  return (
    <div className="mt-5 mb-3 text-center">
      <h2 className="mb-3">Count Value : {state}</h2>
      <button onClick={increaseCount} className="btn btn-outline-success mx-3">
        incCount
      </button>
      <button
        className="btn btn-outline-danger mx-3
        "
      >
        decCount
      </button>
    </div>
  );
}

export default Counter;
