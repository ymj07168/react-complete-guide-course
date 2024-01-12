import React from "react";
import UserInput from "./components/UserInput/UserInput";
import Result from "./components/Result/Result";

//
//
//

function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    expectedReturn: 5.5,
    duration: 3,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (key, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [key]: +newValue,
      };
    });
  };

  //
  //
  //

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration a greater than zero</p>
      )}
    </>
  );
}

export default App;
