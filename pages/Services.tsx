import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { Check } from 'lucide-react';
import { useLanguage } from '../components/Layout';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO titleKey="servicesTitle" descriptionKey="servicesSubtitle" />
       <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl font-bold text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>{t.servicesTitle}</h1>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group">
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title[lang]}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description[lang]}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-500">
                        <Check className={`w-4 h-4 text-secondary shrink-0 mt-0.5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {detail[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className={`text-2xl font-bold text-primary text-center mb-12 ${!isRTL && 'font-serif'}`}>{t.processTitle}</h2>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center relative hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                 <h3 className="font-bold text-lg mb-2">{t.processStep1Title}</h3>
                 <p className="text-sm text-slate-600">{t.processStep1Desc}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center relative hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                 <h3 className="font-bold text-lg mb-2">{t.processStep2Title}</h3>
                 <p className="text-sm text-slate-600">{t.processStep2Desc}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center relative hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                 <h3 className="font-bold text-lg mb-2">{t.processStep3Title}</h3>
                 <p className="text-sm text-slate-600">{t.processStep3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <Link
              to="/contact#rdv-form"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-slate-800 transition-colors shadow-lg hover:scale-105 transform duration-200"
            >
              {t.whatsappBtn}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;