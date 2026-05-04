import { Link } from 'react-router-dom';

export default function CryptoRow({ crypto, rank }) {
  const changeValue = crypto.change24h || 0;
  const changeColor = changeValue >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <Link
      to={`/asset/${crypto._id || crypto.id}`}
      className="grid grid-cols-6 gap-4 p-4 border-b items-center hover:bg-gray-50 transition px-4"
    >
      {/* 1. Rank */}
      <span className="text-gray-500">#{rank || crypto.rank}</span>

      {/* 2. Name & Symbol */}
      <div className="flex flex-col">
        <span className="font-bold text-gray-900">{crypto.name}</span>
        <span className="text-xs uppercase text-gray-400">{crypto.symbol}</span>
      </div>

      {/* 3. Price (Right Aligned) */}
      <span className="text-right font-medium">£{crypto.price?.toLocaleString()}</span>

      {/* 4. Change (Right Aligned) */}
      <span className={`text-right font-medium ${changeColor}`}>
        {changeValue > 0 ? '+' : ''}{changeValue}%
      </span>

      {/* 5. Market Cap (Right Aligned) */}
      <span className="text-right text-gray-600">
        {crypto.marketCap || '---'}
      </span>

      {/* 6. Trade Button (Right Aligned) */}
      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition">
          Buy
        </button>
      </div>
    </Link>
  );
}