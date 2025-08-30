import { Outlet } from 'react-router-dom';

const Console = () => {
  return (
    <div className="max-w-4xl">
      <Outlet />
    </div>
  );
};

export default Console;
