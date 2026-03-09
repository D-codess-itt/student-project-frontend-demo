export default function SignUp() {
  return (
    <div className="max-w-md mx-auto mt-16 p-8 border border-gray-100 rounded-lg shadow-xl mb-20">
      <h2 className="text-2xl font-bold mb-2 text-center">Create your account</h2>
      <p className="text-gray-500 text-center mb-8">Access all that Coinbase has to offer with a single account.</p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First name</label>
            <input type="text" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last name</label>
            <input type="text" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
        </div>

        <div className="flex items-start gap-3 py-2">
          <input type="checkbox" className="mt-1" id="terms" />
          <label htmlFor="terms" className="text-xs text-gray-500">
            I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy.
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded font-bold mt-4 hover:bg-blue-700 transition">
          Create account
        </button>
      </form>
    </div>
  );
}