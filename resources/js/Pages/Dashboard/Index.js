import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';

const Dashboard = () => {
  const { auth } = usePage().props;
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <p className="mb-12 leading-normal">
       Hi, {auth?.user?.name ?? ''} Welcome back!
      </p>
    </div>
  );
};

Dashboard.layout = page => <Layout title="Dashboard" children={page} description="Welcome to Panel Opakkuu" />;

export default Dashboard;
