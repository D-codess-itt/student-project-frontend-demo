export default function SignIn() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-gray-100 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in to Coinbase</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border p-3 rounded focus:border-blue-600 outline-none" />
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded font-bold mt-4">Sign In</button>
      </form>
    </div>
  );
}