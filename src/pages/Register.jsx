import React from 'react';
import RegisterForm from '../features/auth/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Brand Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#101c2c]">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join the <span className="text-[#d9bd7a] font-bold">AhNayZ</span> community today.
          </p>
        </div>

        {/* The Core Registration Form Component */}
        <RegisterForm />

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#d9bd7a] font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;