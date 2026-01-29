import React from 'react';
import { useAuth } from '../features/auth/useAuth';
import Button from '../components/ui/Button';

/**
 * Dashboard page that adapts based on user role.
 * Photographers see earnings and upload stats.
 * Buyers see purchase history and downloads.
 */
const Dashboard = () => {
  const { user, isPhotographer } = useAuth();

  // Mock data for the dashboard
  const stats = isPhotographer 
    ? { label1: 'Total Earnings', val1: '$1,240', label2: 'Photos Sold', val2: '42' }
    : { label1: 'Photos Bought', val1: '12', label2: 'Total Spent', val2: '$280' };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#101c2c]">Welcome back, {user?.name}!</h1>
          <p className="text-gray-500 mt-1">Manage your {isPhotographer ? 'portfolio' : 'collection'} and account settings.</p>
        </div>
        {isPhotographer && (
          <Button variant="primary" onClick={() => window.location.href='/upload'}>
            + Upload New Work
          </Button>
        )}
      </div>

      {/* Stats Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-[#101c2c] text-white rounded-2xl shadow-xl">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{stats.label1}</p>
          <p className="text-3xl font-bold text-[#d9bd7a] mt-2">{stats.val1}</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{stats.label2}</p>
          <p className="text-3xl font-bold text-[#101c2c] mt-2">{stats.val2}</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Account Status</p>
          <p className="text-3xl font-bold text-green-600 mt-2">Active</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-[#101c2c]">
            {isPhotographer ? 'Recent Uploads' : 'Purchase History'}
          </h3>
          <button className="text-sm font-bold text-[#d9bd7a] hover:underline">View All</button>
        </div>
        
        <div className="p-8 text-center py-20">
          <div className="text-4xl mb-4">📂</div>
          <p className="text-gray-500">
            {isPhotographer 
              ? "You haven't uploaded any photos yet." 
              : "You haven't purchased any photos yet."}
          </p>
          <Button variant="outline" className="mt-6" size="sm">
            {isPhotographer ? 'Start Uploading' : 'Browse Marketplace'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;