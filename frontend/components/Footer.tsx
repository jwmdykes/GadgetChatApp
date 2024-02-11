import React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import jwmdykesFaviconURL from '../assets/jwmdykes-favicon.ico';

interface FooterProps extends ComponentProps<'footer'> {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className='flex justify-between bg-white border-t-[1px] border-neutral-200 p-4 text-gray-500 font-extralight text-sm'>
      <ul className='flex items-center'>
        <li>Created by John Dykes</li>
      </ul>
      <div className='flex flex-row gap-5 items-center'>
        <span>Check me out at</span>

        <ul className='flex items-center gap-3'>
          <li className='hover:text-themeBlack'>
            <a href='https://github.com/jwmdykes'>
              <FontAwesomeIcon icon={faGithub} size='xl'></FontAwesomeIcon>
            </a>
          </li>
          <li className='hover:text-themeBlack'>
            <a href='mailto:98johndykes@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} size='xl'></FontAwesomeIcon>
            </a>
          </li>
          <li className='hover:text-themeBlack'>
            <a href='https://github.com/jwmdykes'>
              <FontAwesomeIcon icon={faMedium} size='xl' />
            </a>
          </li>

          <ul>
            <a href='https://jwmdykes.ca'>
              <img
                src={jwmdykesFaviconURL}
                alt='jwmdykes.ca favicon'
                className='max-h-5 brightness-100 hover:brightness-125 saturate-0 hover:saturate-100'
              />
            </a>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
