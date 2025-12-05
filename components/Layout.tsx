import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, TRANSLATIONS } from '../constants';
import { Language } from '../types';

// Language Context definition
interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: typeof TRANSLATIONS.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fr');
  const location = useLocation();

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'ar' : 'fr');
    setIsMenuOpen(false);
  };

  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  // Scroll handling
  useEffect(() => {
    if (location.hash) {
      // Small timeout to allow content to render
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div 
        className={`flex flex-col min-h-screen bg-slate-50 ${isRTL ? 'font-arabic' : 'font-sans'} text-slate-800`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="flex items-center"><Phone className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" /> {CONTACT_INFO.phone}</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" /> {CONTACT_INFO.city[lang]}</span>
            </div>
            <div>
              <span className="text-slate-300">{t.consultation}</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo / Name */}
              <Link to="/" className="flex flex-col">
                <span className={`text-2xl font-bold text-primary ${!isRTL && 'font-serif'}`}>Dr Khelifa.K.H</span>
                <span className="text-xs text-secondary font-medium tracking-wider uppercase">{t.subtitle}</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-secondary bg-accent'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {item.label[lang]}
                  </Link>
                ))}
                
                {/* Lang Toggle Desktop */}
                <button 
                  onClick={toggleLang}
                  className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-50 text-xs font-bold transition-colors"
                >
                  <Globe className="w-3 h-3" />
                  {lang === 'fr' ? 'العربية' : 'Français'}
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                 <button 
                  onClick={toggleLang}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-xs font-bold"
                >
                  {lang === 'fr' ? 'عربي' : 'FR'}
                </button>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-slate-600 hover:text-primary focus:outline-none"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-4 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'text-secondary bg-accent'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {item.label[lang]}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Floating Appointment Button */}
        <Link
          to="/contact#rdv-form"
          className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-105 animate-bounce-slow"
          aria-label={t.takeRdv}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden sm:inline">{t.takeRdv}</span>
        </Link>

        {/* Footer */}
        <footer className="bg-primary text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className={`text-white text-lg font-bold mb-4 ${!isRTL && 'font-serif'}`}>Dr Khelifa.K.H</h3>
                <p className="text-sm mb-4">
                  {t.footerDesc}
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">{t.footerLinks}</h3>
                <ul className="space-y-2 text-sm">
                  {NAV_ITEMS.map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="hover:text-secondary">{item.label[lang]}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">{t.footerContact}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 shrink-0 text-secondary" />
                    <span>{CONTACT_INFO.address[lang]}<br/>{CONTACT_INFO.city[lang]}</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 shrink-0 text-secondary" />
                    <span>{CONTACT_INFO.phone}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-center text-xs text-slate-400">
              <p>&copy; {new Date().getFullYear()} Dr Khelifa.K.H. {t.footerRights}</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default Layout;