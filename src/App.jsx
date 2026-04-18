import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [binaryCode, setBinaryCode] = useState("");

  const decimalValue = useMemo(() => {
    if (binaryCode.length !== 8) {
      return "";
    }

    return BigInt(`0b${binaryCode}`).toString(10);
  }, [binaryCode]);

  const handleBinaryChange = (event) => {
    const candidateValue = event.target.value;

    if (/^[01]{0,8}$/.test(candidateValue)) {
      setBinaryCode(candidateValue);
    }
  };

  const handleClear = () => {
    setBinaryCode("");
  };

  return (
    <main className="app-shell">
      <section className="converter-card">
        <div className="decode-row">
          <label className="decode-label" htmlFor="binary-code-input">
            Decode:
          </label>
          <input
            id="binary-code-input"
            className="binary-input"
            type="text"
            value={binaryCode}
            onChange={handleBinaryChange}
            maxLength={8}
            inputMode="numeric"
            autoComplete="off"
            spellCheck="false"
          />
          <button className="clear-button" type="button" onClick={handleClear}>
            Clear
          </button>
        </div>

        <section className="output-panel" aria-live="polite">
          <p className="label">Solution</p>
          <p className="number-output">
            {binaryCode.length === 8 ? decimalValue : " "}
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
