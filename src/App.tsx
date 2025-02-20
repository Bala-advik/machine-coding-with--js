import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="container">
      Hello, Which one do you want to navigate to ?
      <Link to="/tab-form">Tab Form</Link>
      <Link to="/pagination">Pagination</Link>
    </div>
  );
}

export default App;
