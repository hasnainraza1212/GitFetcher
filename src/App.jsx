import AllUsers from "./pages/AllUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
