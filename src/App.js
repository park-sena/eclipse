import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Ability from "./components/pages/Ability";
import Skill from "./components/pages/Skill";

export default function App() {
  return (
    <Router basename="/eclipse">
      <div id="wrap" className="sub">
        {/* 상단 배너 */}
        <Header />

        <div id="characContent" className="container">
          {/* 좌측 메뉴 */}
          <Sidebar />

          {/* 본문 */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/ability" />} />
              <Route path="/ability" element={<Ability />} />
              <Route path="/skill" element={<Skill />} />
            </Routes>
          </main>
        </div>

        <footer>&copy; 2011 NEOPLE Inc. All Rights Reserved.</footer>
      </div>
    </Router>
  );
}