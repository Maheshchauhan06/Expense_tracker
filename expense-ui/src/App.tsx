import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
