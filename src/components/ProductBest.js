import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const bestItems1st= [
  {
    image: 'productbest01.jpg',
    name: '[DIY] 어텀 앙고라 탑다운 후드 니트',
    sub: '(대바늘) 난이도',
    price: '27,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612637&xcode=118&mcode=001&scode=&special=3&GfDT=bGh3UQ%3D%3D'
  },
  {
    image: 'productbest02.jpg',
    name: '[DIY] 홈스펀 숏 비니(동영상)',
    sub: '(대바늘) 난이도',
    price: '11,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10340552&xcode=118&mcode=001&scode=&special=3&GfDT=aWd3UA%3D%3D'
  },
  {
    image: 'productbest03.jpg',
    name: '[DIY] 코튼10 미니 스퀘어 가방(동영상)',
    sub: '(코바늘) 난이도',
    price: '16,400원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=3464759&xcode=118&mcode=001&scode=&special=3&GfDT=bG53Uw%3D%3D'
  },
  {
    image: 'productbest04.jpg',
    name: '[DIY] 도화지 약과 스퀘어 가방(동영상)',
    sub: '(코바늘) 난이도',
    price: '9,100원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612555&xcode=118&mcode=001&scode=&special=3&GfDT=aG13Ug%3D%3D'
  }
];

const bestItems2nd= [
  {
    image: 'productbest05.jpg',
    name: '[DIY] 테디울 키치 브이넥 조끼(동영상)',
    sub: '(대바늘) 난이도',
    price: '22,500원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612644&xcode=118&mcode=001&scode=&special=3&GfDT=bm50W1g%3D'
  },
  {
    image: 'productbest06.jpg',
    name: '[DIY] 코튼 네프코드 네트 스퀘어백(동영상)',
    sub: '(코바늘) 난이도',
    price: '16,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10341225&xcode=118&mcode=001&scode=&special=3&GfDT=amV4'
  },
  {
    image: 'productbest07.jpg',
    name: '[DIY] 버터6 바텀업 베이직 반팔니트(동영상)',
    sub: '(대바늘) 난이도',
    price: '23,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10341249&xcode=118&mcode=001&scode=&special=3&GfDT=bmd3Vw%3D%3D'
  },
  {
    image: 'productbest08.jpg',
    name: '[DIY] 에어리코튼 티타임 블랭킷(동영상)',
    sub: '(코바늘) 난이도',
    price: '56,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10339268&xcode=118&mcode=001&scode=&special=3&GfDT=Zm13Vg%3D%3D'
  },
]

function ProductBest() {
  const faElements = <FontAwesomeIcon icon={faCartShopping} />
  return (
    <div className="product_section">
      <h3>베스트 상품</h3>
      <div className="product_wrapper product_best_wrapper">
        <ul className="product_container">
          {bestItems1st.map((bestItems1st, index) => (
            <li key={index}>
              <div className="thumb">
                <div>{faElements}</div>
                <a href={bestItems1st.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + `images/${bestItems1st.image}`}
                    alt="바늘이야기 로고"
                  />
                </a>
              </div>
              <div className="info">
                <div className="prod_name">{ bestItems1st.name}</div>
                <div className="prod_sub">{ bestItems1st.sub}</div>
                <div className="prod_price">{ bestItems1st.price}</div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="product_container">
          {bestItems2nd.map((bestItems2nd, index) => (
            <li key={index}>
              <div className="thumb">
              <div>{faElements}</div>
              <a href={bestItems2nd.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + `images/${bestItems2nd.image}`}
                    alt="바늘이야기 로고"
                  />
                </a>
              </div>
              <div className="info">
                <div className="prod_name">{ bestItems2nd.name}</div>
                <div className="prod_sub">{ bestItems2nd.sub}</div>
                <div className="prod_price">{ bestItems2nd.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductBest;