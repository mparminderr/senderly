import senderly_only_logo from "../assets/senderly_only_logo.png";
import IncreaseChart from "../assets/IncreaseChart";

const BuildingInsights = () => {
  return (
    <section className={"mt-24 flex flex-row building-insights pl-12 pr-12"}>
      <div
        className={"building-insights-image flex flex-col min-w-min min-h-min"}
      >
        <img
          src={senderly_only_logo}
          alt={"senderly"}
          className={"senderly-logo-small"}
        />
        <div className={"insights-item mt-4 flex flex-row"}>
          <div className={"up float-left "}>
            <div className={"arrow-wrapper"}>
              <IncreaseChart />
            </div>
          </div>
          <div className={"insights-list-text flex flex-col ml-3"}>
            <p className={"text-xl font-thin color-primary"}>
              Anomaly Detection
            </p>
            <p className={"text-sm font-sm font-light color-light mt-2"}>
              Your CVR on your newest text-to-buy campaign is 24%,
            </p>
            <p className={"text-sm font-sm font-light color-light mt-1"}>
              higher today. Consider scaling budgets.
            </p>
            <div className="btn-class mt-3">
              <div className="btn-wrapper">
                <button className="btn color-light opacity-60 ">
                  See details
                </button>
              </div>
            </div>
          </div>
          <div className={"item-right"}>
            <p className={"text-sm color-light opacity-50"}>11.26 AM</p>
          </div>
        </div>
        <div className={"insights-item mt-4 flex flex-row"}>
          <div className={"up float-left "}>
            <div className={"arrow-wrapper"}>
              <IncreaseChart />
            </div>
          </div>
          <div className={"insights-list-text flex flex-col ml-3"}>
            <p className={"text-xl font-thin color-primary"}>
              Funnel recommendation
            </p>
            <p className={"text-sm font-sm font-light color-light mt-2"}>
              Funnel identified that would have added an estimated
            </p>
            <p className={"text-sm font-sm font-light color-light mt-1"}>
              $3,500 in the last 12 days
            </p>
            <div className="btn-class mt-3">
              <div className="btn-wrapper">
                <button className="btn color-light opacity-60 ">
                  See details
                </button>
              </div>
            </div>
          </div>
          <div className={"item-right"}>
            <p className={"text-sm color-light opacity-50"}>4.26 PM</p>
          </div>
        </div>
        <div className={"insights-item mt-4 flex flex-row"}>
          <div className={"up float-left "}>
            <div className={"arrow-wrapper"}>
              <IncreaseChart />
            </div>
          </div>
          <div className={"insights-list-text flex flex-col ml-3"}>
            <p className={"text-xl font-thin color-primary"}>AI Analytics</p>
            <p className={"text-sm font-sm font-light color-light mt-2"}>
              Your text-to-buy campaigns generated 22% more revenue
            </p>
            <p className={"text-sm font-sm font-light color-light mt-1"}>
              this month compared to last month
            </p>
            <div className="btn-class mt-3">
              <div className="btn-wrapper">
                <button className="btn color-light opacity-60 ">
                  See details
                </button>
              </div>
            </div>
          </div>
          <div className={"item-right"}>
            <p className={"text-sm color-light opacity-50"}>11.26 AM</p>
          </div>
        </div>
      </div>
      <div
        className={"seamless-heading m-auto mr-0 flex justify-center flex-col "}
      >
        <p className={"color-primary text-4xl font-thin "}>
          Spend less time pulling data &
        </p>
        <p className={"color-primary text-4xl font-thin mt-4"}>
          more time <i className={"color-secondary"}>building insights</i>
        </p>

        <div className={"seamless-meta-text mt-8"}>
          <p className={"color-light"}>
            Our AI-powered platform will continuously optimize your
          </p>
          <p className={"color-light mt-1"}>
            text-to-buy campaigns for the highest conversion rate. The
          </p>
          <p className={"color-light mt-1"}>
            more data it collects, the better Senderly can detect
          </p>
          <p className={"color-light mt-1"}>
            anomolies, surface insights and deliver tactical
          </p>
          <p className={"color-light mt-1"}>
            anomolies, surface insights and deliver tactical
          </p>
        </div>
      </div>
    </section>
  );
};
export default BuildingInsights;
