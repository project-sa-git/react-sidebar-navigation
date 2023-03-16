import { getValue } from "@testing-library/user-event/dist/utils";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* first: 一番最初に作りたいコンポーネント名を記述する(その後にコンポーネント追加する) */}
      <Sidebar />
    </div>
  );
}

export default App;
