import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl} from "@material-ui/core";

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';



function CountryPicker({ handleCountryChange }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();

    }, [setFetchedCountries]);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((eachCountry, i) => (<option key={i} value={eachCountry}>{eachCountry}</option>))}
            </NativeSelect>
        </FormControl>
        
    );
}

export default CountryPicker;