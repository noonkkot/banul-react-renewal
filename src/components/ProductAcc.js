import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const acc = [
  {
    image: 'newproduct01.jpg',
    name: '니팅링(knitting ring) - 밀크 에디션',
    sub: '지구를 생각하는 마음으로 지속가능성을 위해 재활용 플라스틱을 업사이클하여 만든 니팅링 입니다.',
    price: '7,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612682&xcode=120&mcode=000&scode=&special=1&GfDT=amd3UQ%3D%3D'
  },
  {
    image: 'newproduct02.jpg',
    name: '니팅링(knitting ring) - 구름 에디션',
    sub: '지구를 생각하는 마음으로 지속가능성을 위해 재활용 플라스틱을 업사이클하여 만든 니팅링 입니다.',
    price: '7,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612681&xcode=120&mcode=000&scode=&special=1&GfDT=a293UA%3D%3D'
  },
  {
    image: 'newproduct03.jpg',
    name: '김대리의 데일리 뜨개',
    sub: '뜨는 내내 즐겁고 입는 내내 편안한 김대리만의 니트 도안을 만나보세요!',
    price: '21,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612684&xcode=119&mcode=000&scode=&special=1&GfDT=bmp6W14%3D'
  },
  {
    image: 'newproduct04.jpg',
    name: '바늘 줄자',
    sub: '보드랍고 폭신폭신한 느낌에 자꾸만 손이 가게 만드는 예쁜 오렌지 색상의 줄자입니다.',
    price: '5,800원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=3487544&search=%25B9%25D9%25B4%25C3%2B%25C1%25D9%25C0%25DA&sort=sellcnt&xcode=121&mcode=000&scode=&GfDT=bm56W1w%3D'
  },
];

function ProductAcc() {
  const faElements = <FontAwesomeIcon icon={faCartShopping} />
  return (
    <div className="product_section">
      <h3>새로 나온 뜨개 상품</h3>
      <div className="product_wrapper product_acc_wrapper">
        <ul className="product_container">
          {acc.map((acc, index) => (
            <li key={index}>
              <div className="thumb">
              <div>{faElements}</div>
                <a href={acc.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + `images/${acc.image}`}
                    alt="바늘이야기 로고"
                  />
                </a>
              </div>
              <div className="info">
                <div className="prod_name">{ acc.name}</div>
                <div className="prod_sub">{ acc.sub}</div>
                <div className="prod_price">{ acc.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductAcc;