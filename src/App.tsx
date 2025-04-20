import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import Home from "./pages/Home";
import Callback from "./pages/Callback/Callback";
import Context from "./pages/Context/Context";
import Ref from "./pages/Ref/Ref";

function App() {
  const [courses, setCourses] = useState<string[]>(["CMSC250", "CMSC330"]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context courses={courses} />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
