import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const homeContainer = isDarkTheme ? 'nav-dark-bg' : 'nav-white-bg'
      const homeColor = isDarkTheme ? 'white' : 'dark'
      const onToggleTheme = () => {
        toggleTheme()
      }
      return (
        <div className={`nav-container ${homeContainer}`}>
          <div className="nav-list">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            )}
            <ul className="list-container">
              <Link to="/" className={`link ${homeColor}`}>
                <li className="item">Home</li>
              </Link>
              <Link to="/about" className={`link ${homeColor}`}>
                <li className="item">About</li>
              </Link>
            </ul>
            <button
              className="button"
              type="button"
              onClick={onToggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              )}
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
