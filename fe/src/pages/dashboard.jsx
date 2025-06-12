import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const statCards = [
  {
    label: 'Total Users',
    value: '24,582',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    gradient: 'from-blue-400 to-blue-500',
    change: '+12%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Active Today',
    value: '1,245',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l6-6 4 4 8-8" /></svg>
    ),
    gradient: 'from-green-400 to-green-500',
    change: '+5%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Devices Connected',
    value: '18,932',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
    gradient: 'from-purple-400 to-purple-500',
    change: '+8%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Average Sleep Score',
    value: '85.2',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-1 4V7a1 1 0 00-1-1h-3m-4 0H7a1 1 0 00-1 1v4m0 0v4a1 1 0 001 1h3m4 0h3a1 1 0 001-1v-4" /></svg>
    ),
    gradient: 'from-orange-400 to-orange-500',
    change: '+3%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Average HRV',
    value: '64.8',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    ),
    gradient: 'from-pink-400 to-pink-500',
    change: '+2%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Uptime',
    value: '99.9%',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 7h13l2-7h1" /></svg>
    ),
    gradient: 'from-teal-400 to-teal-500',
    change: '+0.1%',
    changeColor: 'text-green-400',
  },
  {
    label: 'API Usage',
    value: '82.4K',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 008 0m-8 0a4 4 0 018 0m-8 0v-2a4 4 0 018 0v2m-8 0a4 4 0 018 0" /></svg>
    ),
    gradient: 'from-yellow-400 to-yellow-500',
    change: '+15%',
    changeColor: 'text-green-400',
  },
  {
    label: 'Sync Status',
    value: '98.5%',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582M20 20v-5h-.581M5.21 17.293A9 9 0 0021 12.082M18.79 6.707A9 9 0 003 11.918" /></svg>
    ),
    gradient: 'from-indigo-400 to-indigo-500',
    change: '+1%',
    changeColor: 'text-green-400',
  },
];

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Active',
      data: [120, 190, 170, 210, 160, 230, 200],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};
const sleepData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sleep Score',
      data: [80, 85, 82, 88, 90, 87, 85],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16,185,129,0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};
const hrvData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'HRV',
      data: [60, 62, 61, 65, 63, 66, 64],
      borderColor: '#f59e42',
      backgroundColor: 'rgba(245,158,66,0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const recentActivity = [
  { name: 'Sarah Johnson', email: 'sarah.j@example.com', status: 'Connected', time: '2 mins ago', location: 'New York, USA', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Chen', email: 'm.chen@example.com', status: 'Disconnected', time: '1 hour ago', location: 'Toronto, CA', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Emma Wilson', email: 'emma.w@example.com', status: 'Connected', time: '5 mins ago', location: 'London, UK', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'James Rodriguez', email: 'j.rodriguez@example.com', status: 'Connected', time: '1 min ago', location: 'Madrid, ES', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl text-blue-600">Sigma Life</span>
          <div className="hidden md:flex space-x-6 ml-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Users</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Devices</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Analytics</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Insights</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Settings</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="border rounded px-2 py-1 text-sm" />
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="h-8 w-8 rounded-full" />
        </div>
      </nav>

      {/* Stat Cards */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl shadow p-5 h-28 flex flex-col justify-between bg-gradient-to-br ${card.gradient}`}
            >
              <div className="flex items-start justify-between">
                <div className="text-white text-sm font-medium">{card.label}</div>
                <div className="text-white opacity-90 flex items-center justify-center">{card.icon}</div>
              </div>
              <div className="flex items-end justify-between mt-2">
                <div className="text-2xl font-bold text-white">{card.value}</div>
                <span className="text-xs font-semibold text-white">{card.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Weekly Active Users */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-gray-700 mb-1">Weekly Active Users</div>
            <div className="flex space-x-2 mb-2">
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Day</button>
              <button className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">Week</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Month</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Custom</button>
            </div>
            <Line data={{
              ...chartData,
              datasets: [{ ...chartData.datasets[0], borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)' }],
            }} options={{ plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} height={120} />
          </div>
          {/* Sleep Score Trend */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-gray-700 mb-1">Sleep Score Trend</div>
            <div className="flex space-x-2 mb-2">
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Day</button>
              <button className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">Week</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Month</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Custom</button>
            </div>
            <Line data={{
              ...sleepData,
              datasets: [{ ...sleepData.datasets[0], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)' }],
            }} options={{ plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} height={120} />
          </div>
          {/* HRV Trend */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-gray-700 mb-1">HRV Trend</div>
            <div className="flex space-x-2 mb-2">
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Day</button>
              <button className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">Week</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Month</button>
              <button className="px-2 py-0.5 rounded text-xs font-medium bg-transparent text-gray-400">Custom</button>
            </div>
            <Line data={{
              ...hrvData,
              datasets: [{ ...hrvData.datasets[0], borderColor: '#f59e42', backgroundColor: 'rgba(245,158,66,0.1)' }],
            }} options={{ plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} height={120} />
          </div>
        </div>

        {/* Status/Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* System Uptime */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold text-gray-800">System Uptime</div>
                <div className="text-xs text-green-500 font-medium">+0.1%</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">99.9%</div>
          </div>
          {/* Failed Syncs */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold text-gray-800">Failed Syncs</div>
                <div className="text-xs text-red-500 font-medium">-12%</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">23</div>
          </div>
          {/* API Usage */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold text-gray-800">API Usage</div>
                <div className="text-xs text-green-500 font-medium">+15%</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">82.4K</div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-gray-100">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 14.414V19a1 1 0 01-1.447.894l-2-1A1 1 0 019 18v-3.586a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z" /></svg>
                Filter
              </button>
              <button className="flex items-center px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-gray-100">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentActivity.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                      <img src={item.avatar} alt={item.name} className="h-8 w-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'Connected'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
