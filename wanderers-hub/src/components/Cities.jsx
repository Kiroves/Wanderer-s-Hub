import React from 'react'
import { useState, useEffect } from 'react';
import Select from 'react-select';

const Cities = ({ cities }) => {
    const [selected, setSelected] = useState([]);
    const cityOptions = cities.data.map(city => ({
        value: city.toLowerCase(),
        label: city
    }));
    const handleMultiSelectChange = (selectedOptions) => {
        setSelected(selectedOptions);
    };
    return (
        <div className='text-black'>
            <Select
                defaultValue={[]}
                value={selected}
                isMulti
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary75: 'black',
                    },
                })}
                name="countries"
                onChange={handleMultiSelectChange}
                options={cityOptions}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    )
}

export default Cities
