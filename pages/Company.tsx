import React from 'react';
import { COMPANY_CEO, COMPANY_OFFICE } from '../images/assets';

const Company: React.FC = () => {
  return (
    <div className="bg-white">
      {/* CEO Message */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src={COMPANY_CEO} 
                alt="CEO Portrait" 
                className="w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-lg">김 드림</p>
                <p className="text-sm opacity-80">드림투유 대표이사</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">"반짝하고 사라지는 대행사가 아닙니다.<br/>사장님의 평생 파트너가 되겠습니다."</h2>
            <div className="space-y-6 text-gray-700 leading-loose">
              <p>
                안녕하십니까, 드림투유 대표 김드림입니다.
                지난 20년간 수많은 클라이언트 분들을 만나며 제가 깨달은 한 가지 진리가 있습니다.
                바로 <strong>'마케팅에 요행은 없다'</strong>는 것입니다.
              </p>
              <p>
                화려한 말발로 계약만 따내고 연락이 두절되는 업체,
                의미 없는 트래픽만 늘려놓고 성과라고 포장하는 업체들에게 지치셨습니까?
                드림투유는 다릅니다. 우리는 사장님의 소중한 예산을 내 돈처럼 생각하며,
                실질적인 매출로 이어지는 전략만을 고집해왔습니다.
              </p>
              <p>
                SBS 방송 출연과 5,000여 건의 성공 사례는 하루아침에 만들어진 것이 아닙니다.
                정직과 성실, 그리고 실력으로 증명해온 20년의 시간입니다.
                이제 사장님의 성공 스토리를 함께 써내려 가고 싶습니다.
              </p>
            </div>
            <div className="mt-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-16 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Office Visual */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img src={COMPANY_OFFICE} alt="Office" className="w-full h-full object-cover fixed-bg" />
      </div>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">History</h2>
            <p className="text-gray-500 mt-2">드림투유가 걸어온 길</p>
          </div>
          
          <div className="relative border-l-2 border-primary/30 ml-6 md:ml-0 space-y-12">
            
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="absolute -left-[9px] top-0 md:top-auto md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                <h3 className="text-xl font-bold text-secondary">2023 - 현재</h3>
              </div>
              <div className="md:w-1/2 md:pl-12 pl-8 pt-2 md:pt-0">
                <ul className="text-gray-600 space-y-1">
                  <li>누적 클라이언트 5,000사 돌파</li>
                  <li>올해의 우수 브랜드 대상 수상 (마케팅 부문)</li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="absolute -left-[9px] top-0 md:top-auto md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-gray-400 border-4 border-white shadow"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                <h3 className="text-xl font-bold text-gray-800">2015 - 2022</h3>
              </div>
              <div className="md:w-1/2 md:pl-12 pl-8 pt-2 md:pt-0">
                <ul className="text-gray-600 space-y-1">
                  <li>법인 전환 및 사옥 확장 이전</li>
                  <li>SBS '성공의 정석' 방송 출연</li>
                  <li>구글/메타(페이스북) 공식 파트너사 선정</li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="absolute -left-[9px] top-0 md:top-auto md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-gray-400 border-4 border-white shadow"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                <h3 className="text-xl font-bold text-gray-800">2004 - 2014</h3>
              </div>
              <div className="md:w-1/2 md:pl-12 pl-8 pt-2 md:pt-0">
                <ul className="text-gray-600 space-y-1">
                  <li>드림투유 설립</li>
                  <li>온라인 바이럴 마케팅 팀 신설</li>
                  <li>소상공인 진흥원 컨설팅 지정 업체 선정</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-12">드림투유의 3가지 약속</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 rounded-lg text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4">투명한 리포트</h3>
            <p className="text-gray-600">광고비가 어디에 어떻게 쓰였는지, 1원 단위까지 투명하게 공개하고 성과를 보고합니다.</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-lg text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4">불필요한 비용 절감</h3>
            <p className="text-gray-600">효과 없는 채널은 과감히 제하고, 가장 효율이 좋은 채널에 집중하여 예산을 아껴드립니다.</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-lg text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4">성과 중심 실행</h3>
            <p className="text-gray-600">단순 노출이 목적이 아닙니다. 실제 문의와 매출로 이어지는 '전환'에 집중합니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;