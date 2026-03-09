import { homeContent } from '../data/homeContent';

export default function Articles() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl"> Featured
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {homeContent.articles.map((article, index) => (
            <a 
              key={index} 
              href={article.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-video">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-3">
                  {article.label}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.description}
                </p>
                
                <div className="mt-auto">
                  <span className="text-blue-600 font-bold inline-flex items-center">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}