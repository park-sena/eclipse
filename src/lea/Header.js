import lea from '../img/character/eclipse/lea.png';

export default function Header() {
    // <div className="char04">
  return (
    <header>
      <div style={{background: `url(${lea}) no-repeat 50% 0`, backgroundPosition:'calc(50% + 250px) 30px'}}>
        <h1>
          <b>CYP. 속도 능력자</b>
          <span>
            치명의<em>레아</em>
          </span>
        </h1>
        <h2>연관 캐릭터</h2>
        <p className="lst_char">
          <a href="#">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char27.png" alt="트릭시" />
            <em>트릭시</em>
          </a>
          <a href="#">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char62.png" alt="시드니" />
            <em>시드니</em>
          </a>
          <a href="#">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char54.png" alt="멜빈" />
            <em>멜빈</em>
          </a>
        </p>
        
        {/* 메인일러 출처 표기 */}
        <span style={{position: 'relative'}}>
          <p style={{position:'absolute', right:'calc(50% - 600px)', top:'320px'}}>ⓒkonghi98</p>
        </span>
        
      </div>
    </header>
  );
}