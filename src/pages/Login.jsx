import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic - you can expand this with your userService later
    login(formData.email, formData.password, 'photographer'); 
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#101c2c]">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Log in to your AhNayZ account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="name@example.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" /> Remember me
            </label>
            <a href="#" className="text-[#d9bd7a] font-bold hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" variant="primary" className="w-full py-3">
            Sign In
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#d9bd7a] font-bold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;