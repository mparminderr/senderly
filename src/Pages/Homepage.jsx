import { Fragment } from "react";
import stars1 from "../assets/stars1.png";
import stars2 from "../assets/stars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Homepage.css";
import aiPowerImage from "../assets/askSenderlyDesktop.svg";
import BuyingProcess from "../components/BuyingProcess";
import Seamless from "../components/Seamless";
import senderlyBetter from "../assets/tableDesktop.svg";
import senderlyBetterMobile from "../assets/tableMobile.svg";
import BuildingInsights from "../components/BuildingInsights";

const Homepage = () => {
  return (
    <Fragment>
      <section className={"banner-section mt-9 flex flex-row relative"}>
        <img src={stars1} className={"absolute right-0"} alt={"stars"} />
        <div
          className={
            "introduction-md md:hidden text-center flex flex-col m-auto mt-16 p-2 relative"
          }
        >
          <p className={"color-primary text-3xl font-thin "}>
            Simplify the buying process with conversations that{" "}
            <i className={"color-secondary"}>convert</i>
          </p>
          <div className={"meta-text mt-6"}>
            <p className={"color-light"}>
              The #1 text-to-buy application for D2C brands who want to drive
              more revenue, increase order frequency and AOV.
            </p>
          </div>
        </div>
        <div
          className={
            "introduction flex flex-col mt-16 relative top-0 left-0 z-50"
          }
        >
          {/*<div className={"flex flex-col head-wrapper relative z-20"}>*/}
          {/*<div className={"introduction-shine z-10"}></div>*/}
          <p className={"color-primary text-5xl font-thin "}>
            Simplify the buying process with conversations that{" "}
            <i className={"color-secondary"}>convert</i>
          </p>

          <div className={"meta-text mt-10"}>
            <p className={"color-light"}>
              The #1 text-to-buy application for D2C brands who want to drive
              more revenue, increase order frequency and AOV.
            </p>
            <p className={"color-light mt-1"}></p>
          </div>
          {/*</div>*/}
        </div>
        <div
          className={
            "e-mail-form sm:p-2 relative flex lg:justify-end m-auto lg:mr-0"
          }
        >
          <img
            src={stars2}
            className={"absolute left-0 -top-16 z-10"}
            alt={"stars"}
          />

          <div className={"form-section flex flex-col z-30"}>
            <div className="w-2/3 form-wrapper">
              <div className={"form-meta-info"}>
                <p className={"color-primary head-text"}>
                  Be one of the{" "}
                  <i className={"color-secondary"}>
                    first brands who makes it is
                  </i>{" "}
                  to buy with
                  <i> SMS</i>
                </p>
              </div>
              <form className="w-full mb-4 mt-8">
                <div className="mb-4">
                  <label
                    className="block email-label  text-sm font-extralight mb-2"
                    htmlFor="email"
                  >
                    Business Email<sup>*</sup>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter your work email"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="submit-email-btn w-full bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Unlock Growth <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <BuyingProcess />
      <Seamless />
      <BuildingInsights />
      <section className={"pl-12 flex flex-row ai-power mt-24 pr-12"}>
        <div className={"seamless-heading flex justify-center flex-col "}>
          <p className={"color-primary text-4xl font-thin "}>
            Unleash the <i className={"color-secondary"}>power</i> of{" "}
            <i className={"color-secondary"}>AI</i>
          </p>

          <div className={"seamless-meta-text mt-8"}>
            <p className={"color-light"}>
              Discover the intuitive and user-friendly power of
            </p>
            <p className={"color-light mt-1"}>
              Senderly, with its Google-like search interface.{" "}
            </p>
            <p className={"color-light mt-1"}>
              Experience the ease of typing a question and obtaining a
            </p>

            <p className={"color-light mt-1"}>
              comprehensive,customized report tailored just for you
            </p>
          </div>
        </div>
        <div className={"ai-power-image m-auto mr-0"}>
          <img src={aiPowerImage} alt={"ask senderly"} />
        </div>
      </section>
      <section className={"pl-12 flex flex-col senderly-better mt-24 pr-12"}>
        <p className={"color-primary text-4xl font-thin text-center"}>
          Where Senderly is <i className={"color-secondary"}>better</i> than
        </p>
        <p className={"color-primary text-4xl font-thin text-center"}>
          everyone else:
        </p>
        <img src={senderlyBetter} className={"-mt-2"} alt={"senderly-better"} />
      </section>
      <section className={"pl-2 flex flex-col senderly-better-mobile"}>
        <p className={"color-primary text-4xl font-thin text-center"}>
          Where Senderly is <i className={"color-secondary"}>better</i> than
        </p>
        <p className={"color-primary text-4xl font-thin text-center"}>
          everyone else:
        </p>
        <img
          src={senderlyBetterMobile}
          className={"-mt-2"}
          alt={"senderly-better"}
        />
      </section>
    </Fragment>
  );
};
export default Homepage;
