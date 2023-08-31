import arrowUp from "../assets/Line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const BuyingProcess = () => {
  return (
    <section className={"buying-process mt-24 relative pl-12"}>
      <p
        className={
          "text-4xl w-full buying-process-head color-primary font-thin text-center"
        }
      >
        A New buying process
      </p>
      <div className={"flex buying-process mt-12"}>
        <div className={"mobile-wrapper relative"}>
          <div className="msg-1">
            <div className="msg-wrapper">
              <div className="flex msg-wrapper-lvl-2">
                <div className="flex main-msg-class">
                  <div className="flex after-shine">
                    <div className="flex another-wrapper">
                      <div className="message-wrapper">
                        <p className="color-light">
                          Hey Michael! Our limited edition cookies cream protein
                          powder just dropped and is available exclusively to
                          our text subscribers for $34.Reply with the # of bags
                          to place your order! (1,2,3,etc)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg-time">11:26am</div>
          </div>
          {/*  message 2*/}
          <div className="msg-2">
            <div className="msg-2_1">
              <div className="msg-2_2">
                <div className="msg_3664">
                  <div className="msg2_3674">
                    <div className="msg2_3680">
                      <div className="msg2_3686">
                        <p className="msg2_3694">
                          <span className="_label87_2g1j2_3709">
                            I`ll take 3 bags
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg-time">11:26am</div>
          </div>
          <div className="flex msg-1 msg-4">
            <div className="flex msg-wrapper">
              <div className="flex msg-wrapper-lvl-2">
                <div className="flex main-msg-class">
                  <div className="flex after-shine">
                    <div className="flex another-wrapper">
                      <div className="message-wrapper">
                        <p className="color-light">
                          Thanks for your order Michael! Your cookies and cream
                          protein powder will be shipped out in 24-48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg-time">11:26am</div>
          </div>
          <div className="msg-1 msg-5">
            <div className="flex msg-wrapper">
              <div className="flex msg-wrapper-lvl-2">
                <div className="flex main-msg-class">
                  <div className="flex after-shine">
                    <div className="flex another-wrapper">
                      <div className="message-wrapper">
                        <p className="color-light">
                          Hey Michael, your 3 bags of cookies and cream protein
                          powder are on the way. Shipping by FedEx:
                          1Z99999999999
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg-time">11:26am</div>
          </div>
          <div className={"mobile-img"}>
            <div className="mobile-notch">
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 147 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="_icon35_2g1j2_3740"
              >
                <path
                  d="M0.590965 0.000174403H146.558V0.000174403C146.558 13.9651 135.238 25.2859 121.273 25.2859H25.8766C11.9117 25.2859 0.590965 13.9651 0.590965 0.000174403V0.000174403Z"
                  fill="#0692F0"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={"text-to-buy w-full flex flex-col pl-56"}>
          <div className={"about-text-to-buy-text flex flex-col"}>
            <p className="text-left text-to-buy text-left-head text-3xl color-secondary">
              <i>Text To Buy</i>
            </p>
            <p className={"text-sm light-text font-thin font-16"}>
              A frictionless checkout experience that turns every phone number
              into a card on file.
            </p>
            <p className={"text-sm light-text font-thin font-16"}>
              Send customers texts about new releases, exclusive offers and
              subscriptions
            </p>
            <p className={"text-sm light-text font-thin font-16"}>
              They respond to place an order. It's really that simple
            </p>
          </div>
          <div className={"percentages flex flex-row mt-14"}>
            <div className={"percent-1 w-1/4 flex flex-row"}>
              <img src={arrowUp} alt={"arrow"} />
              <div className={"percent-data flex flex-col ml-8"}>
                <p className={"percent-value color-secondary text-3xl italic"}>
                  93%
                </p>
                <p className={"percent-value color-primary text-xl mt-1"}>
                  Open Rate
                </p>
                <p
                  className={
                    "percent-value color-primary text-sm font-thin mt-1"
                  }
                >
                  3&times; Value
                </p>
              </div>
            </div>
            <div className={"percent-1 flex flex-row"}>
              <img src={arrowUp} alt={"arrow"} />
              <div className={"percent-data flex flex-col ml-8"}>
                <p className={"percent-value color-secondary text-3xl italic"}>
                  45%
                </p>
                <p className={"percent-value color-primary text-xl mt-1"}>
                  Response Times
                </p>
                <p
                  className={
                    "percent-value color-primary text-sm font-thin mt-1"
                  }
                >
                  3&times; Value
                </p>
              </div>
            </div>
          </div>
          <div className={"mt-14 flex flex-col"}>
            <div className={"about-lists"}>
              <ul>
                <li className={""}>
                  <p
                    className={
                      "flex flex-row items-center color-primary light-text font-bold text-lg"
                    }
                  >
                    <FontAwesomeIcon
                      className={"color-secondary mr-2 icon-22"}
                      icon={faCheck}
                    />
                    Frictionless ordering with no checkout
                  </p>
                </li>
                <li className={"mt-3"}>
                  <p
                    className={
                      "flex flex-row items-center color-primary light-text font-bold text-lg"
                    }
                  >
                    <FontAwesomeIcon
                      className={"color-secondary mr-2 icon-22"}
                      icon={faCheck}
                    />
                    Fast, easy & secure onboarding link for new customers
                  </p>
                </li>
                <li className={"mt-3"}>
                  <p
                    className={
                      "flex flex-row color-primary items-center font-bold light-text text-lg"
                    }
                  >
                    <FontAwesomeIcon
                      className={"color-secondary mr-2 icon-22"}
                      icon={faCheck}
                    />{" "}
                    Ability to choose size, quantity, delivery method, and more
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyingProcess;
