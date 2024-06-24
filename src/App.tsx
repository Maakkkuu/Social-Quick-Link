import './App.css'
import Button from './components/Button'

function App() {

  return (
    <div className='main-container'>
      <img src="./assets/img/profile.JPG" alt="profile" />
      <h1>Socials</h1>
      <div className='link-container'>
        <Button icon="Twitter" text="Twitter" link="https://twitter.com" />
        <Button icon="Facebook" text="Facebook" link="https://facebook.com" />
        <Button icon="Instagram" text="Instagram" link="https://instagram.com" />
      </div>
    </div>
  )

}

export default App
