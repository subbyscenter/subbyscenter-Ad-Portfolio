
import React from 'react';
import { ReferenceItem, ProdPeriod } from '../types';

interface Props {
  item: ReferenceItem;
}

const ReferenceCard: React.FC<Props> = ({ item }) => {
  const getPeriodStyle = (period: ProdPeriod) => {
    switch (period) {
      case ProdPeriod.SHORT: return 'bg-white/10 text-white border-white/20';
      case ProdPeriod.MEDIUM: return 'bg-white/20 text-white border-white/30';
      case ProdPeriod.LONG: return 'bg-white/30 text-white border-white/40';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/50 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold border ${getPeriodStyle(item.period)}`}>
          제작기간: {item.period}
        </span>
        {item.stats && (
          <span className="text-gray-300 text-[10px] md:text-xs font-semibold">
            <i className="fas fa-chart-line mr-1 text-white/50"></i> {item.stats}
          </span>
        )}
      </div>
      
      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white transition-colors whitespace-pre-line leading-tight">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs md:text-sm mb-5 whitespace-pre-line leading-relaxed flex-grow">
        {item.description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-5">
        {item.tags.map(tag => (
          <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded text-gray-400">
            #{tag}
          </span>
        ))}
      </div>

      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs md:text-sm font-black text-black bg-white hover:bg-gray-200 px-4 py-3 rounded-xl transition-all w-full justify-center text-center active:scale-95"
      >
        <i className={item.type === 'video' ? 'fab fa-youtube' : item.type === 'sns' ? 'fab fa-instagram' : 'fas fa-external-link-alt'}></i>
        {item.ctaText || '레퍼런스 보기'}
      </a>
    </div>
  );
};

export default ReferenceCard;