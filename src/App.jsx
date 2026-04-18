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

  return (
    <main className="app-shell">
      <section className="converter-card">
        <p className="eyebrow">Binary Converter</p>
        <h1>Code to Number</h1>

        <label className="label" htmlFor="binary-code-input">
          Enter binary code (0 or 1)
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

        <p className="bit-count">Bits: {binaryCode.length}</p>

        <section className="output-panel" aria-live="polite">
          <p className="label">Number Output</p>
          <p className="number-output">
            {binaryCode.length === 8 ? decimalValue : " "}
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
