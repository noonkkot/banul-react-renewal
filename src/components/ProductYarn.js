import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const products = [
  {
    image: 'product_yarn01.jpg',
    name: '하이랜드 알파카 부클(Highland Alpaca Boucle)(1볼/100g±10g) 하이랜드울 70%, 알파카 30%',
    sub: '(가을/겨울)가볍고 따뜻하며, 피부에 닿았을 때 부드럽고 폭신한 부클사',
    price: '16,650원',
    url: 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612624&search=%25B8%25AE%25C6%25BC&sort=sellcnt&xcode=117&mcode=000&scode=&GfDT=Z2d3UQ%3D%3D'
  },
  {
    image: 'product_yarn02.jpg',
    name: '유피(Yupi)(1볼/50g±5g) 슈퍼워시울80%, 베이비알파카20%',
    sub: '초특가 상품, 품절시 재입고 X',
    price: '12,800원',
    url: 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612674&search=%25C0%25AF%25C7%25C7&sort=sellcnt&xcode=117&mcode=000&scode=&GfDT=bm5%2FW1w%3D'
  },
  {
    image: 'product_yarn03.jpg',
    name: '푸유(Puyu)(1볼/50g±5g) 베이비알파카70%, 실크30%',
    sub: '에어페루, 필 누아지와 같은 가공법, 가볍고 따뜻한 실',
    price: '14,400원',
    url: 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10612678&search=%25C7%25AA%25C0%25AF&sort=sellcnt&xcode=117&mcode=000&scode=&GfDT=Zmd3UQ%3D%3D'
  },
  {
    image: 'product_yarn04.jpg',
    name: '베지터블(vegetable cotton 100%)(1볼/100g±5g)',
    sub: '(봄/여름)면100%의 고슬고슬하고 깔끔한 봄여름용 튜브사',
    price: '8,000원',
    url: 'https://www.banul.co.kr/shop/shopdetail.html?branduid=10341343&search=%25BA%25A3%25C1%25F6%25C5%25CD%25BA%25ED&sort=sellcnt&xcode=117&mcode=000&scode=&GfDT=a2t3UQ%3D%3D'
  },
];

function ProductYarn() {
  const faElements = <FontAwesomeIcon icon={faCartShopping} />
  return (
    <div className="product_section">
      <h3>새로 나온 실</h3>
      <div className="product_wrapper product_yarn_wrapper">
        <ul className="product_container">
          {products.map((product, index) => (
            <li key={index} >
              <div className="thumb">
                <div>{faElements}</div>
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <img src={process.env.PUBLIC_URL + `images/${product.image}`} alt="바늘이야기 로고"/>
                </a>
              </div>
              <div className="info">
                <div className="prod_name">{product.name}</div>
                <div className="prod_sub">{product.sub}</div>
                <div className="prod_price">{product.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductYarn;