import React from "react";

function App() {
  return <Form />;
}

function Form() {
  return (
    <form>
      <section>
        <label htmlFor="min">Minimum </label>
        <input type="number" name="min" id="min" />
      </section>
      <section>
        <label htmlFor="max">Maximum </label>
        <input type="number" name="max" id="max" />
      </section>
      <button type="submit">Generate</button>
    </form>
  );
}

export default App;
