import { useParams } from 'react-router-dom';

export default function AssetDetail() {
  const { id } = useParams();
  const coin = cryptoData.find(c => c.id === id);

  if (!coin) return <div className="p-8">Asset not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{coin.name} Price</h1>
        <div className="text-2xl text-gray-600 mb-8">{coin.symbol} • {coin.price}</div>
        <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-300">
          Chart Placeholder (Real-time data simulation)
        </div>
      </div>
      <div className="border border-gray-100 p-6 rounded-xl shadow-sm h-fit">
        <h3 className="font-bold mb-4 text-xl">Buy {coin.name}</h3>
        <input type="number" placeholder="0.00" className="w-full border p-3 rounded mb-4" />
        <button className="w-full bg-blue-600 text-white py-3 rounded-sm font-bold">Buy Now</button>
      </div>
    </div>
  );
}