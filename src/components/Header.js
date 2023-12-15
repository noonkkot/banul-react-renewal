import React, { useState } from 'react';

function SubMenuItem({ label }) {
  return <li><a href="#">{label}</a></li>;
}

function SubMenu({ subMenuItems }) {
  return (
    <ul>
      {subMenuItems.map((item, index) => (
        <SubMenuItem key={index} label={item} />
      ))}
    </ul>
  );
}

function Header() {
  const menuItems = [
    { label: '바늘웨어', subMenuItems: [''] },
    { label: '실', subMenuItems: ['브랜드별', '용도별', '소재별', '바늘두께'] },
    { label: '패키지', subMenuItems: ['왕초보', '초중급', '고급', '전체 동영상 패키지', '의류', '가방', '악세사리', '소품'] },
    { label: '도서', subMenuItems: ['국내도서', '일본도서', '유럽도서'] },
    { label: '바늘/도구', subMenuItems: ['바늘', '브랜드별', '방울도구/실감기', '태팅셔틀/태팅도구', '인형도구/부자재'] },
    { label: '부자재', subMenuItems: ['아플리케/브로치', '나무/모자챙/고무줄', '기념일', '금속부자재', '가방부자재/프레임', '꽃술/비즈/원석/장식', '태그/라벨/와펜', '리본/테이프/레이스', '지퍼/지퍼고리/참', '줄자/가위/반짇고리', '인형부자재'] },
    { label: '단추', subMenuItems: ['모양/재질별', '크기별'] },
    { label: '수편기', subMenuItems: ['SILVER 수편기', 'SILVER 부속품', '편물책&펀치카드', '개별 결제'] },
    { label: '알뜰마켓', subMenuItems: ['실', '콘사', '패키지', '도서', '단추/부자재/바늘'] },
    { label: '아카데미', subMenuItems: [''] },
  ];

  const [hoveredMenuId, setHoveredMenuId] = useState(null);

  return (
    
    <div id="header">
      <h1 className="hd_logo">
        <a href="https://www.banul.co.kr/">
          <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="바늘이야기 로고" />
        </a>
      </h1>
      <div className="hd_search">
        <div className="hd_search_box"></div>
      </div>
      <div className="hd_nav"> 
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} className="hd_menu" onMouseEnter={() => setHoveredMenuId(index)} onMouseLeave={() => setHoveredMenuId(null)}>
            <a href="#">{menuItem.label}</a>
            {hoveredMenuId === index && menuItem.subMenuItems.length > 0 && <SubMenu subMenuItems={menuItem.subMenuItems} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;