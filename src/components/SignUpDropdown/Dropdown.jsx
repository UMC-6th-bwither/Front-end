/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container } from './Dropdown.style';

function Dropdown({ id, label, options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(label);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // 드롭다운 토글
  };

  const isSelected = (option) => selectedOption === option.label;

  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        className="dropdown-checkbox"
        checked={isOpen}
        onChange={toggleDropdown}
        readOnly
      />
      <label
        className="dropdownLabel"
        htmlFor={id}
        style={{
          color: isSelected({ label }) ? '#dadada' : '#2D2D2D',
        }}
      >
        <p>{selectedOption}</p>
      </label>
      <div className="content">
        <ul>
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                color: isSelected(option) ? '#2D2D2D' : '#dadada',
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Dropdown;
