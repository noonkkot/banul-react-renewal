import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const handleGoTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const faElements = <FontAwesomeIcon icon={faChevronUp} />
  const customData = [
    {title: '회사소개', url: 'https://www.banul.co.kr/shop/page.html?id=16'},
    {title: '이용약관', url: 'http://www.banul.co.kr/html/join_terms.html'},
    {title: '개인정보처리방침', url: 'https://www.banul.co.kr/html/privacy.html'},
    {title: '이용안내', url: 'https://www.banul.co.kr/html/info.html'},
    {title: '견적문의', url: 'https://www.banul.co.kr/board/board.html?code=banulfren_board4'}
  ]
  const infoData = [
    {
      title: '(주) 바늘이야기',
      ceo: '대표자: 송영예',
      privacyManager: '개인정보관리책임자: 송학철',
      email: '대표메일: info@banul.co.kr',
      address1: '주소: (파주본사) 경기도 파주시 탄현면 법흥로 100-1',
      address2: '(연희직영) 서울특별시 서대문구 연희로11가길 15',
      address3: '(물류) 경기도 파주시 검산로 150',
      companyName: '상호명: (주)바늘이야기',
      businessNumber: '사업자번호: 674-88-00100 [사업자정보확인]',
      commerceReportNumber: '통신판매신고번호: 경기파주-0348호',
      hostingCompany: '호스팅사업자: 코리아센터닷컴',
    },
    {
      title: '고객센터',
      phoneNumber: '1544-1334',
      faxNumber: 'FAX. 02-6919-1426',
      officeHours: '평일: AM 09:00 - PM 17:00',
      lunchTime: '(점심: PM 12:00 - PM 13:00)',
      holidayNotice: '(고객센터) 토/일/공휴일 휴무',
    },
    {
      title: '계좌정보',
      bankInfo1: '국민은행',
      account1: '국민: 498101-01-268463',
      bankInfo2: '기업: 000-1544-1334',
      bankInfo3: '농협: 301-0177-4358-71',
      accountHolder: '예금주: (주)바늘이야기',
    },
  ];
  

  return (
    <>
      <div className='ft_go_top'>
        <button onClick={handleGoTopClick}><div>{faElements}</div></button>
      </div>
      <div className='ft_banul_bbs'>

      </div>
      <div className='ft_banul_custom'>
        <ul className='info-box'>
          {customData.map((custom, index) => (
            <li key={index}><a href={custom.url}>{custom.title}</a></li>
          ))}
        </ul>
      </div>
      <div className='ft_banul_info'>
        {infoData.map((info, index) => (
          <div key={index} className='info-box'>
            {Object.values(info).map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Footer;