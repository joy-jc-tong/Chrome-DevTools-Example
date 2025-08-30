import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const PageShell = () => {
  return (
    <div className="min-h-screen bg-white">
      <AppHeader />
      <AppSidebar />
      <main className="ml-60 pt-16 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default PageShell;
