import Counter from "./Counter";
import Gallery from "./Gallery";

const App = () => {
  return (
    <div style={{ display: "flex" , justifyContent : "space-between"}}>
      {/* <Counter /> */}
      <Gallery />
      <Gallery />
      <Gallery />
    </div>
  );
};

export default App;
