import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="s_menu">
      <dl>
        <dt className="open">기본정보</dt>
        <dd>
          <NavLink to="/lea/ability" className={({ isActive }) => (isActive ? "sel" : "")}>
            능력 및 활용
          </NavLink>
          <NavLink to="/lea/skill" className={({ isActive }) => (isActive ? "sel" : "")}>
            스킬
          </NavLink>
        </dd>
        <dt className="open">스토리</dt>
        <dd>
          <a href="#">ESPER 보고서</a>
          <a href="#">관련문서</a>
        </dd>
        <dt className="open">미디어</dt>
        <dd>
          <a href="#">콘텐츠</a>
          <a href="#">보이스</a>
        </dd>
      </dl>
    </section>
  );
}