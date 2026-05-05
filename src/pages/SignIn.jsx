import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  // 1. State to hold the user's typed input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // 2. The function that runs when the form is submitted
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setErrorMessage(''); // Clear old errors

    try {
      // 3. THIS IS THE FETCH CALL! 
      // It sends the email and password to your backend
      const response = await fetch('https://student-project-backend-production-e29f.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // CRITICAL: Tells browser to accept the JWT cookie
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login success!", data);
        alert("Success! You are logged in.");
        navigate('/');
      } else {
        // If the backend sends an error (like "wrong password"), show it
        setErrorMessage(data.message || "Failed to log in.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Network error. Is the backend running?");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-gray-100 rounded-lg shadow-xl">
      <div style={{ backgroundColor: '#dc2626', color: 'white', textAlign: 'center', padding: '8px', fontWeight: 'bold' }}>
      ⚠️ Demo only - Do not enter real personal or financial information.</div>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in to Zerobase</h2>
      
      {/* Show error messages if there are any */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Attach the handleLogin function to the form */}
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="w-full border p-3 rounded focus:border-blue-600 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state as they type
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            className="w-full border p-3 rounded focus:border-blue-600 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state as they type
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold mt-4 hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>
    </div>
  );
}