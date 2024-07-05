import { NavLink } from 'react-router-dom';
import BlogVitor from '../assets/Blog_Do_Vitor.png';

function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-600">
      <img src={ BlogVitor } alt="Blog do Vitor" className="h-48" />
      <nav
        className="flex gap-10 bg-orange-400
        w-full justify-center p-2 text-lg font-bold text-neutral-800"
      >
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
}

export default Header;
