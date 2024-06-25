import './App.css'
import Button from './components/Button'
import profileImage from './assets/img/profile.jpg'

function App() {

  return (
    <div className='main-container'>
      <img src={profileImage} alt="profile" />
      <h1>Mark Jaily H. Peña</h1>
      <p>Aspiring Developer</p>
      <hr></hr>
      <h2>Socials</h2>
      <div className='link-container'>
        <Button icon="Facebook" text="Facebook" link="https://www.facebook.com/markjaily.pena.9" />
        <Button icon="Instagram" text="Instagram" link="https://www.instagram.com/makkukuma/" />
        <Button icon="Github" text="Github" link="https://github.com/Maakkkuu" />
        <Button icon="Linkedin" text="Linkedin" link="https://www.linkedin.com/in/makkukuma/" />
      </div>
    </div>
  )

}

export default App
