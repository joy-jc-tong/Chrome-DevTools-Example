import { Outlet } from 'react-router-dom';

export default function Elements() {
  return (
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  );
}
