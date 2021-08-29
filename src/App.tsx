import React, { useState, FormEvent, Dispatch, ChangeEvent } from "react";

function App() {
  const [randomDisplay, setRandomDisplay] = useState(0);

  return (
    <>
      <Form display={setRandomDisplay} />
      {randomDisplay}
    </>
  );
}

//Props for form
interface FormInterface {
  display: Dispatch<React.SetStateAction<number>>;
}

function Form(props: FormInterface) {
  const { display } = props;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  //Checks if there is any input and saves it
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isNaN(parseInt(e.target.value))) {
      setter(parseInt(e.target.value));
    }
  };

  //Generates random number and displays it
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    display(random);
  };

  return (
    <form onSubmit={submitHandler}>
      <section>
        <label htmlFor="min">Minimum </label>
        <input
          type="number"
          name="min"
          id="min"
          value={min}
          max={max}
          onChange={(e) => changeHandler(e, setMin)}
        />
      </section>
      <section>
        <label htmlFor="max">Maximum </label>
        <input
          type="number"
          name="max"
          id="max"
          min={min}
          value={max}
          onChange={(e) => changeHandler(e, setMax)}
        />
      </section>
      <button type="submit">Generate</button>
    </form>
  );
}

export default App;
