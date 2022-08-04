import { useState } from "react";

type AnswerType = {
  review: string;
  email: string;
  username: string;
  consistency: number;
  colour: number;
  logo: number;
  bestFeatures: never[];
  worstFeatures: never[];
  timeSpent: never[];
};

const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: [],
};

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{/* a form should be here */}</section>
      <form className="form">
        <h2>Tell us what you think about your rubber duck!</h2>

        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>

        <div className="form__group">
          <li>
            <label>
              <input type="checkbox" name="bestFeatures" value="color" />
              It's yellow
            </label>

            <label>
              <input type="checkbox" name="bestFeatures" value="sound" />
              It squeaks
            </label>

            <label>
              <input type="checkbox" name="bestFeatures" value="logo" />
              It has a logo
            </label>

            <label>
              <input type="checkbox" name="bestFeatures" value="size" />
              It's big
            </label>
          </li>
        </div>

        <h3>What would you say that are the worst bits of your rubber duck?</h3>

        <div className="form__group">
          <li>
            <label>
              <input type="checkbox" name="worstFeatures" value="color" />
              It's yellow
            </label>

            <label>
              <input type="checkbox" name="worstFeatures" value="sound" />
              It squeaks
            </label>

            <label>
              <input type="checkbox" name="worstFeatures" value="logo" />
              It has a logo
            </label>
 
            <label>
              <input type="checkbox" name="worstFeatures" value="size" />
              It's big
            </label>
          </li>
        </div>

        <h3>How do you rate your rubber duck consistency</h3>

        <div className="form__group radio">
          <li>
            <label>
              <input type="radio" name="consistency" value="1" />
             1
            </label>

            <label>
              <input type="radio" name="consistency" value="2" />
             2
            </label>

            <label>
              <input type="radio" name="consistency" value="3" />
              3
            </label>
 
            <label>
              <input type="radio" name="consistency" value="4" />
              4
            </label>
          </li>
        </div>

        <h3>How do you rate your rubber duck color</h3>

        <h3>How do you rate your rubber duck logo</h3>

        <h3>How do you like to spend the time with your rubber duck</h3>

        <h3>What else have you got to say about your rubber duck?</h3>

        <h3>Put your name here (if you feel like it):</h3>

        <h3>Leave us your emaol pretty please??</h3>

        <button className="form__ submit">Submit Survey!</button>
      </form>
    </main>
  );
}

export default Main;
