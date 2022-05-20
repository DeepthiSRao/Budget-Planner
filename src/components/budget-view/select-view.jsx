import React, {useRef} from 'react';
import Select from 'react-select';
import './style.css';

// styling for select
const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      border: '1px solid #280C4E',
      borderBottom: '1px',
      backgroundColor: state.isFocused  ? "#F8F4FE" : "",
      color: state.selectProps.menuColor,
    }),
    menu: (provided, state) => ({
        ...provided,
        border: "none",
        borderRadius: "none",
        boxShadow: "none",
        marginLeft: '-8px',
        borderBottom: '1px solid #280C4E',
        marginBottom: 0,
    }),
    menuList: (provided, state) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    control: base => ({
        ...base,
        border: '0 !important',
        // This line disable the blue border
        boxShadow: '0 !important',
        '&:hover': {
            border: '0 !important'
         }
     }),
    dropdownIndicator: base => ({
        ...base,
        color: "#6F1AE3",
        transform: "scale(1.5)",
    }),
    indicatorSeparator: () => {},
}

const SelectView = ({options, optionValue, resetVal, handleSelect}) => {
    const selectInputRef = useRef();

    const handleChange = (option) => {
        handleSelect(option.value);
    }

    const onClear = () => {
        selectInputRef.current.select.clearValue();
    };

    if(optionValue === null)
        onClear();

    return (
        <>
            <Select
                onChange={(option) => handleChange(option)}
                options={options}
                value={(resetVal===0) ? null: options.value}
                styles={customStyles}
                className='form-control py-2 px-2'
                defaultValue={!!optionValue ? optionValue : {label: "Category", value: "0"}}
                noOptionsMessage={() => 'No Categories Selected'}
            />
        </>
    );
}
 
export default SelectView;