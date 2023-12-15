import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const packages = [
  {
    image: 'product_package01.jpg',
    name: '[DIY] 메리노블렌드 배색 탑다운 스웨터',
    sub: '(대바늘) 난이도',
    price: '63,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612650&xcode=142&mcode=003&scode=&type=Y&sort=manual&cur_code=142&GfDT=bmd3UF4%3D'
  },
  {
    image: 'product_package02.jpg',
    name: '[DIY] 어텀 앙고라 베이직 라운드 가디건',
    sub: '(대바늘) 난이도',
    price: '28,400원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612653&xcode=142&mcode=002&scode=&type=Y&sort=manual&cur_code=142&GfDT=aWl3WA%3D%3D'
  },
  {
    image: 'product_package03.jpg',
    name: '[DIY] 테디울 레글런 탑다운 라운드넥 가디건(동영상)',
    sub: '(대바늘) 난이도',
    price: '44,400원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612660&xcode=142&mcode=002&scode=&type=Y&sort=manual&cur_code=142&GfDT=bm11W1o%3D'
  },
  {
    image: 'product_package04.jpg',
    name: '[DIY] 익스플로러 키치 브이넥 조끼(동영상)',
    sub: '(대바늘) 난이도',
    price: '41,000원',
    url : 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612661&xcode=142&mcode=002&scode=&type=Y&sort=manual&cur_code=142&GfDT=Z2p3VA%3D%3D'
  },
];

function ProductPackage() {
  const faElements = <FontAwesomeIcon icon={faCartShopping} />
  return (
    <div className="product_section">
      <h3>새로 나온 패키지</h3>
      <div className="product_wrapper product_package_wrapper">
        <ul className="product_container">
          {packages.map((packages, index) => (
            <li key={index}>
              <div className="thumb">
                <div>{faElements}</div>
                <a href={packages.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + `images/${packages.image}`}
                    alt="바늘이야기 로고"
                  />
                </a>
              </div>
              <div className="info">
                <div className="prod_name">{ packages.name}</div>
                <div className="prod_sub">{ packages.sub}</div>
                <div className="prod_price">{ packages.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductPackage;