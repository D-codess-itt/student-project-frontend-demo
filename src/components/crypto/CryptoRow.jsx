import { Link } from 'react-router-dom';

export default function CryptoRow({ crypto }) {
  const changeColor = crypto.change >= 0 ? 'text-green-600' : 'text-red-600';
  return (
    <Link
      to={`/asset/${crypto.id}`}
      className="grid grid-cols-5 gap-4 p-4 border-b hover:bg-gray-50 transition"
    >
      <span className="text-gray-500">#{crypto.rank}</span>
      <span className="font-medium">{crypto.name}</span>
      <span className="uppercase text-gray-600">{crypto.symbol}</span>
      <span>${crypto.price.toLocaleString()}</span>
      <span className={changeColor}>{crypto.change > 0 ? '+' : ''}{crypto.change}%</span>
    </Link>
  );
}