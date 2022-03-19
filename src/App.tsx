import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Game } from "./components/pages/Game";
import { Rule } from "./components/pages/Rule";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 border border-stone-600 rounded box-border h-screen w-2/3 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/rule" element={<Rule />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
