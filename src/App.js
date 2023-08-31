import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(props) {
  return (
    <main className="app">
      <section className={"main-app"}>
        <Navbar />
        <section className={"xl:px-16 2xl:px-28 main-section"}>
          {props.children}
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
