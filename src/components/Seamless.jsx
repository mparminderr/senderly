import icon1 from "../assets/iconImage1.svg";
import icon2 from "../assets/iconImage2.svg";
import icon3 from "../assets/iconImage3.svg";
import icon4 from "../assets/iconImage4.svg";

const SeamlessIcons = () => {
  return (
    <section className={"seamless mt-24 relative"}>
      <div className={"seamless-wrapper flex flex-row"}>
        <div className={"seamless-heading flex justify-center flex-col "}>
          <p className={"color-primary text-4xl font-thin "}>
            Seamlessly <i className={"color-secondary"}>integrate</i> with your
          </p>
          <p className={"color-primary text-4xl font-thin mt-4"}>
            favorite applications like
          </p>
          <p className={"color-primary text-4xl font-thin mt-4"}>
            <i className={"color-secondary"}>Shopify, </i>
            <i className={"color-secondary"}>Klavio</i> and more
          </p>
          <div className={"seamless-meta-text mt-8"}>
            <p className={"color-light"}>
              Integration is quick and painless through a white glove
            </p>
            <p className={"color-light mt-1"}>
              onboarding that unlocks the full capabilities of text to buy.
            </p>
            <p className={"color-light mt-1"}>
              Senderly will be launching more integrations very soon!
            </p>
          </div>
        </div>
        <div
          className={"seamless-heading-mobile flex justify-center flex-col "}
        >
          <p className={"color-primary text-4xl font-thin "}>
            Seamlessly <i className={"color-secondary"}>integrate</i> with your
            favorite applications like{" "}
            <i className={"color-secondary"}>Shopify, </i>
            <i className={"color-secondary"}>Klavio</i> and more
          </p>
          {/*<p className={"color-primary text-4xl font-thin mt-4"}>*/}
          {/*     */}
          {/*</p>*/}
          {/*<p className={"color-primary text-4xl font-thin mt-4"}>*/}

          {/*</p>*/}
          <div className={"seamless-meta-text mt-8"}>
            <p className={"color-light"}>
              Integration is quick and painless through a white glove onboarding
              that unlocks the full capabilities of text to buy. Senderly will
              be launching more integrations very soon!
            </p>
            <p className={"color-light mt-1"}></p>
            <p className={"color-light mt-1"}></p>
          </div>
        </div>
        <div className={"seamless-icons m-auto mr-0"}>
          <div className={"circle"}>
            <div className={"icons icons-top-left top-0"}>
              <img
                src={icon1}
                className={"object-contain w-full h-full"}
                alt={"seamless-icons"}
              />
            </div>
            <div className={"icons icons-top-right top-0 flex justify-center"}>
              <img
                src={icon2}
                className={"object-contain w-1/2 h-auto"}
                alt={"seamless-icons"}
              />
            </div>
            <div
              className={
                "icons icons-bottom-right bottom-0 flex justify-center"
              }
            >
              <img
                src={icon3}
                className={"object-contain w-1/2 h-auto"}
                alt={"seamless-icons"}
              />
            </div>
            <div
              className={"icons icons-bottom-left bottom-0 flex justify-center"}
            >
              <img
                src={icon4}
                className={"object-contain w-1/2 h-auto"}
                alt={"seamless-icons"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SeamlessIcons;
