import LogoSvg from '../assets/images/logo-full.svg?react';
interface ILogoProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const Logo: React.FC<ILogoProps> = (props) => {
  return <LogoSvg {...props} />;
};

export default Logo;
