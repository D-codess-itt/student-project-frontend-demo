export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Legal & privacy</li>
              <li>Cookie policy</li>
              <li>Security</li>
              <li>Vendors</li>
              <li>Cookie preferences</li>
              <li>Digital Asset Disclosures</li>
              <li>UK Modern Slavery Statement</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Individuals</h4>
            <ul className="space-y-2">
              <li>Buy & sell</li>
              <li>Base App</li>
              <li>Coinbase One</li>
              <li>Debit Card</li>
              <li>Derivatives</li>
              <li>Token sales</li>
              <li>Savings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Businesses</h4>
            <ul className="space-y-2">
              <li>Asset Listings</li>
              <li>Payments</li>
              <li>Commerce</li>
              <li>Token Manager</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Institutions</h4>
            <ul className="space-y-2">
              <li>Prime</li>
              <li>Staking</li>
              <li>Exchange</li>
              <li>International Exchange</li>
              <li>Verified Pools</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Developers</h4>
            <ul className="space-y-2">
              <li>Developer Platform</li>
              <li>Server Wallets</li>
              <li>Embedded Wallets</li>
              <li>Base</li>
              <li>Base Accounts (Smart Wallets)</li>
              <li>Onramp & Offramp</li>
              <li>x402</li>
              <li>Trade API</li>
              <li>Paymaster</li>
              <li>OnchainKit</li>
              <li>Data API</li>
              <li>Verifications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Asset prices</h4>
            <ul className="space-y-2">
              <li>Bitcoin price</li>
              <li>Ethereum price</li>
              <li>Solana price</li>
              <li>XRP price</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Stock prices</h4>
            <ul className="space-y-2">
              <li>NVIDIA price</li>
              <li>Apple price</li>
              <li>Microsoft price</li>
              <li>Amazon price</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a 
                href="https://help.coinbase.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-blue-600 transition">Help center</a></li>
              <li>Status</li>
              <li>Contact Us</li>
              <li>ID verification</li>
              <li>Account information</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">© 2026 Coinbase Clone. All rights reserved.</div>
        <p style={{ color: 'gray', fontSize: '12px', marginTop: '20px' }}>
          DISCLAIMER: This website is a functional demo created for educational purposes only. It is not affiliated with, endorsed by, or connected to Coinbase. No real transactions occur here.</p>
      </div>
    </footer>
  );
}