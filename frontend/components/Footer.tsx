import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import jwmdykesFaviconURL from '../assets/jwmdykes-favicon.ico';

interface FooterProps extends ComponentProps<'footer'> {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className='flex justify-between p-3 text-gray-500 font-extralight text-sm'>
      <ul className='flex items-center'>
        <li>
          Created by{' '}
          <a href='https://jwmdykes.ca'>
            <span className='text-neutral-600 hover:underline underline-offset-2 hover:text-lightning-yellow-500 after:content-[→]'>
              John Dykes
            </span>
          </a>
        </li>
      </ul>
      <div className='flex flex-row gap-4 items-center'>
        <span className='hidden md:inline-block'>Check me out at</span>

        <ul className='flex items-center gap-3'>
          <li className='hover:text-lightning-yellow-500 transition-all duration-200'>
            <a href='https://github.com/jwmdykes'>
              <FontAwesomeIcon icon={faGithub} size='xl'></FontAwesomeIcon>
            </a>
          </li>
          <li className='hover:text-lightning-yellow-500 transition-all duration-200'>
            <a href='mailto:98johndykes@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} size='xl'></FontAwesomeIcon>
            </a>
          </li>
          <li className='hover:text-lightning-yellow-500 transition-all duration-200'>
            <a href='https://github.com/jwmdykes'>
              <FontAwesomeIcon icon={faMedium} size='xl' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
