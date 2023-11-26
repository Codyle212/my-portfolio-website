import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 ">
        <div className="min-h-screen font-Roboto w-11/12 mx-auto">
          <Navbar />
          <Intro />
          <Portfolio />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
