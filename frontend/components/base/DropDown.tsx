import React, { forwardRef, useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

export interface CustomDropdownProps {
  options: Map<string, string>;
}

const CustomDropdown = forwardRef(
  ({ options, ...props }: CustomDropdownProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [friendlyName, setFriendlyName] = useState<string>('');
    const [value, setValue] = useState<string>('');
    const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container
    useOutsideClick(dropdownRef, () => setIsOpen(false));

    const handleSelect = (color: string, friendlyName: string) => {
      setIsOpen(false); // Close the dropdown after selection
      console.log(color);
      setValue(color);
      setFriendlyName(friendlyName);
    };

    console.log('props:', props);

    return (
      <div className='relative' ref={dropdownRef}>
        <input type='hidden' value={value} {...props} />
        <button
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-${value}`}
          type='button'
        >
          {friendlyName || 'Select a color'}
        </button>
        {isOpen && (
          <div
            className='absolute left-0 right-0 mt-1 border rounded-md bg-white z-10'
            role='listbox'
          >
            {Array.from(options.entries()).map(([color, friendlyName]) => (
              <div
                key={color}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100`}
                onClick={() => handleSelect(color, friendlyName)}
                tabIndex={0}
              >
                {friendlyName}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default CustomDropdown;
