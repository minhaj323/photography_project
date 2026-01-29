import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const RegisterForm = () => {
  const [role, setRole] = useState('user');
  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    specialization: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Profile Picture selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create local URL for instant preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use FormData for backend to handle both text and files
    const data = new FormData();
    data.append('profilePic', profilePic);
    data.append('role', role);
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    
    console.log("Submitting AhNayZ Registration:", Object.fromEntries(data));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-[#101c2c]">Get Started</h2>
        <p className="text-gray-500 mt-2">Join our photography community</p>
      </div>

      {/* --- Profile Picture Section --- */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#d9bd7a] overflow-hidden bg-gray-50 flex items-center justify-center">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <i className="fas fa-camera text-2xl text-gray-300"></i>
            )}
          </div>
          {/* Overlay for clicking */}
          <label className="absolute inset-0 rounded-full cursor-pointer flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileChange} 
              accept="image/*" 
            />
          </label>
        </div>
        <span className="text-[10px] font-bold text-[#101c2c] uppercase tracking-widest">
          {previewUrl ? 'Change Photo' : 'Upload Profile Pic'}
        </span>
      </div>

      {/* Role Toggle Switch */}
      <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
        <button 
          type="button"
          onClick={() => setRole('user')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            role === 'user' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Buyer
        </button>
        <button 
          type="button"
          onClick={() => setRole('photographer')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            role === 'photographer' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Photographer
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Full Name" name="fullName" placeholder="Enter your name" onChange={handleChange} required />
        <Input label="Email Address" name="email" type="email" placeholder="name@example.com" onChange={handleChange} required />
        <Input label="Password" name="password" type="password" placeholder="••••••••" onChange={handleChange} required />

        {role === 'photographer' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Primary Category</label>
            <select 
              name="specialization"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bd7a] outline-none transition-all"
            >
              <option value="">Select your niche</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
              <option value="commercial">Commercial</option>
              <option value="wildlife">Wildlife</option>
            </select>
          </div>
        )}

        <Button type="submit" className="w-full mt-4">
          Join as {role === 'photographer' ? 'Photographer' : 'Buyer'}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;