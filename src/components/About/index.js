import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeContainer = isDarkTheme ? 'dark-bg' : 'white-bg'
      const homeColor = isDarkTheme ? 'white' : 'dark'
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeContainer}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={homeColor}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
