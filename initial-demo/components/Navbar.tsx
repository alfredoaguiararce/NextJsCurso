import Link from 'next/link';
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={Styles['menu-container']}>
            <Link href='/'>Home</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
        </nav>
    );
}


export default Navbar