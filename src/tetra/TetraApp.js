import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

import Ability from "./pages/Ability";
import Skill from "./pages/Skill";
import Eclipse from "./pages/Eclipse";
import Report from "./pages/Report";
import Document from "./pages/Document";
import Content from "./pages/Content";
import Voice from "./pages/Voice";

export default function App() {
  // 웹 타이틀 변경
  document.title = "직관의 테트라";

  return (
    <div id="wrap" className="sub">
        {/* 상단 배너 */}
        <Header />

        <div id="characContent" className="container">
        {/* 좌측 메뉴 */}
        <Sidebar />

        {/* 본문 */}
        <main className="content">
            <Routes>
                {/* /tetra 접근 시 */}
                <Route path="/" element={<Navigate to="ability" />} />
                <Route path="ability" element={<Ability />} />
                <Route path="skill" element={<Skill />} />
                <Route path="eclipse" element={<Eclipse />} />
                <Route path="report" element={<Report />} />
                <Route path="document" element={<Document />} />
                <Route path="content" element={<Content />} />
                <Route path="voice" element={<Voice />} />
            </Routes>
        </main>
        </div>
    </div>
  );
}