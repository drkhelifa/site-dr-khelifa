import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ShieldCheck, Heart, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../components/Layout';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="animate-fade-in">
      <SEO /> 
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left rtl:lg:text-right">
                <h1 className={`text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl ${!isRTL && 'font-serif'}`}>
                  <span className="block xl:inline">{t.heroTitle1}</span>{' '}
                  <span className="block text-secondary xl:inline">{t.heroTitle2}</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t.heroDesc}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start rtl:lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/contact#rdv-form"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-emerald-600 md:py-4 md:text-lg transition-all"
                    >
                      {t.whatsappBtn}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 rtl:sm:ml-0 rtl:sm:mr-3">
                    <Link
                      to="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg transition-all"
                    >
                      {t.discoverBtn}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 rtl:lg:right-auto rtl:lg:left-0 lg:w-1/2 bg-slate-100">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://picsum.photos/seed/doctorworkspace/1600/1200"
            alt="Bureau de consultation apaisant"
          />
        </div>
      </section>

      {/* Why Consult Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">{t.whyConsult}</h2>
            <p className={`mt-2 text-3xl leading-8 font-bold tracking-tight text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>
              {t.whyTitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              {t.whyDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-emerald-100 text-secondary mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.expertiseTitle}</h3>
              <p className="text-slate-600">
                {t.expertiseDesc}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.trustTitle}</h3>
              <p className="text-slate-600">
                {t.trustDesc}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.personalTitle}</h3>
              <p className="text-slate-600">
                {t.personalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access / CTA */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className={`text-2xl font-bold text-white ${!isRTL && 'font-serif'}`}>{t.medicalAdviceTitle}</h2>
            <p className="text-slate-300 mt-2">{t.medicalAdviceDesc}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link
               to="/contact#rdv-form"
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-slate-100 transition-colors"
             >
               {t.takeRdv} <Arrow className="ml-2 rtl:ml-0 rtl:mr-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;