import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

interface ButtonProps {
  text: string;
  link: string;
  icon: string;
}

const Button =  ({ text, link, icon }: ButtonProps) => {

  const getButtonClass = (buttonText: string) => {
    switch (buttonText) {
      case 'Twitter': return `${styles.socials} ${styles.twitter}`;
      case 'Facebook': return `${styles.socials} ${styles.facebook}`;
      case 'Instagram': return `${styles.socials} ${styles.instagram}`;
      default: return '';
    }

  };

  const getIcon = (buttonText: string) => {
    switch (buttonText) {
      case 'Twitter': return faTwitter;
      case 'Facebook': return faFacebook;
      case 'Instagram': return faInstagram;
      default: return faFacebook;
    }
  }

  return (
    <a href={link} className={getButtonClass(text)}>
      <FontAwesomeIcon icon={getIcon(icon)} />
    </a>
  );
}

export default Button