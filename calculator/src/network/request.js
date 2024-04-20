import axios from "axios";

export async function requestAPI(amount, from, to) {
    try {
        const url = "https://api.apilayer.com/exchangerates_data/convert";
        const response = await axios.get(url, {
            params: {
                amount: amount,
                from: from,
                to: to,
            },
            headers: {
                apikey: process.env.REACT_APP_API_KEY,
            },
        });
        return response;

    } catch (error) {
        // Handle error
        console.error("Error requesting API:", error);
        throw error; // rethrow the error if necessary
    }
}
