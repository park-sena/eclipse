import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LeaApp from "./lea/LeaApp";
import TetraApp from "./tetra/TetraApp";

export default function App() {
  return (
    <Router basename="/eclipse">
      <Routes>
        {/* default */}
        <Route path="/" element={<Navigate to="/lea" />} />

        {/* /lea 관련 하위 경로 */}
        <Route path="/lea/*" element={<LeaApp />} />

        {/* /tetra 관련 하위 경로 */}
        <Route path="/tetra/*" element={<TetraApp />} />
      </Routes>

      <footer>
        ※ 해당 웹페이지는 공식 홈페이지를 참고한 팬페이지로 저작권은 사이퍼즈에게 있습니다.<br /><br />
        &copy; 2011 NEOPLE Inc. All Rights Reserved.
      </footer>
    </Router>
  );
}