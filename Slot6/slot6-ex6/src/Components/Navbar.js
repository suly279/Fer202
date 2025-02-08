const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#F8F9FA'}}>
            <div style={{paddingLeft: "30px"}} className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="#" style={{fontSize: '1.5rem'}}>Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item mx-3"><a className="nav-link" href="#">Link</a></li>
                        <li className="nav-item mx-3"><a className="nav-link" href="#">Dropdown</a></li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input style={{margin: "0 20px 0 20px", padding: "0 20px 0 20px"}} className="" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary border-primary rounded-0" type='summit'>Search</button>

                </form>
            </div>
        </nav>
    );
};

export default Navbar;