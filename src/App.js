import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExampleLayout from "./components/ExampleLayout";
import LearningDataBinding from "./components/LearningDataBinding";
import ExampleShowRoom from "./components/ExampleShowRoom";
import ShoppingCart from "./components/ShoppingCart";

// JSX : html + js
function App() {
  return (
    // <div className="App">
    //   <Header></Header>
    //   <div className="main">
    //     <Navigation></Navigation>
    //     <section class="content">
    //       <h3>Content Component</h3>
    //     </section>
    //   </div>
    //   <footer class="footer">
    //     <h3>Footer Component</h3>
    //   </footer>
    // </div>
    <div>
   
      <ShoppingCart />
    </div>
  );
}

export default App;
