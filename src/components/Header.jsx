import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(stats => stats.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-red-700 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>Mariela Benitez</span>
          <span className='text-slate-700'>Inmobiliaria</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Buscar...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600'/>
        </form> 
        
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-100 hover:underline'>Inicio</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-100 hover:underline'>Nosotros</li>
            </Link>          
         
          {/* Dropdown de Trámites */}
          <li className='relative'>
            <button onClick={toggleDropdown} className='hidden sm:inline text-slate-100 hover:underline'>
              Tramites
              <svg className='w-4 h-4 inline-block ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 12l-6-6h12l-6 6z' clip-rule='evenodd'></path></svg>
            </button>
            {isOpen && (
              <ul className='absolute bg-white rounded-lg shadow-md mt-2 p-4'>
                <Link to='/transferencias'><li>Transferencias</li></Link>
                <Link to='/inscripciones'><li>Inscripciones</li></Link>
                <Link to='/informes'><li>Informes</li></Link>
                <Link to='/altas-bajas'><li>Altas/Bajas</li></Link>
                <Link to='/cedula-azul'><li>Cédula Azul</li></Link>
              </ul>
            )}
          </li>
          {/* Icono de usuario */}
          <li>
            <Link to='profile'>
              {currentUser ? (
                <img className='rounded-full h-7 object-cover' src={currentUser.avatar} alt="profile" />
              ): (<FaUser className='hidden sm:inline text-slate-100 hover:underline'/>
              )
              
              }
              </Link>
           
           
           
          </li>
        </ul>
      </div>
    </header>
  );
}






