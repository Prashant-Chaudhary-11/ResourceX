import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center py-3">
            <h2 className="logo">
                Resource
                <span className="logo-x">
                    <span className="line line-left"></span>
                    <span className="line line-right"></span>
                </span>
            </h2>

            <div>
                <nav className='header_navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/collections">Collections</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <div>
                <button className='primary-button d-flex align-items-center gap-1'><img width="20" height="20" src="https://img.icons8.com/doodle/48/circled-play--v1.png" alt="rocket" /> Get Started</button>
            </div>

        </div>
    )
}