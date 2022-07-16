import Navbar from "./Navbar";
import Header from "./Header";
import DescriptionContainer from "./DescriptionContainer";
import ReactLogo from "./Logo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ReactLogo />
      <DescriptionContainer />
    </div>
  );
};

export default App;

// module.exports = App; =:> OLD SCHOOL
