export default function ArticleCard({ article }) {
  return (
    <div className="group cursor-pointer border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{article.label}</span>
        <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
        <p className="text-gray-600 text-sm mt-3 line-clamp-2">{article.description}</p>
        <a href={article.href} className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
}