import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { HERO_BG, TRUST_ICON_1, TRUST_ICON_2, TRUST_ICON_3 } from '../images/assets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Business Meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
            SBS 방송 출연 · 20년 업력
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            SBS가 주목한 20년 마케팅 명가,<br/>
            <span className="text-secondary">드림투유</span>입니다.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            마케팅 사기가 걱정되시나요? 2004년부터 한 길만 걸어온<br className="hidden sm:block" />
            검증된 파트너와 시작하세요. 사장님의 꿈을 현실로 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary hover:bg-yellow-600 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
              무료 마케팅 진단받기 <ChevronRight className="ml-2" />
            </Link>
            <Link to="/cases" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-medium px-8 py-4 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center">
              성공 사례 확인하기
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section - Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">20년</div>
              <p className="text-gray-500 font-medium">한결같은 업력 (Since 2004)</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">5,000+</div>
              <p className="text-gray-500 font-medium">누적 클라이언트</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">90%</div>
              <p className="text-gray-500 font-medium">압도적인 재계약률</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">비즈니스 성장을 위한 핵심 솔루션</h2>
            <p className="text-gray-600">업종과 상황에 딱 맞는 최적의 마케팅 전략을 제안합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6">
                 <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">블로그 & 바이럴</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                진정성 있는 콘텐츠로 맘카페와 커뮤니티 입소문을 유도하여 자연스러운 브랜딩을 구축합니다.
              </p>
              <Link to="/service" className="text-primary font-bold inline-flex items-center hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6">
                 <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">SNS 운영 대행</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                인스타그램, 유튜브 숏폼 기획부터 제작, 계정 육성까지 트렌디한 감각으로 소통합니다.
              </p>
              <Link to="/service" className="text-primary font-bold inline-flex items-center hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6">
                 <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">언론 홍보</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                공신력 있는 메이저 언론사 기사 송출을 통해 브랜드의 신뢰도와 인지도를 동시에 확보합니다.
              </p>
              <Link to="/service" className="text-primary font-bold inline-flex items-center hover:underline">
                자세히 보기 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금, 우리 가게에 필요한 마케팅은 무엇일까요?</h2>
          <p className="text-lg text-blue-100 mb-10">
            고민하지 마세요. 전문가가 직접 진단하고 해결책을 제시해 드립니다.
          </p>
          <Link to="/contact" className="bg-white text-primary text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;