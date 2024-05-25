import axios from "axios";

export const BACKEND_ENDPOINT = "https://meddata-backend.onrender.com";

export const fetchStates = async () => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/states`);
        // console.log(response.data);
        return response.data;
    }catch (e){
         console.log(e);
         return null
    }
}

export const  fetchCities  = async (state) => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/cities/${state}`);
        // console.log(response.data);
        return response.data;
    }catch (e){
         console.log(e);
         return null
    }
}

