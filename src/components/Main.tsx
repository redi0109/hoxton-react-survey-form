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
  bestFeatures: ["color"],
  worstFeatures: ["logo"],
  timeSpent: ["swimming"],
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
              <span>1</span>
            </label>

            <label>
              <input type="radio" name="consistency" value="2" />
              <span className="radio">2</span>
            </label>

            <label>
              <input type="radio" name="consistency" value="3" />
              <span>3</span>
            </label>

            <label>
              <input type="radio" name="consistency" value="4" />
              <span>4</span>
            </label>
          </li>
        </div>

        <h3>How do you rate your rubber duck color</h3>

        <div className="form__group radio">
          <li>
            <label>
              <input type="radio" name="color" value="1" />
              <span>1</span>
            </label>

            <label>
              <input type="radio" name="color" value="2" />
              <span className="radio">2</span>
            </label>

            <label>
              <input type="radio" name="color" value="3" />
              <span>3</span>
            </label>

            <label>
              <input type="radio" name="color" value="4" />
              <span>4</span>
            </label>
          </li>
        </div>

        <h3>How do you rate your rubber duck logo</h3>

        <div className="form__group radio">
          <li>
            <label>
              <input type="radio" name="logo" value="1" />
              <span>1</span>
            </label>

            <label>
              <input type="radio" name="logo" value="2" />
              <span className="radio">2</span>
            </label>

            <label>
              <input type="radio" name="logo" value="3" />
              <span>3</span>
            </label>

            <label>
              <input type="radio" name="logo" value="4" />
              <span>4</span>
            </label>
          </li>
        </div>

        <h3>How do you like to spend the time with your rubber duck</h3>

        <div className="form__group">
          <li>
            <label>
              <input type="checkbox" name="timeSpent" value="swimming" />
              Swimming
            </label>

            <label>
              <input type="checkbox" name="timeSpent" value="bathing" />
              Bathing
            </label>

            <label>
              <input type="checkbox" name="timeSpent" value="chatting" />
              Chatting
            </label>

            <label>
              <input type="checkbox" name="timeSpent" value="noTime" />I don't
              like to spent time with it
            </label>
          </li>
        </div>

        <h3>What else have you got to say about your rubber duck?</h3>
        <textarea name="review"></textarea>

        <h3>Put your name here (if you feel like it):</h3>
        <input type="text" name="username" />

        <h3>Leave us your emaol pretty please??</h3>
        <input type="email" name="email" />

        <button className="form__submit">Submit Survey!</button>
      </form>
    </main>
  );
}

export default Main;
