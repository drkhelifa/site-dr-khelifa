import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../components/Layout';
import { useBlog } from '../context/BlogContext';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';
  
  // Use global state instead of local state
  const { expandedId, toggleExpand } = useBlog();

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO titleKey="blogTitle" descriptionKey="blogSubtitle" />
      <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl font-bold text-primary sm:text-4xl ${!isRTL && 'font-serif'}`}>{t.blogTitle}</h1>
          <p className="mt-4 text-xl text-slate-500">
            {t.blogSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title[lang]} />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div className="flex-1">
                  <div className={`flex items-center text-sm text-secondary mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Tag className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {post.tags.map(tag => (
                      <span key={tag[lang]} className={`px-2 py-0.5 rounded bg-emerald-50 font-medium ${isRTL ? 'ml-2' : 'mr-2'}`}>
                        {tag[lang]}
                      </span>
                    ))}
                  </div>
                  <h3 className={`text-xl font-bold text-primary ${!isRTL && 'font-serif'}`}>
                    {post.title[lang]}
                  </h3>
                  
                  {/* Expanded Content or Excerpt */}
                  <div className={`mt-3 text-base text-slate-500 transition-all duration-300`}>
                    {expandedId === post.id ? (
                      <div className="animate-fade-in space-y-4">
                        <p className="whitespace-pre-line leading-relaxed">{post.content[lang]}</p>
                      </div>
                    ) : (
                       <p className="line-clamp-3 leading-relaxed">{post.excerpt[lang]}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-400">
                    <Calendar className={`flex-shrink-0 h-5 w-5 ${isRTL ? 'ml-1.5' : 'mr-1.5'}`} />
                    <time>{post.date[lang]}</time>
                  </div>
                  
                  <button 
                    onClick={() => toggleExpand(post.id)}
                    className="flex items-center text-primary font-medium hover:text-secondary transition-colors focus:outline-none"
                  >
                    {expandedId === post.id ? t.readLess : t.readMore}
                    {expandedId === post.id ? 
                      <ChevronUp className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} /> : 
                      <ChevronDown className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
                    }
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;