import lea from '../img/character/eclipse/lea.png';

export default function Header() {
    // <div className="char04">
  return (
    <header>
      <div style={{background: `url(${lea}) no-repeat 50% 0`, backgroundPosition:'calc(50% + 250px) 30px'}}>
        <h1>
          <b>CYP. 입자 능력자</b>
          <span>
            직관의<em>테트라</em>
          </span>
        </h1>
        <h2>연관 캐릭터</h2>
        <p className="lst_char">
          <a href="#">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char53.png" alt="루드빅" />
            <em>루드빅</em>
          </a>
        </p>
      </div>
    </header>
  );
}