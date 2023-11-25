import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeContainer = isDarkTheme ? 'dark-bg' : 'white-bg'
      const homeColor = isDarkTheme ? 'white' : 'dark'
      return (
        <>
          <Navbar />
          <div className={`error-container ${homeContainer}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found"
            />
            <h1 className={homeColor}>Lost Your Way?</h1>
            <p className={homeColor}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
