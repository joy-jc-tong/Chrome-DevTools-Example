import { Outlet } from 'react-router-dom';

const Performance = () => {
  return (
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  );
};

export default Performance;
