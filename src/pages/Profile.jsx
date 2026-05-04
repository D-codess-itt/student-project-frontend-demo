import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // State for the "Add Crypto" form
  const [cryptoName, setCryptoName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [change24h, setChange24h] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('[https://student-project-backend-production-cdc4.up.railway.app/api/profile](https://student-project-backend-production-cdc4.up.railway.app/api/profile)', {
          method: 'GET',
          credentials: 'include', 
        });

        if (response.status === 401) {
          navigate('/signin');
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError("Could not connect to the server.");
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleAddCrypto = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://student-project-backend-production-cdc4.up.railway.app/api/crypto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cryptoName,
          symbol,
          price: Number(price),
          image,
          change24h: Number(change24h)
        }),
      });

      if (response.ok) {
        alert("Cryptocurrency added successfully!");
        // Clear form
        setCryptoName(''); setSymbol(''); setPrice(''); setImage(''); setChange24h('');
      } else {
        alert("Failed to add crypto.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!userData) return <div className="text-center mt-20 text-gray-500">Loading profile...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 space-y-8">
      {/* User Info Section */}
      <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
          {userData.name.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold">{userData.name}</h1>
        <p className="text-gray-500">{userData.email}</p>
      </div>

      {/* ADMIN FORM: Add New Crypto */}
      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">Add New Cryptocurrency (Admin)</h2>
        <form onSubmit={handleAddCrypto} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Coin Name (e.g. Bitcoin)" className="p-3 border rounded" value={cryptoName} onChange={(e)=>setCryptoName(e.target.value)} required />
          <input type="text" placeholder="Symbol (e.g. BTC)" className="p-3 border rounded" value={symbol} onChange={(e)=>setSymbol(e.target.value)} required />
          <input type="number" placeholder="Price" className="p-3 border rounded" value={price} onChange={(e)=>setPrice(e.target.value)} required />
          <input type="text" placeholder="Image URL" className="p-3 border rounded" value={image} onChange={(e)=>setImage(e.target.value)} required />
          <input type="number" step="0.01" placeholder="24h Change %" className="p-3 border rounded" value={change24h} onChange={(e)=>setChange24h(e.target.value)} required />
          
          <button type="submit" className="md:col-span-2 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
            Add to Database
          </button>
        </form>
      </div>
    </div>
  );
}