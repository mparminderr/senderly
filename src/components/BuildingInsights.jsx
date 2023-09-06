import senderly_only_logo from "../assets/senderly_only_logo.png";
import IncreaseChart from "../assets/IncreaseChart";

const BuildingInsights = () => {
  return (
    <section className={"mt-24 flex flex-row building-insights"}>
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
            <p className={"font-sm font-light color-light mt-2"}>
              Your CVR on your newest text-to-buy campaign is 24%,higher today.
              Consider scaling budgets.
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
            <p className={"color-light opacity-50"}>11.26 AM</p>
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
            <p className={"font-sm font-light color-light mt-2"}>
              Funnel identified that would have added an estimated $3,500 in the
              last 12 days
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
            <p className={"color-light opacity-50"}>4.26 PM</p>
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
            <p className={"font-sm font-light color-light mt-2"}>
              Your text-to-buy campaigns generated 22% more revenue this month
              compared to last month
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
            <p className={"color-light opacity-50"}>11.26 AM</p>
          </div>
        </div>
      </div>
      <div
        className={
          "introduction seamless-head m-auto mr-0 flex justify-center flex-col "
        }
      >
        <p className={"color-primary text-4xl font-thin "}>
          Spend less time pulling data & more time{" "}
          <i className={"color-secondary"}>building insights</i>
        </p>

        <div className={"seamless-meta-text meta-text mt-8"}>
          <p className={"color-light"}>
            Our AI-powered platform will continuously optimize your text-to-buy
            campaigns for the highest conversion rate. T he more data it
            collects, the better Senderly can detect anomolies, surface insights
            and deliver tactical anomolies, surface insights and deliver
            tactical
          </p>
        </div>
      </div>
      <div
        className={
          "introduction-md seamless-head m-auto mr-0 flex justify-center flex-col "
        }
      >
        <p className={"color-primary text-4xl font-thin "}>
          Spend less time pulling data & more time{" "}
          <i className={"color-secondary"}>building insights</i>
        </p>

        <div className={"seamless-meta-text seamless-m meta-text mt-8"}>
          <p className={"color-light"}>
            Our AI-powered platform will continuously optimize your text-to-buy
            campaigns for the highest conversion rate. T he more data it
            collects, the better Senderly can detect anomolies, surface insights
            and deliver tactical anomolies, surface insights and deliver
            tactical
          </p>
        </div>
      </div>
    </section>
  );
};
export default BuildingInsights;
