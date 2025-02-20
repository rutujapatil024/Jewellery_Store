import React, { useState, useEffect } from "react";

const LiveRatesButton = () => {
    const [goldRate, setGoldRate] = useState(null);
    const [silverRate, setSilverRate] = useState(null);

    const fetchRates = async () => {
        try {
            const response = await fetch("https://api.metalpriceapi.com/v1/latest?api_key=YOUR_API_KEY&base=INR&symbols=XAU,XAG");
            const data = await response.json();
            setGoldRate(data.rates.XAU);
            setSilverRate(data.rates.XAG);
        } catch (error) {
            console.error("Error fetching metal rates:", error);
        }
    };

    useEffect(() => {
        fetchRates();
        const interval = setInterval(fetchRates, 60000); // Update every 1 minute
        return () => clearInterval(interval);
    }, []);

    return (
        <button className="live-rates-button" onClick={fetchRates}>
            {goldRate && silverRate 
                ? `Gold: ₹${goldRate.toFixed(2)} | Silver: ₹${silverRate.toFixed(2)}`
                : "Fetching Live Rates..."}
        </button>
    );
};

export default LiveRatesButton;
