import axios from "axios";

const url = 'https://api.bluelytics.com.ar/v2/latest'

export const getValorDolar = async () => {
    try {
        
        const { data: blue } = await axios.get(url);
        const valueSell = blue.blue.value_sell
        return valueSell;
        
    }
    catch(error) {
        console.error("Error productos GET:", error);
        return []
    }
    
};
export const getLastUpdate = async () => {
    try {
        
        const { data: blue } = await axios.get(url);
        const last = blue.last_update
        return last;
        
    }
    catch(error) {
        console.error("Error productos GET:", error);
        return []
    }
    
}