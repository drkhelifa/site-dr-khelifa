import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import { useLanguage } from '../components/Layout';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className="bg-white animate-fade-in">
      <SEO titleKey="aboutSubtitle" descriptionKey="aboutP1" />
      {/* Header */}
      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl font-bold text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>{t.aboutTitle}</h1>
          <p className="mt-4 text-xl text-slate-500">{t.aboutSubtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/doctorportrait/800/1000" 
                alt="Dr Khelifa.K.H" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                <p className={`p-8 text-white font-serif text-xl italic ${isRTL ? 'text-right w-full' : ''}`}>
                  {t.imageQuote}
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className={`absolute -z-10 top-4 ${isRTL ? 'right-4' : 'left-4'} w-full h-full bg-secondary/10 rounded-lg transform translate-x-4 translate-y-4`}></div>
          </div>

          {/* Content */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className={`text-2xl font-bold text-primary mb-6 ${!isRTL && 'font-serif'}`}>
              {t.aboutSectionTitle}
            </h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className={`flex-shrink-0 p-3 bg-emerald-100 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t.formationTitle}</h3>
                  <p className="mt-1 text-slate-500">{t.formationDesc}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`flex-shrink-0 p-3 bg-blue-100 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t.therapyTitle}</h3>
                  <p className="mt-1 text-slate-500">{t.therapyDesc}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`flex-shrink-0 p-3 bg-purple-100 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t.allianceTitle}</h3>
                  <p className="mt-1 text-slate-500">{t.allianceDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;