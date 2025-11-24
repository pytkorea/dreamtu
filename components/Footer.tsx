import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
               <span className="text-2xl font-bold text-white tracking-tight">드림투유</span>
            </Link>
            <p className="text-sm leading-relaxed">
              2004년부터 이어온 정직한 마케팅.<br/>
              사장님의 든든한 파트너가 되겠습니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/service" className="hover:text-white transition-colors">바이럴 마케팅</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">SNS 운영 대행</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">브랜드 블로그</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">언론 홍보</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company" className="hover:text-white transition-colors">회사 소개</Link></li>
              <li><Link to="/cases" className="hover:text-white transition-colors">성공 사례</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>대표전화: 02-1234-5678</li>
              <li>이메일: contact@dreamtoyou.com</li>
              <li>주소: 서울특별시 강남구 테헤란로 123 드림타워 10층</li>
              <li>사업자등록번호: 123-45-67890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} DreamToYou. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;