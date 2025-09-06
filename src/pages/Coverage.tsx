import { Outlet } from 'react-router-dom';

const Coverage = () => {
  return (
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  );
};

export default Coverage;
