import React, { useState } from 'react';
// import { CustomLink } from 'react-router-dom';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import './Navber.css';
import CustomLink from '../Authintications/CustomeLink/CustomeLink';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navber = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const userSignOut = () => {
        signOut(auth)

    }
    return (
        <div>
            <header className='header'>
                <section className='flex'>

                    <h2>Fruit Valley</h2>
                    <nav className='navber'>
                        <CustomLink to={'/home'}>Home</CustomLink>
                        <CustomLink to={'/blogs'}>Blogs</CustomLink>

                        {!user && <CustomLink to={'/Registar'}>Registar</CustomLink>}
                        {
                            user && <CustomLink to={'/manage'}>Manage items</CustomLink>
                        }
                        {
                            user && <CustomLink to={'/additems'}>Add items</CustomLink>
                        }
                        {
                            user && <CustomLink to={'/myitems'}>My Items</CustomLink>
                        }
                        {
                            user ? <button onClick={userSignOut} className='signout'>Signout</button> : <CustomLink to={'/Login'}>Login</CustomLink>
                        }
                    </nav>

                </section>
            </header>
            <header className='header-2'>
                <h1 className='small-name'>Fruit Valley</h1>
                {menuDisplay && <nav className='nav-2'>
                    <CustomLink to={'/home'}>HOME</CustomLink>
                    <CustomLink to={'/blogs'}>BLOGS</CustomLink>
                    <CustomLink to={'/Login'}>LOGIN</CustomLink>
                    <CustomLink to={'/Registar'}>REGISTURE</CustomLink>
                    {user && <button onClick={userSignOut} className='signout'>Signout</button>}
                </nav>
                }
                <button style={{ border: 'none' }} className='menu-btn' onClick={() => setMenuDisplay(!menuDisplay)}>
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