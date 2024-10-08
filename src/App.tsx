import './App.css'
import {Button} from './components/Button'
import profileImage from './profile.jpg'
import { TypeAnimation } from 'react-type-animation';

function App() {

  return (
    <div className='main-container'>
      <img src={profileImage} alt="profile" /><br></br>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mark Jaily H. Peña',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Aspiring Developer',
        1000,
      ]}
      wrapper="h1"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
      />
      <hr></hr>
      <h2>Socials</h2>
      <div className='link-container'>
        <Button icon="Facebook" text="Facebook" link="https://www.facebook.com/makku.jaily" />
        <Button icon="Instagram" text="Instagram" link="https://www.instagram.com/makkukuma/" />
        <Button icon="Github" text="Github" link="https://github.com/Maakkkuu" />
        <Button icon="Linkedin" text="Linkedin" link="https://www.linkedin.com/in/makkukuma/" />
      </div>
      <br></br>
      <p>© 2024 Mark Jaily H. Peña</p>
    </div>
  )

}

export default App
