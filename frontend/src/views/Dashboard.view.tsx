import DashboardMock from '../assets/dashboard-mock.jpg';

export default function Dashboard() {
  return (
    <main className="bg-primary text-slate-400">
      <img src={DashboardMock} alt="dashboard-mock-img" className="w-screen" />
    </main>
  );
}
