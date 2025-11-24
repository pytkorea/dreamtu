import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Megaphone, PenTool, Smartphone, Monitor } from 'lucide-react';
import { SERVICE_VIRAL, SERVICE_BLOG, SERVICE_PRESS, SERVICE_SNS } from '../images/assets';

const Service: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">매출을 만드는 실전 마케팅</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            보여주기식 마케팅은 하지 않습니다. <br/>
            실질적인 유입과 구매 전환을 일으키는 드림투유만의 전략을 만나보세요.
          </p>
        </div>
      </div>

      {/* Service 1: Viral & Blog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-2 bg-blue-100 rounded-lg text-primary"><PenTool size={24} /></span>
              <span className="font-bold text-primary tracking-wide">BRAND BLOG & VIRAL</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">브랜드 블로그 & 바이럴 마케팅</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              단순 노출만으로는 고객을 설득할 수 없습니다. 
              드림투유는 브랜드의 전문성을 보여주는 고품질 원고와 
              타겟 고객이 모인 커뮤니티 침투를 통해 자연스러운 입소문을 만듭니다.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">전문 작가진의 스토리텔링형 원고 작성</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">지역/업종별 세부 키워드 장악 전략</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">맘카페, 동호회 등 진성 유저 타겟 바이럴</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded hover:bg-blue-900 transition-colors">
              블로그/바이럴 견적 문의
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img src={SERVICE_BLOG} alt="Blog Marketing" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
          </div>
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Service 2: SNS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={SERVICE_SNS} alt="SNS Marketing" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-2 bg-pink-100 rounded-lg text-pink-600"><Smartphone size={24} /></span>
              <span className="font-bold text-pink-600 tracking-wide">SNS MANAGEMENT</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">SNS 운영 대행</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              비주얼이 중요한 시대, 인스타그램과 유튜브는 필수입니다.
              트렌디한 숏폼 기획부터 피드 디자인, 계정 관리까지 
              전담 마케터가 브랜드를 확실하게 각인시킵니다.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">타겟 맞춤형 카드뉴스 및 릴스(Reels) 제작</span>
              </li>
              <li className="flex items-start">
                <Check className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">진성 팔로워 확보 및 댓글 소통 관리</span>
              </li>
              <li className="flex items-start">
                <Check className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">인플루언서 협찬 및 체험단 운영</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded hover:bg-blue-900 transition-colors">
              SNS 운영 견적 문의
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Service 3: Press */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-2 bg-gray-100 rounded-lg text-gray-800"><Megaphone size={24} /></span>
              <span className="font-bold text-gray-800 tracking-wide">PRESS PR</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">언론 홍보 (보도자료)</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              브랜드의 신제품 출시, 수상 소식, 이벤트 등을 공신력 있는 언론사를 통해 알리세요.
              포털 사이트 뉴스 탭 노출로 브랜드의 신뢰도를 급상승시킵니다.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">메이저 언론사 및 업종별 전문지 송출</span>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">전문 기자의 보도자료 초안 작성 및 감수</span>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">포털 뉴스 검색 노출 최적화</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded hover:bg-blue-900 transition-colors">
              언론 홍보 견적 문의
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img src={SERVICE_PRESS} alt="Press Release" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;