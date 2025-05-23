import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import Home from "./Pages/Home";
import Callback from "./Pages/Callback/Callback";
import Context from "./Pages/Context/Context";
import Eslint from "./Pages/Eslint/Eslint";
import Ref from "./Pages/Ref/Ref";

function App() {
  const [courses, setCourses] = useState<string[]>(["CMSC250", "CMSC330"]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/eslint" element={<Eslint />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
