import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div style={{ backgroundColor: '#dc2626', color: 'white', textAlign: 'center', padding: '8px', fontWeight: 'bold' }}>
      ⚠️ STUDENT PROJECT DEMO: This is not the real Coinbase. Do not enter real financial information.</div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LEFT: Logo & Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-blue-600 text-2xl font-black tracking-tighter">
            zerobase
          </Link>

          <ul className="hidden lg:flex space-x-6 text-sm font-semibold text-gray-700">
            <li><Link to="/explore" className="hover:text-blue-600">Explore</Link></li>
            
            {/* Individuals */}
            <li className="group pb-4 -mb-4 relative">
              <button className="hover:text-blue-600 focus:outline-none">Individuals</button>
              <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 hidden group-hover:flex space-x-8 z-50">
                <div className="flex-1 space-y-4">
                  <Link to="/signup" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Buy and sell</h4>
                    <p className="text-gray-500 font-normal text-sm">Buy, sell, and use crypto</p>
                  </Link>
                  <Link to="/earn" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Earn</h4>
                    <p className="text-gray-500 font-normal text-sm">Stake your crypto and earn rewards</p>
                  </Link>
                </div>
                <div className="flex-1 space-y-4">
                  <Link to="/wallet" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Base App</h4>
                    <p className="text-gray-500 font-normal text-sm">Post, earn, trade, and chat, all in one place</p>
                  </Link>
                  <Link to="/one" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Zerobase One</h4>
                    <p className="text-gray-500 font-normal text-sm">Get zero trading fees and more</p>
                  </Link>
                </div>
                <div className="w-1/3 bg-white-600 rounded-xl p-6 flex flex-col justify-center text-black text-center">
                    <img data-testid="next-gen-image-img"
              src="https://static-assets.coinbase.com/marketing/2025-q4-event/navigation-upsell.png" />
                  <h4 className="font-bold mb-2">System Update 2025</h4>
                  <p className="text-sm opacity-90 underline cursor-pointer">Learn more</p>
                </div>
              </div>
            </li>

            {/* Businesses */}
            <li className="group pb-4 -mb-4 relative">
              <button className="hover:text-blue-600 focus:outline-none">Businesses</button>
              <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 hidden group-hover:flex space-x-8 z-50">
                <div className="flex-1 space-y-4">
                  <Link to="/business" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Business</h4>
                    <p className="text-gray-500 font-normal text-sm">Crypto trading and payments for startups and SMBs</p>
                  </Link>
                  <Link to="/payments" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Payments</h4>
                    <p className="text-gray-500 font-normal text-sm">The stablecoin payments stack for commerce platforms</p>
                  </Link>
                </div>
                <div className="flex-1 space-y-4">
                  <Link to="/listings" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Asset Listings</h4>
                    <p className="text-gray-500 font-normal text-sm">The platform for token distributions, vesting, and lockups</p>
                  </Link>
                  <Link to="/tokenmanager" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Token Manager</h4>
                    <p className="text-gray-500 font-normal text-sm">Get zero trading fees and more</p>
                  </Link>
                </div>
                <div className="w-1/3 bg-white-600 rounded-xl p-6 flex flex-col justify-center text-black text-center">
                    <img data-testid="next-gen-image-img"
              src="https://static-assets.coinbase.com/growth/acquisition/global-nav/onchain_payment_protocol.png" />
                  <h4 className="font-bold mb-2">Commerce Payments Protocol</h4>
                  <p className="text-sm opacity-90 underline cursor-pointer">Go to Payments</p>
                </div>
              </div>
            </li>

            {/* Institutions */}
            <li className="group pb-4 -mb-4 relative">
              <button className="hover:text-blue-600 focus:outline-none">Institutions</button>
              <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 hidden group-hover:flex space-x-8 z-50">
                <div className="flex-1 space-y-4">
                  <Link to="/financing" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Trading and Financing</h4>
                    <p className="text-gray-500 font-normal text-sm">Professional prime brokerage services</p>
                  </Link>
                  <Link to="/custody" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Custody</h4>
                    <p className="text-gray-500 font-normal text-sm">Securely store all your digital assets</p>
                  </Link>
                </div>
                <div className="flex-1 space-y-4">
                  <Link to="/exchange" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Exchange</h4>
                    <p className="text-gray-500 font-normal text-sm">Spot markets for high-frequency trading</p>
                  </Link>
                  <Link to="/int-exchange" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">International Exchange</h4>
                    <p className="text-gray-500 font-normal text-sm">Access perpetual futures markets</p>
                  </Link>
                </div>
                <div className="w-1/3 bg-white-600 rounded-xl p-6 flex flex-col justify-center text-black text-center">
                    <img data-testid="next-gen-image-img"
              src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png" />
                  <h4 className="font-bold mb-2">Our clients</h4>
                  <p>Trusted by institutions and government</p>
                  <p className="text-sm opacity-90 underline cursor-pointer">Learn more</p>
                </div>
              </div>
            </li>

            {/* Developers */}
            <li className="group pb-4 -mb-4 relative">
              <button className="hover:text-blue-600 focus:outline-none">Developers</button>
              <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 hidden group-hover:flex space-x-8 z-50">
                <div className="flex-1 space-y-4">
                  <Link to="/payments" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Payments</h4>
                    <p className="text-gray-500 font-normal text-sm">Fast and global stablecoin payments with a single integration</p>
                  </Link>
                  <Link to="/trading" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Trading</h4>
                    <p className="text-gray-500 font-normal text-sm">Launch crypto trading and custody for your users</p>
                  </Link>
                </div>
                <div className="flex-1 space-y-4">
                  <Link to="/banks" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Banks & Brokerages</h4>
                    <p className="text-gray-500 font-normal text-sm">Secure, regulated offerings for retail, private banking, & institutional clients</p>
                  </Link>
                  <Link to="/paymentfirms" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Payment Firms</h4>
                    <p className="text-gray-500 font-normal text-sm">Near-instant, low-cost, global payment rails for modern providers</p>
                  </Link>
                </div>
                <div className="w-1/3 bg-white-600 rounded-xl p-6 flex flex-col justify-center text-black text-center">
                    <img data-testid="next-gen-image-img"
              src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg" />
                  <h4 className="font-bold mb-2">World class crypto infrastructure.</h4>
                  <p className="text-sm opacity-90 underline cursor-pointer">Learn more</p>
                </div>
              </div>
            </li>

            {/* Company */}
            <li className="group pb-4 -mb-4 relative">
              <button className="hover:text-blue-600 focus:outline-none">Company</button>
              <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 hidden group-hover:flex space-x-8 z-50">
                <div className="flex-1 space-y-4">
                  <Link to="/about" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">About</h4>
                    <p className="text-gray-500 font-normal text-sm">Powering the crypto economy</p>
                  </Link>
                  <Link to="/careers" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Careers</h4>
                    <p className="text-gray-500 font-normal text-sm">Work with us</p>
                  </Link>
                  <Link to="/support" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Support</h4>
                    <p className="text-gray-500 font-normal text-sm">Find answers to your questions</p>
                  </Link>
                </div>
                <div className="flex-1 space-y-4">
                  <Link to="/blog" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Blog</h4>
                    <p className="text-gray-500 font-normal text-sm">Read the latest from Coinbase</p>
                  </Link>
                  <Link to="/security" className="block p-3 hover:bg-gray-50 rounded-xl transition">
                    <h4 className="font-bold text-gray-900">Security</h4>
                    <p className="text-gray-500 font-normal text-sm">The most trusted & secure</p>
                  </Link>
                </div>
                <div className="w-1/3 bg-white-600 rounded-xl p-6 flex flex-col justify-center text-black text-center">
                    <img data-testid="next-gen-image-img"
              src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png" />
                  <h4 className="font-bold mb-2">Learn all about Zerobase:</h4>
                  <p className="text-sm opacity-90 underline cursor-pointer">Create your account</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT: Search, Globe, Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Globe Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <Link to="/signin" className="hidden lg:block text-sm font-semibold hover:text-blue-600">Sign in</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition">
            Sign up
          </Link>
          
          <Link 
          to="/profile" 
          className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
          Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}