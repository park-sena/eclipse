import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Ability from "./pages/Ability";
import Skill from "./pages/Skill";

export default function App() {
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
                {/* /lea 접근 시 /lea/ability로 리다이렉트 */}
                <Route path="/" element={<Navigate to="ability" />} />
                <Route path="ability" element={<Ability />} />
                <Route path="skill" element={<Skill />} />
            </Routes>
        </main>
        </div>
    </div>
  );
}