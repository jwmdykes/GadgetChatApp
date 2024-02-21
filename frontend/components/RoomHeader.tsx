import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { Url } from 'url';

interface RoomHeaderProps {
  name: string;
  description: string;
  joinURL: string;
}

const RoomHeader: FunctionComponent<RoomHeaderProps> = ({
  name,
  description,
  joinURL,
}) => {
  return (
    <div className='flex items-center gap-1 font-bold py-3 px-6 bg-neutral-50 rounded-tl-2xl border-b-[1px] border-neutral-300'>
      <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>
      <h2 className='font-bold text-lg'>{name}</h2>
    </div>
  );
};

export default RoomHeader;
