import React from "react";
import "./App.css";
import KeyPad from "./KeyPad/KeyPad";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "275px",
            justifyContent: "center",
            marginLeft: "2rem"
          }}
        >
          <div>
            <h2>
              Matching either keycode results in <u><i>both keypads from being usable
              due to an error.</i></u>
            </h2>
            <p style={{minHeight: '90px'}}>This lets us wrap a large section of our app and catch errors</p>
          </div>
          <KeyPad matcher="↓→↓←↓" />
          <KeyPad matcher="↓→↓↓←" />
        </div>
      </ErrorBoundary>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "275px",
          justifyContent: "center",
          marginLeft: "2rem"
        }}
      >
        <div>
          <h2>
            Matcher either of the keycodes will result in the <u><i>matching keypad to
            display the error.</i></u>
          </h2>
          <p>
            We can use error boundaries to capture errors around smaller
            sections of our app. This prevents the whole app from being unusable
            due to the error.
          </p>
        </div>
        <ErrorBoundary>
          <KeyPad matcher="↓→↑→↓" />
        </ErrorBoundary>
        <ErrorBoundary>
          <KeyPad matcher="↑→↑↓←" />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
