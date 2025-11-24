import React, { useState } from 'react';
import { CASE_RESTAURANT, CASE_BEAUTY, CASE_SHOPPING } from '../images/assets';

interface CaseItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  result: string;
  image: string;
}

const casesData: CaseItem[] = [
  {
    id: 1,
    category: '요식업',
    title: '폐업 위기 맛집, 3개월 만에 웨이팅 줄 세우다',
    desc: '맛은 있지만 홍보 부족으로 고전하던 강남의 한 파스타집. 지역 키워드 점유와 인스타그램 비주얼 마케팅으로 2030 유입을 폭발시켰습니다.',
    result: '매출 350% 상승',
    image: CASE_RESTAURANT
  },
  {
    id: 2,
    category: '뷰티/미용',
    title: '신규 오픈 네일샵, 예약률 200% 달성',
    desc: '경쟁이 치열한 홍대 상권. 오픈 전부터 체험단을 모집하여 리뷰를 쌓고, 네이버 지도 순위 최적화를 통해 신규 고객을 확보했습니다.',
    result: '오픈 1개월 만에 예약 마감',
    image: CASE_BEAUTY
  },
  {
    id: 3,
    category: '쇼핑몰',
    title: '스마트스토어 유입 0명에서 월 매출 3천만원',
    desc: '생활용품 스토어. 상세페이지 기획부터 다시 시작하여 전환율을 높이고, 정밀 타겟 광고와 블로그 체험단으로 유입을 극대화했습니다.',
    result: 'ROAS 800% 달성',
    image: CASE_SHOPPING
  },
  {
    id: 4,
    category: '요식업',
    title: '동네 카페, 디저트 배달 맛집 랭킹 1위 등극',
    desc: '배달 앱 깃발 꽂기 전략 컨설팅과 리뷰 이벤트 배너 디자인, 맘카페 바이럴을 동시에 진행하여 지역 내 입지를 굳혔습니다.',
    result: '배달 주문 건수 5배 증가',
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
  },
];

const categories = ['전체', '요식업', '뷰티/미용', '쇼핑몰'];

const Cases: React.FC = () => {
  const [filter, setFilter] = useState('전체');

  const filteredCases = filter === '전체' 
    ? casesData 
    : casesData.filter(c => c.category === filter);

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">사장님들의 성공이 드림투유의 자산입니다</h1>
          <p className="text-blue-100">수많은 성공 데이터가 증명합니다. 다음 성공의 주인공은 바로 사장님입니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-secondary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 h-14">
                  {item.title}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-secondary font-bold text-sm bg-yellow-50 px-2 py-1 rounded">
                    성과: {item.result}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;