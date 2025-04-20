import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import Home from "./Pages/Home";
import Callback from "./Pages/Callback/Callback";
import Context from "./Pages/Context/Context";
import Ref from "./Pages/Ref/Ref";

function App() {
  const [courses, setCourses] = useState<string[]>(["CMSC250", "CMSC330"]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/context" element={<Context courses={courses} />} />
          <Route path="/ref" element={<Ref />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
