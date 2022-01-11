import '../styles/Header.css'
import Nav from './Nav'
import Categories from './Categories'
function Header() {
    return (
        <div className='header-container'>
            <div className="tophalf">
                <span className="logo">Shopper</span>
                <div className="form-container">
                    <form className="search-container">
                        <input className="searchbar" type="text" />
                        <button className="searchbutton" type="submit">Search...</button>
                    </form>
                </div>
                <div className="nav-box">
                    <Nav />
                </div>
            </div>
            <div className="bottomhalf">
                <Categories />
            </div>
        </div>
    )
}

export default Header