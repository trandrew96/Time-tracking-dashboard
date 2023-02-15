import data from "./data.json";
import { useState } from "react";
import avatar from "./images/image-jeremy.png";
import Activity from "./Activity.js";
import "./App.css";

const workData = data[0];
const playData = data[1];
const studyData = data[2];
const exerciseData = data[3];
const socialData = data[4];
const selfCareData = data[5];

function App() {
  const [timeframe, setTimeFrame] = useState("weekly");

  return (
    <div className="App p-5 md:p-10 max-w-screen-xl mx-auto min-h-screen md:flex md:items-center">
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="row-span-2">
            {/* profile card */}
            <div className="bg-dark-blue text-white rounded-xl h-full">
              <div className="bg-custom-blue p-5 rounded-xl flex flex-row md:flex-col items-center md:items-start">
                <div className="">
                  <div className="bg-white p-1 rounded-full inline-block">
                    <img className="w-16 md:w-20" src={avatar} alt="avatar" />
                  </div>
                </div>
                <div className="mt-5 mb-6 pl-5 md:pl-0">
                  <span className="text-pale-blue">Report for</span>
                  <span className="text-2xl md:text-5xl block">
                    Jeremy Robson
                  </span>
                </div>
              </div>
              <div className="p-5 md:min-h-max">
                <div className="grid grid-cols-3 md:grid-cols-1 text-pale-blue">
                  <div className="pt-2">
                    <button
                      className={
                        "hover:text-white " +
                        (timeframe === "daily" ? "text-white" : "")
                      }
                      onClick={() => setTimeFrame("daily")}
                    >
                      Daily
                    </button>
                  </div>
                  <div className="pt-2">
                    <button
                      className={
                        "hover:text-white " +
                        (timeframe === "weekly" ? "text-white" : "")
                      }
                      onClick={() => setTimeFrame("weekly")}
                    >
                      Weekly
                    </button>
                  </div>
                  <div className="pt-2">
                    <button
                      className={
                        "hover:text-white " +
                        (timeframe === "monthly" ? "text-white" : "")
                      }
                      onClick={() => setTimeFrame("monthly")}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Activity
              name="work"
              timeframe={timeframe}
              current={workData["timeframes"][timeframe]["current"]}
              previous={workData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
          <div>
            <Activity
              name="play"
              timeframe={timeframe}
              current={playData["timeframes"][timeframe]["current"]}
              previous={playData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
          <div>
            <Activity
              name="study"
              timeframe={timeframe}
              current={studyData["timeframes"][timeframe]["current"]}
              previous={studyData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
          <div>
            <Activity
              name="exercise"
              timeframe={timeframe}
              current={exerciseData["timeframes"][timeframe]["current"]}
              previous={exerciseData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
          <div>
            <Activity
              name="social"
              timeframe={timeframe}
              current={socialData["timeframes"][timeframe]["current"]}
              previous={socialData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
          <div>
            <Activity
              name="selfCare"
              timeframe={timeframe}
              current={selfCareData["timeframes"][timeframe]["current"]}
              previous={selfCareData["timeframes"][timeframe]["previous"]}
            ></Activity>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
