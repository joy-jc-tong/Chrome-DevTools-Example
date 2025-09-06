import { Outlet } from 'react-router-dom';

const Application = () => {
  return (
    <div className="max-w-4xl">
      <Outlet />
    </div>
  );
};

export default Application;
