import React from "react";

export default function () {
  const [myValue, setValue] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const [showHistory, setShowHistory] = React.useState(false);

  const whenClicked = (value) => {
    if (value === "AC") {
      setValue("");
    } else if (value === "DE") {
      setValue(myValue.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(myValue);
        const record = `${myValue} = ${result}`;
        setHistory([record, ...history]);
        setValue(result.toString());
      } catch (error) {
        setValue("Error");
      }
    } else {
      setValue(myValue + value);
    }
  };
  let historyDisplay;

  if (history.length === 0) {
    historyDisplay = <p className="text-gray-500 text-sm">No History Yet! </p>;
  } else if (history.length > 5) {
    historyDisplay = (
      <div>
        {" "}
        <p className="text-blue-500 text-sm mb-2">
          Showing Last 5 Results
        </p>{" "}
        <ul>
          {history.slice(0, 5).map((item, index) => (
            <li className="list-disc list-inside" key={index}>
              {item}
            </li>
          ))}
        </ul>{" "}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setHistory([])}
            className="mt-3 px-3 py-1 bg-red-300 text-white rounded text-sm hover:bg-red-600"
          >
            CLEAR HISTORY
          </button>
        </div>
      </div>
    );
  } else {
    historyDisplay = (
      <div>
        <ul>
          {history.map((item, index) => (
            <li className="list-disc list-inside" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setHistory([])}
            className="mt-3 px-3 py-1 bg-red-300 text-white rounded text-sm hover:bg-red-600"
          >
            CLEAR HISTORY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-full bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="p-5 rounded-[10px] bg-white">
        <form
          action=""
          className="max-w-xs mx-auto p-4 bg-gray-100 rounded-xl shadow-lg space-y-4"
        >
          <div>
            <input
              type="text"
              value={myValue}
              className="w-full p-3 text-right text-2xl border rounded-lg outline-none bg-white text-black"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="button"
              value="AC"
              className="btn btn-danger"
              onClick={() => whenClicked("AC")}
            />
            <input
              type="button"
              value="DE"
              className="btn btn-warning"
              onClick={() => whenClicked("DE")}
            />
            <input
              type="button"
              value="."
              className="btn btn-primary"
              onClick={() => whenClicked(".")}
            />
            <input
              type="button"
              value="/"
              className="btn btn-calc"
              onClick={() => whenClicked("/")}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="button"
              value="7"
              className="btn btn-primary"
              onClick={() => whenClicked("7")}
            />
            <input
              type="button"
              value="8"
              className="btn btn-primary"
              onClick={() => whenClicked("8")}
            />
            <input
              type="button"
              value="9"
              className="btn btn-primary"
              onClick={() => whenClicked("9")}
            />
            <input
              type="button"
              value="X"
              className="btn btn-calc"
              onClick={() => whenClicked("*")}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="button"
              value="4"
              className="btn btn-primary"
              onClick={() => whenClicked("4")}
            />
            <input
              type="button"
              value="5"
              className="btn btn-primary"
              onClick={() => whenClicked("5")}
            />
            <input
              type="button"
              value="6"
              className="btn btn-primary"
              onClick={() => whenClicked("6")}
            />
            <input
              type="button"
              value="+"
              className="btn btn-calc"
              onClick={() => whenClicked("+")}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="button"
              value="1"
              className="btn btn-primary"
              onClick={() => whenClicked("1")}
            />
            <input
              type="button"
              value="2"
              className="btn btn-primary"
              onClick={() => whenClicked("2")}
            />
            <input
              type="button"
              value="3"
              className="btn btn-primary"
              onClick={() => whenClicked("3")}
            />
            <input
              type="button"
              value="-"
              className="btn btn-calc"
              onClick={() => whenClicked("-")}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="button"
              value="00"
              className="btn btn-primary"
              onClick={() => whenClicked("00")}
            />
            <input
              type="button"
              value="0"
              className="btn btn-primary"
              onClick={() => whenClicked("0")}
            />
            <input
              type="button"
              value="="
              className="btn btn-calc"
              onClick={() => whenClicked("=")}
            />
            <input
              type="button"
              value="HISTORY"
              className="btn btn-warning !text-[12px]"
              onClick={() => setShowHistory(!showHistory)}
            />
          </div>
          {showHistory && (
            <div className="border p-4 rounded-xl bg-gray-100 shadow-md">
              <h2 className="font-bold mb-2 items-center justify-center flex">
                HISTORY
              </h2>
              {historyDisplay}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
