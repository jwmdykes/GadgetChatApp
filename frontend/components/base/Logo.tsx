import { FunctionComponent } from 'react';
import logoUrl from '../../assets/logo-notext.png';

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => (
  <a href='/' rel='noreferrer' className='max-h-fit flex items-center'>
    <LogoImage></LogoImage>
    <LogoText></LogoText>
  </a>
);

export const LogoImage = () => {
  return <img src={logoUrl} alt='QuickQuack Logo' className='w-12' />;
};

export const LogoText = () => {
  return <span className='font-bold text-xl tracking-tight'>QuickQuack</span>;
};

export default Logo;
