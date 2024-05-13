import { useState } from "react";
import Buttons from "./Buttons";
import { useEffect } from "react";

export default function QuoteBox({ colordata }) {
  const [datas, setDatas] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": "+8WfiwuIo+elQUeaTxpDCQ==JXzBTWj8BVaeuNiZ",
        },
        contentType: "application/json",
      };
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=success",
        options
      );
      const data = await response.json();
      setDatas(data);
    }
    setIsFetching((prev) => !prev);
    fetchData();
    setIsFetching((prev) => !prev);
  }, [isFetching, setDatas]);

  function changeQouteHandler() {
    setIsFetching((prev) => !prev);
  }

  return (
    <div id="quote-box">
      {datas && (
        <>
          <p id="text" style={{ color: colordata.rgb }}>
            <span>
              <i className="fa-duotone fa-quote-left" target="_blank"></i>
            </span>
            {datas[0].quote}
          </p>
          <p id="author" style={{ color: colordata.rgb }}>
            -{datas[0].author}
          </p>
          <div id="buttons">
            <Buttons id="tweet-quote" color={colordata.rgb}>
              <a href="twitter.com/intent/tweet" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </Buttons>
            <Buttons
              id="new-quote"
              color={colordata.rgb}
              onClick={changeQouteHandler}
            >
              New Quote
            </Buttons>
          </div>
        </>
      )}
    </div>
  );
}
