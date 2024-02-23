import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RoomHeaderProps {
  name: string;
  description: string;
  joinURL: string;
  id: string;
}

const RoomHeader: FunctionComponent<RoomHeaderProps> = ({
  name,
  description,
  joinURL,
  id,
}) => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(joinURL).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
      },
      (err) => {
        console.error('Failed to copy: ', err);
        setCopySuccess('Failed to copy');
      }
    );
  }, [joinURL]);

  return (
    <div className='flex justify-between items-center gap-3 font-bold py-3 px-6 bg-neutral-50 rounded-tl-2xl border-b-[1px] border-neutral-300'>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faHashtag} size='xl'></FontAwesomeIcon>
        <h2 className='font-semibold tracking-wide'>{name}</h2>
      </div>
      <div className='flex gap-4 md:gap-6'>
        <button
          onClick={copyToClipboard}
          className='flex items-center gap-1 md:gap-2 font-semibold text-sm tracking-wide hover:-translate-y-1 hover:text-lightning-yellow-500 transition-all duration-300'
        >
          <FontAwesomeIcon icon={faCopy} size='xl' />
          {/* <span className='md:hidden'>{copySuccess || 'Copy'}</span> */}
          <span className='hidden md:inline'>
            {copySuccess || 'Copy Invite Link'}
          </span>
        </button>
        <button
          onClick={() => {
            navigate(`/leave-room/${id}`);
          }}
          className='flex items-center gap-1 md:gap-2 font-semibold text-sm tracking-wide hover:-translate-y-1 hover:text-red-500 transition-all duration-300'
        >
          <FontAwesomeIcon icon={faRightFromBracket} size='xl' />
          {/* <span className='md:hidden'>Leave</span> */}
          <span className='hidden md:inline'>Leave Room</span>
        </button>
      </div>
    </div>
  );
};

export default RoomHeader;
