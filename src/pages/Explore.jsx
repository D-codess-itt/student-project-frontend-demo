import { cryptos } from '../data/cryptoData';
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Market Prices</h1>
        <p className="text-gray-500 mt-2">In the past 24 hours, the market is up 2.4%.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-400 text-xs uppercase tracking-widest">
              <th className="py-4 px-2">Name</th>
              <th className="py-4">Price (£)</th>
              <th className="py-4">Change</th>
              <th className="py-4">Market Cap (£)</th>
              <th className="py-4 text-right">Trade</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((coin) => (
              <tr key={coin.id} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                <td className="py-6 px-2 flex items-center">
                  <span className="font-bold text-gray-900 mr-2">{coin.name}</span>
                  <span className="text-gray-400 font-medium">{coin.symbol}</span>
                </td>
                <td className="py-6 font-medium">{coin.price}</td>
                <td className={String(coin.change).startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {coin.change}
                </td>
                <td className="py-6 text-gray-500">{coin.marketCap}</td>
                <td className="py-6 text-right">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition">
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}