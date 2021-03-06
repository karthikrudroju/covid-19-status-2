import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let changableURL = url;
    if(country){
        changableURL = `${url}/countries/${country}`;
    }
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changableURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
};

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((eachDailyData) => ({
            confirmed: eachDailyData.confirmed.total,
            deaths: eachDailyData.deaths.total,
            date: eachDailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCountries = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)

        return countries.map((eachCountry) => (eachCountry.name));
    } catch (error) {
        console.log(error);
    }
}