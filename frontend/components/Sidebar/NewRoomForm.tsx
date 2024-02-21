import { useActionForm } from '@gadgetinc/react';
import Modal, {
  ModalButton,
  ModalH1,
  ModalH2,
  ModalProps,
} from '../base/Modal';
import { api } from '../../api';
import { FunctionComponent } from 'react';
import CustomDropdown from '../base/DropDown';

interface NewRoomFormProps extends ModalProps {}

const NewRoomForm: FunctionComponent<NewRoomFormProps> = ({ ...props }) => {
  const {
    register,
    submit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useActionForm(api.room.create);

  return (
    <Modal {...props}>
      <ModalH1>New Room</ModalH1>
      <ModalH2>Create a new room to start chatting</ModalH2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('hit submit', e);
          submit(e).then((value) => {
            if (!value.error) {
              reset();
            }
          });
        }}
        className='flex flex-col w-full max-w-md mx-auto gap-4 md:gap-5'
      >
        {/* Room Name */}
        <label htmlFor='name' className='flex flex-col gap-2'>
          <span className='text-lg font-medium'>Room Name</span>
          <input
            {...register('room.name')}
            type='text'
            id='name'
            className={`px-4 py-2 border ${
              errors?.room?.name?.message ? 'ring-2 ring-red-500' : ''
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder={errors?.room?.name?.message ?? 'Enter room name'}
            autoComplete='off'
          />
        </label>

        {/* Room Description */}
        <label htmlFor='description' className='flex flex-col gap-2'>
          <span className='text-lg font-medium'>Room Description</span>
          <input
            {...register('room.description')}
            type='text'
            id='description'
            className={`px-4 py-2 border ${
              errors?.room?.description?.message ? 'ring-2 ring-red-500' : ''
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder={
              errors?.room?.description?.message ?? 'Describe your Room'
            }
            autoComplete='off'
          />
        </label>

        {/* Room Color */}
        <label htmlFor='color' className='flex flex-col gap-2'>
          <span className='text-lg font-medium'>Room Color</span>
          <CustomDropdown
            {...register('room.color')}
            options={
              new Map<string, string>([
                ['neutral-300', 'Gray'],
                ['pastel-blue', 'Pastel Blue'],
                ['pastel-red', 'Pastel Red'],
                ['pastel-purple', 'Pastel Purple'],
                ['pastel-yellow', 'Pastel Yellow'],
                ['pastel-orange', 'Pastel Orange'],
              ])
            }
          />
        </label>

        {/* Submit Button */}
        <ModalButton type='submit'>
          <span className={`mx-auto `}>
            {isSubmitSuccessful ? 'Created Room!' : 'Create New Room'}
          </span>
        </ModalButton>
      </form>
    </Modal>
  );
};

export default NewRoomForm;
