import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(props) {
  return (
    <main className="app">
      <section className={"main-app"}>
        <Navbar />
        <section
          id={"main-area"}
          className={"sm:px-2 md:px-6 lg:px-8 xl:px-16 2xl:px-28 main-section"}
        >
          {props.children}
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
