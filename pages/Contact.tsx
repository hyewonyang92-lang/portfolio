import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-[70vh] pt-48 pb-20 flex items-start bg-white">
      <div className="w-full">
        <div className="space-y-12">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Email</p>
            <a 
              href="mailto:dreaming903@naver.com" 
              className="text-xl md:text-3xl font-bold hover:text-gray-400 transition-colors tracking-tighter block"
            >
              dreaming903@naver.com
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Phone</p>
            <p className="text-xl md:text-3xl font-bold tracking-tighter">
              +82 10 4635 5232
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;