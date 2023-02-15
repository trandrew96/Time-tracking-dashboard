import workIcon from "./images/icon-work.svg";
import playIcon from "./images/icon-play.svg";
import studyIcon from "./images/icon-study.svg";
import exerciseIcon from "./images/icon-exercise.svg";
import socialIcon from "./images/icon-social.svg";
import selfCareIcon from "./images/icon-self-care.svg";

const themes = {
  work: {
    bg: "bg-light-orange",
    icon: workIcon,
  },
  play: {
    bg: "bg-soft-blue",
    icon: playIcon,
  },
  study: {
    bg: "bg-light-red",
    icon: studyIcon,
  },
  exercise: {
    bg: "bg-lime-green",
    icon: exerciseIcon,
  },
  social: {
    bg: "bg-violet",
    icon: socialIcon,
  },
  selfCare: {
    bg: "bg-soft-orange",
    icon: selfCareIcon,
  },
};

const previousStrings = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function Activity(props) {
  if (!(props.name in themes)) {
    return <div>error: invalid props.name</div>;
  }

  return (
    <div className="text-white overflow-hidden">
      <div className={"relative rounded-xl pt-3 " + themes[props.name]["bg"]}>
        <img
          className="absolute right-4 -top-1"
          src={themes[props.name]["icon"]}
          alt="activity icon"
        />
        {/* card */}
        <div className="relative hover:bg-desaturated-blue bg-dark-blue p-5 mt-7 rounded-lg">
          {/* top row */}
          <div className="grid grid-cols-2">
            <div className="capitalize ">{props.name}</div>
            <div className="text-right">
              <button>
                <svg
                  className="hover:fill-white fill-[#BBC0FF]"
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* bottom row */}
          <div className="flex flex-row md:flex-col mt-2 md:mt-4 items-center md:items-start">
            <div className="">
              <span className="text-3xl md:text-6xl">{props.current}hrs</span>
            </div>
            <div className="grow text-right">
              <span className="text-pale-blue">
                {previousStrings[props.timeframe]} - {props.previous}hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
