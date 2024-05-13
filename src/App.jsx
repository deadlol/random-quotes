import { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [colorData, setColorData] = useState(null);
  useEffect(() => {
    async function fetchColor() {
      const response = await fetch("https://x-colors.yurace.pro/api/random");
      const data = await response.json();
      setColorData(data);
    }
    fetchColor();
  }, []);

  return (
    <>
      {colorData && (
        <div id="back" style={{ backgroundColor: colorData.rgb }}>
          <QuoteBox colordata={colorData} />
        </div>
      )}
    </>
  );
}

export default App;
