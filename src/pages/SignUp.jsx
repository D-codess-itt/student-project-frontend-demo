import { useState } from 'react'; // 1. Import hooks
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  // 2. Setup state for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  // 3. The Fetch Request function
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents page reload
    setErrorMessage('');

    const fullName = `${firstName} ${lastName}`; // Combine names for the backend

    try {
      const response = await fetch('https://student-project-backend-production-e29f.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: fullName, 
          email: email, 
          password: password 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully!");
        navigate('/signin'); // Redirect to login page
      } else {
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Network error. Is the backend running?");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border border-gray-100 rounded-lg shadow-xl mb-20">
      <h2 className="text-2xl font-bold mb-2 text-center">Create your account</h2>
      <p className="text-gray-500 text-center mb-8">Access all that Coinbase has to offer with a single account.</p>
      
      {/* Show error message if registration fails */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
          {errorMessage}
        </div>
      )}

      {/* 4. Attach handleRegister to the form */}
      <form className="space-y-4" onSubmit={handleRegister}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First name</label>
            <input 
              type="text" 
              className="w-full border p-3 rounded focus:border-blue-600 outline-none" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last name</label>
            <input 
              type="text" 
              className="w-full border p-3 rounded focus:border-blue-600 outline-none" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="w-full border p-3 rounded focus:border-blue-600 outline-none" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            className="w-full border p-3 rounded focus:border-blue-600 outline-none" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-start gap-3 py-2">
          <input type="checkbox" className="mt-1" id="terms" required />
          <label htmlFor="terms" className="text-xs text-gray-500">
            I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy.
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded font-bold mt-4 hover:bg-blue-700 transition">
          Create account
        </button>
      </form>
    </div>
  );
}