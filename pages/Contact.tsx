import React, { useState } from 'react';
import { CONTACT_BG } from '../images/assets';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    phone: '',
    industry: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    alert('무료 진단 신청이 완료되었습니다. 담당자가 24시간 이내에 연락드리겠습니다.');
    console.log('Form Data:', formData);
    setFormData({
      companyName: '',
      name: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="relative h-64 md:h-80 bg-primary">
         <img src={CONTACT_BG} alt="Contact Support" className="w-full h-full object-cover mix-blend-overlay opacity-50" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">검증된 전문가에게 무료 상담 받으세요</h1>
               <p className="text-lg opacity-90">현재 마케팅 상태를 무료로 진단해 드립니다. 부담 없이 신청하세요.</p>
            </div>
         </div>
      </div>

      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">업체명</label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="예) 드림식당"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">담당자 성함</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="예) 홍길동"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="예) 010-1234-5678"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">업종 (선택)</label>
                <select
                  name="industry"
                  id="industry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">선택해주세요</option>
                  <option value="요식업">요식업</option>
                  <option value="뷰티/미용">뷰티/미용</option>
                  <option value="쇼핑몰">쇼핑몰/전자상거래</option>
                  <option value="전문직">전문직(법률/의료/세무 등)</option>
                  <option value="교육">학원/교육</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">고민 사항 및 문의 내용</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="현재 겪고 계신 마케팅 어려움이나 궁금한 점을 자유롭게 적어주세요."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                무료 진단 신청하기
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                보내주신 정보는 상담 목적으로만 활용되며 외부로 유출되지 않습니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;