import React, { useState } from 'react';
import { TIPS_LIST } from '../constants';
import { useLanguage } from '../components/Layout';
import { Filter, Star } from 'lucide-react';
import SEO from '../components/SEO';

const Tips: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';
  const [filter, setFilter] = useState<'all' | 'general' | 'stress' | 'sleep' | 'social' | 'habits'>('all');

  const categories = [
    { id: 'all', label: t.tipsCategoryAll },
    { id: 'general', label: t.tipsCategoryGeneral },
    { id: 'stress', label: t.tipsCategoryStress },
    { id: 'sleep', label: t.tipsCategorySleep },
    { id: 'social', label: t.tipsCategorySocial },
    { id: 'habits', label: t.tipsCategoryHabits },
  ];

  const filteredTips = filter === 'all' 
    ? TIPS_LIST 
    : TIPS_LIST.filter(tip => tip.category === filter);

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO titleKey="tipsTitle" descriptionKey="tipsSubtitle" />
      {/* Header */}
      <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl font-bold text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>{t.tipsTitle}</h1>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            {t.tipsSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-100 flex flex-col items-start relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Star className="w-16 h-16 text-secondary" />
               </div>
               <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md mb-3">
                 #{tip.id}
               </span>
               <p className={`text-lg text-primary font-medium leading-relaxed ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                 {tip.content[lang]}
               </p>
            </div>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p>Aucun conseil trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tips;