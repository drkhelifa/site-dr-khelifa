import React, { useState } from 'react';
import { Phone, MapPin, Clock, ExternalLink, Send, Calendar, User, FileText } from 'lucide-react';
import { CONTACT_INFO, HORAIRES } from '../constants';
import { useLanguage } from '../components/Layout';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, date, reason } = formData;
    
    // Construct message
    const message = lang === 'fr' 
      ? `Bonjour Dr Khelifa, je souhaite prendre RDV.%0A%0A👤 *Nom:* ${name}%0A📱 *Tel:* ${phone}%0A📅 *Date souhaitée:* ${date}%0A📝 *Motif:* ${reason}`
      : `مرحبا دكتور خليفة، أرغب في حجز موعد.%0A%0A👤 *الاسم:* ${name}%0A📱 *الهاتف:* ${phone}%0A📅 *التاريخ المفضل:* ${date}%0A📝 *السبب:* ${reason}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappFull}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO titleKey="contactTitle" descriptionKey="contactSubtitle" />
      <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl font-bold text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>{t.contactTitle}</h1>
          <p className="mt-4 text-xl text-slate-500">
            {t.contactSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Info Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className={`text-2xl font-bold text-primary mb-6 ${!isRTL && 'font-serif'}`}>{t.coordsTitle}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                   <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-full">
                     <MapPin className="w-6 h-6 text-secondary" />
                   </div>
                   <div className={isRTL ? 'mr-4' : 'ml-4'}>
                     <h3 className="text-lg font-medium text-primary">{t.addressLabel}</h3>
                     <p className="text-slate-600 mt-1">
                       {CONTACT_INFO.address[lang]}<br />
                       {CONTACT_INFO.city[lang]}
                     </p>
                     <a 
                      href={CONTACT_INFO.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-secondary hover:text-emerald-700 font-medium"
                     >
                       {t.mapsLabel} <ExternalLink className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
                     </a>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-full">
                     <Phone className="w-6 h-6 text-secondary" />
                   </div>
                   <div className={isRTL ? 'mr-4' : 'ml-4'}>
                     <h3 className="text-lg font-medium text-primary">{t.phoneLabel}</h3>
                     <p className="text-slate-600 mt-1 text-lg font-semibold" dir="ltr">
                       {CONTACT_INFO.phone}
                     </p>
                     <p className="text-sm text-slate-400 mt-1">
                       {t.phoneNote}
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* Horaires Section - Enhanced */}
            <div className="bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
               
              <div className="flex items-center mb-6 relative z-10">
                 <div className={`p-2 bg-white/10 rounded-lg ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <Clock className="w-6 h-6 text-secondary" />
                 </div>
                 <div>
                    <h2 className={`text-2xl font-bold ${!isRTL && 'font-serif'}`}>{t.scheduleTitle}</h2>
                    <p className="text-slate-400 text-sm">Dr Khelifa.K.H</p>
                 </div>
              </div>
              
              <div className="space-y-1 relative z-10">
                {HORAIRES.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-0">
                    <span className="font-medium text-slate-200 w-1/3">{item.day[lang]}</span>
                    <span className={`flex-1 ${isRTL ? 'text-left' : 'text-right'} font-mono ${item.hours[lang] === 'Fermé' || item.hours[lang] === 'مغلق' ? 'text-red-400' : 'text-secondary'}`}>
                        {item.hours[lang]}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-700 text-center text-sm text-slate-400 relative z-10">
                <p>{t.scheduleNote}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="bg-slate-200 rounded-xl overflow-hidden shadow-sm h-full min-h-[400px] relative">
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center flex-col p-8 text-center bg-[url('https://picsum.photos/seed/maptexture/800/800')] bg-cover bg-blend-overlay">
              <div className="bg-white/90 p-8 rounded-xl backdrop-blur-sm max-w-sm shadow-xl">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{t.locationTitle}</h3>
                <p className="text-slate-600 mb-6">{CONTACT_INFO.address[lang]}<br/>{CONTACT_INFO.city[lang]}</p>
                <a 
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block bg-primary text-white py-3 px-6 rounded-md hover:bg-slate-800 transition-colors font-medium shadow-md"
                >
                  {t.gpsBtn}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="rdv-form" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-emerald-600 p-6 sm:p-10 text-white text-center">
              <h2 className={`text-2xl font-bold sm:text-3xl ${!isRTL && 'font-serif'}`}>{t.formTitle}</h2>
              <p className="mt-2 text-emerald-100">{t.formSubtitle}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.formNameLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder={t.formNamePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{t.formPhoneLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder={t.formPhonePlaceholder}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">{t.formDateLabel}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder={t.formDatePlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">{t.formReasonLabel}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none text-slate-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    value={formData.reason}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder={t.formReasonPlaceholder}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.formSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;