import * as React from 'react';
import { Link } from 'gatsby';
// this is how to import modular css - classname is js object
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

// props variable is descructured - in effect it is passing in props.pageTitle and props.children
const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/about'>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
};

export default Layout;