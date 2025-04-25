import { Link } from "react-router";
import "./App.css";

function App() {
  const pages = [
    { name: "Tab Form", url: "/tab-form" },
    { name: "Pagination", url: "/pagination" },
    { name: "Drag and Drop", url: "/dnd" },
    { name: "Tic Tac Toe", url: "/tic-tac-toe" },
    { name: "Nested Checkboxes", url: "/nested-checkboxes" },
    { name: "File Folder Structure", url: "/file-folder-structure" },
    { name: "OTP", url: "/otp" },
    { name: "Auto Complete Search", url: "/autocompletesearch" },
  ];
  return (
    <div className="app-container">
      <div>
        <p>Hello, Which one do you want to navigate to ?</p>
      </div>

      <div className="page-container">
        {pages.map((page) => {
          return (
            <div className="page-card">
              <Link className="page-card-link" to={page.url}>
                {page.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
