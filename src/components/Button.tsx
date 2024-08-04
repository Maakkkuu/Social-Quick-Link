import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface ButtonProps {
  text: string;
  link: string;
  icon: string;
}

export const Button = ({ text, link, icon }: ButtonProps) => {
  const getButtonClass = (buttonText: string) => {
    switch (buttonText) {
      case 'Twitter':
        return `socials twitter`;
      case 'Facebook':
        return `socials facebook`;
      case 'Instagram':
        return `socials instagram`;
      case 'Github':
        return `socials github`;
      case 'Linkedin':
        return `socials linkedin`;
      default:
        return '';
    }
  };

  const getIcon = (buttonText: string) => {
    switch (buttonText) {
      case 'Twitter':
        return faTwitter;
      case 'Facebook':
        return faFacebook;
      case 'Instagram':
        return faInstagram;
      case 'Github':
        return faGithub;
      case 'Linkedin':
        return faLinkedin;
      default:
        return faFacebook;
    }
  };

  return (
    <a href={link} className={getButtonClass(text)}>
        <FontAwesomeIcon icon={getIcon(icon)} />
        <span className='social-text'>{text}</span>
    </a>
  );
};
