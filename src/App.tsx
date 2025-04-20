import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Callback from "./Pages/Callback/Callback";
import Context from "./Pages/Context/Context";
import Ref from "./Pages/Ref/Ref";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/context" element={<Context />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </Router>
  );
}

export default App;
