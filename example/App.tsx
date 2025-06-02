import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const App: FC = () => {
  return (
    <main className="container mx-auto h-full flex flex-col gap-6">
      <header className="p-6 pb-0 flex-none flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center">Hibit SDK Examples</h1>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `font-bold underline ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
              >
                HibitClient
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default App;
