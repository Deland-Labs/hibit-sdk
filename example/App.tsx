import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import HibitClientPage from './pages/HibitClient';
import BrokerClientPage from './pages/BrokerClient';

const App: FC = () => {
  return (
    <main className="container mx-auto h-full flex flex-col gap-6 p-6">
      <header className="flex-none flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center">Hibit SDK Examples</h1>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
                HibitClient
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/broker"
                className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
              >
                BrokerClient
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HibitClientPage />} />
          <Route path="/broker" element={<BrokerClientPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
