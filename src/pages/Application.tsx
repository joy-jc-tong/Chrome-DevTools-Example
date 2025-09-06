import { Outlet } from 'react-router-dom';

const Application = () => {
  return (
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  );
};

export default Application;
