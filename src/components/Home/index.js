import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={homeColor}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
