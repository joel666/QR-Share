import { useState, useRef, useEffect } from "react";
import "../css/App.css";
import qrious from "qrious";

function App() {
  const [qrText, setQrText] = useState("");
  const qrRef = useRef(null);

  useEffect(() => {
    new qrious({
      element: qrRef.current,
      value: qrText === "" ? "Hello World" : qrText,
      size: 300,
      padding: 10,
      level: "H",
    });
  }, [qrText]);
  return (
    <div className="App">
      <div id="#qr" className="child">
        <canvas height={300} ref={qrRef} />
      </div>
      <div id="#text" className="child">
        <h1>Quickly share data using QR</h1>
        <textarea
          id="content"
          name="share-data"
          rows="5"
          placeholder="Type Something..."
          value={qrText}
          onChange={(e) => {
            setQrText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
