import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import './Navber.css';
const Navber = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return (
        <div>
            <header className='header'>
                <section className='flex'>

                    <h2>Fruit Valley</h2>
                    <nav className='navber'>
                        <Link to={'/home'}>HOME</Link>
                        <Link to={'/home'}>LOGIN</Link>
                        <Link to={'/home'}>REGISTURE</Link>
                        <Link to={'/home'}>BLOGS</Link>
                    </nav>

                </section>
            </header>
            <header className='header-2'>
                <h1 className='small-name'>Fruit Valley</h1>
                {menuDisplay && <nav className='nav-2'>
                    <Link to={'/home'}>HOME</Link>
                    <Link to={'/home'}>LOGIN</Link>
                    <Link to={'/home'}>REGISTURE</Link>
                    <Link to={'/home'}>BLOGS</Link>
                </nav>
                }
                <button className='menu-btn' onClick={() => setMenuDisplay(!menuDisplay)}>
                    {menuDisplay ?
                        <XIcon width={30} />
                        :
                        <MenuAlt1Icon width={30} />
                    }
                </button>
            </header>
        </div>

    );
};

export default Navber;