import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CryptoRow from '../components/crypto/CryptoRow'; // Import your row component

export default function Explore() {
  const [cryptos, setCryptos] = useState([]); // Start with an empty list
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('https://student-project-backend-production-e29f.up.railway.app/api/crypto');
        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch:", error);
        setLoading(false);
      }
    };
    fetchCryptos();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Market Prices...</div>;

return (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="mb-10">
      <h1 className="text-4xl font-bold">Market Prices</h1>
      <p className="text-gray-500 mt-2">Real-time data.</p>
    </div>

    {/* Header Row - Using Grid to match CryptoRow */}
    <div className="grid grid-cols-6 gap-4 border-b pb-4 text-gray-400 text-xs uppercase tracking-widest font-semibold px-4">
      <span>#</span>
      <span>Name</span>
      <span className="text-right">Price (£)</span>
      <span className="text-right">Change</span>
      <span className="text-right">Market Cap</span>
      <span className="text-right">Trade</span>
    </div>

    {/* Data Rows */}
    <div className="divide-y divide-gray-100">
      {cryptos.map((coin, index) => (
        <CryptoRow key={coin._id || index} crypto={coin} rank={index + 1} />
      ))}
    </div>
  </div>
);
}