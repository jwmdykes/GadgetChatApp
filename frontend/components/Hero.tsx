import React, { ReactNode } from 'react';
import { ComponentProps, FunctionComponent } from 'react';

interface HeroProps extends ComponentProps<'section'> {
  title: string;
  subtitle: string;
  button: ReactNode;
}

const Hero: FunctionComponent<HeroProps> = ({ children }) => {
  return <section></section>;
};

export default Hero;
