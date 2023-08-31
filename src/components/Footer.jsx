const Footer = () => {
  return (
    <footer className={"footer"}>
      <div
        className={"footer-wrapper flex flex-row justify-center items-center"}
      >
        <div className={"left-footer-list"}>
          <ul>
            <li>
              <p>
                <i className={"text-sm color-secondary"}>Senderly</i>
              </p>
            </li>
            <li>
              <p className={"text-sm font-medium color-primary mt-3"}>
                Features
              </p>
            </li>
            <li>
              <p className={"text-sm font-medium color-primary mt-3"}>
                Talk to the founders
              </p>
            </li>
          </ul>
        </div>
        <div className={"right-footer-list ml-48"}>
          <ul>
            <li>
              <p className={"text-sm color-secondary"}>Follow us</p>
            </li>
            <li>
              <p className={"text-sm font-medium color-primary mt-3"}>
                Linkedin
              </p>
            </li>
            <li>
              <p className={"text-sm font-medium color-primary mt-3"}>
                Twitter
              </p>
            </li>
            <li>
              <p className={"text-sm font-medium color-primary mt-3"}>
                Instagram
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
