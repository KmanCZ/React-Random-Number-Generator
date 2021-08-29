import React, { useState, FormEvent, Dispatch } from "react";

function App() {
  const [randomDisplay, setRandomDisplay] = useState(0);

  return (
    <>
      <Form display={setRandomDisplay} />
      {randomDisplay}
    </>
  );
}

interface FormInterface {
  display: Dispatch<React.SetStateAction<number>>;
}

function Form(props: FormInterface) {
  const { display } = props;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

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
          onChange={(e) =>
            !isNaN(parseInt(e.target.value)) && setMin(parseInt(e.target.value))
          }
        />
      </section>
      <section>
        <label htmlFor="max">Maximum </label>
        <input
          type="number"
          name="max"
          id="max"
          value={max}
          onChange={(e) =>
            !isNaN(parseInt(e.target.value)) && setMax(parseInt(e.target.value))
          }
        />
      </section>
      <button type="submit">Generate</button>
    </form>
  );
}

export default App;
