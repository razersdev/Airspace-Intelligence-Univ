import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Header />

        <main className="content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;