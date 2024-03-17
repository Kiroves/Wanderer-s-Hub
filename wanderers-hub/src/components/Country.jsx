import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Country = ({ func }) => {
    const [selected, setSelected] = useState([]);
    const [countries, setCountries] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const countriesData = response.data;
            const countryOptions = countriesData.map(country => ({
                value: country.name.common.toLowerCase(),
                label: country.name.common
            }));
            setCountries(countryOptions);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    fetchData();

    const handleMultiSelectChange = (selectedOptions) => {
        setSelected(selectedOptions);
        func(selectedOptions);
    };


    return (
        <div className='text-black'>
            <Select
                defaultValue={[]}
                value={selected}
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
                options={countries}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    );
};

export default Country;
