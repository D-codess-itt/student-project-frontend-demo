import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../data/homeContent'; 
import Button from '../components/common/Button';

export default function Home() {
  const [liveCryptos, setLiveCryptos] = useState([]);
  const [topGainers, setTopGainers] = useState([]); // Storage for gainers
  const [newListings, setNewListings] = useState([]); // Storage for new coins

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const baseUrl = 'https://student-project-backend-production-e29f.up.railway.app/api/crypto';
        
        // Fetch all 3 at once
        const [resAll, resGainers, resNew] = await Promise.all([
          fetch(`${baseUrl}`),
          fetch(`${baseUrl}/gainers`),
          fetch(`${baseUrl}/new`)
        ]);

        const allData = await resAll.json();
        const gainersData = await resGainers.json();
        const newData = await resNew.json();

        setLiveCryptos(allData);
        setTopGainers(gainersData);
        setNewListings(newData);
      } catch (err) {
        console.error("Connection failed:", err);
      }
    };
    fetchHomeData();
  }, []);
  
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Hello, UK! Meet <br/> Zerobase GB
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Zerobase is the most trusted platform in the UK for buying, selling and trading crypto. <br />Deposit GBP into your account for free to get started today.
            </p>
            <div className="flex space-x-4">
              <Link to="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition">
                Sign up
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <video 
              src="https://static-assets.coinbase.com/marketing/videos/jan_gb_1180_home.webm" 
              alt="Mobile app interface" 
              className="w-64 h-[500px] object-cover rounded-[40px] shadow-2xl border-8 border-gray-50"
            />
          </div>
        </div>
      </section>

      {/* 2. EARN APY SECTION */}
      <section className="bg-white py-12 container mx-auto px-4">
        <div className="bg-black rounded-[40px] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <img data-testid="next-gen-image-img"
              src="https://images.ctfassets.net/o10es7wu5gm1/5eDlqRUVRbu6MEGwBt9qqL/e78c6068e2a205ca275882b6849a499d/Learn_Illustration_What_is_Staking.png" 
            />
           </div>
           <div className="w-full md:w-1/2">
             <h2 className="text-5xl font-bold mb-6">Earn up to 14% APY on your crypto</h2>
             <p className="text-xl text-gray-400 mb-8">Put your crypto to work by staking with Zerobase and earn rewards of up to 14% APY on your holdings.</p>
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition">
               Explore staking options
             </button>
           </div>
        </div>
      </section>

      {/* 3. EXPLORE CRYPTO SECTION (Dark Theme) */}
      <section className="bg-white py-12 container mx-auto px-4">
        <div className="bg-gray-900 rounded-[40px] p-12 md:p-20 text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h2>
            <p className="text-xl text-gray-400 mb-8">Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
            <Link to="/explore" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-block">
              See more assets
            </Link>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400">Top Gainers today</h3>
            
            {topGainers.slice(0, 3).map((coin) => (
              <div key={coin._id} className="flex justify-between items-center border-b border-gray-800 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold">{coin.name}</span>
                  <span className="text-gray-500 text-sm uppercase">{coin.symbol}</span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">£{coin.price?.toLocaleString()}</p>
                  <p className="text-green-400">↗ {coin.change}%</p>
                </div>
              </div>
            ))}
            
            {/* Link to see the full list */}
            <Link to="/explore" className="text-sm text-gray-400 hover:text-white transition">
              View all market movers →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ADVANCED TRADE SECTION */}
      <section className="bg-white py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Get lower, volume-based pricing with Advanced Trade</h2>
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                 <div className="mt-1 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</div>
                 <div>
                   <h4 className="font-bold text-lg">More order types</h4>
                   <p className="text-gray-600">Market, Limit, Stop Limit, and Auction Mode orders.</p>
                 </div>
              </li>
              <li className="flex gap-4">
                 <div className="mt-1 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</div>
                 <div>
                   <h4 className="font-bold text-lg">Powerful trading tools</h4>
                   <p className="text-gray-600">Charts powered by TradingView with EMA, MA, MACD.</p>
                 </div>
              </li>
            </ul>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition">
              Learn more
            </button>
          </div>
          
          <div className="relative flex justify-center">
            <img data-testid="next-gen-image-img"
              src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png?fm=avif&w=2014&h=1612&q=65" 
            />
          </div>
        </div>
      </section>

      {/* 5. Learn the Basics" */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Learn Card -> Links to Learn.jsx */}
          <Link to="/learn" className="group p-10 bg-gray-50 rounded-[40px] hover:bg-blue-50 transition-all duration-300">
            <div className="bg-blue-600 w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-white text-3xl shadow-lg">📖</div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Learn the basics</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              New to crypto? Not for long. Start with these guides and explainers to build your foundation.
            </p>
            <span className="text-blue-600 font-bold text-lg group-hover:translate-x-2 inline-block transition-transform">
              See more crypto basics →
            </span>
          </Link>

          {/* Explore Card -> Links to Explore.jsx */}
          <Link to="/explore" className="group p-10 bg-gray-50 rounded-[40px] hover:bg-blue-50 transition-all duration-300">
            <div className="bg-green-500 w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-white text-3xl shadow-lg">📈</div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Explore more crypto</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Browse real-time prices, market caps, and daily movers for thousands of assets.
            </p>
            <span className="text-blue-600 font-bold text-lg group-hover:translate-x-2 inline-block transition-transform">
              View all assets →
            </span>
          </Link>
        </div>
      </section>

      {/* 6. */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            The most trusted <br /> cryptocurrency exchange
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Millions of users trust us, and so can you. The proof is in our platform.
          </p>
        </div>
      </section>

      {/* 7. articles link */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              
            </div>
            <Link to="/articles" className="text-blue-600 font-bold hover:underline">Learn more</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.articles.slice(0, 4).map((article, index) => (
              <a href={article.href} key={index} className="group block">
                <div className="aspect-video overflow-hidden rounded-2xl mb-4">
                  <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <p className="text-blue-600 text-xs font-bold uppercase mb-2">{article.label}</p>
                <h3 className="font-bold text-xl leading-snug group-hover:text-blue-600 transition">{article.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}