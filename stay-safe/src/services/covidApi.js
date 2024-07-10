import axios from "axios";

async function fetchGlobalData() {
    const url = 'https://covid-fe-2023.vercel.app/api/global.json';
    const response = await axios(url);
    return response.data;
}

async function fetchIndonesiaData() {
    const url = 'https://covid-fe-2023.vercel.app/api/indonesia.json';
    const response = await axios(url);
    return response.data;
}

export { fetchGlobalData, fetchIndonesiaData }
