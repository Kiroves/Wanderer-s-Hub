import React from 'react'
import countryWanderers from '@/app/api/openAI';
import Button from './Button';
const Results = async () => {
    const handler = new countryWanderers();
    const api = async () => {
        const no = sessionStorage.getItem('no');
        const storageCity = sessionStorage.getItem('city');
        const storageCountry = sessionStorage.getItem('country');

        if (no !== null) {
            const noResult = await handler.queryWanderers(no);
            console.log(no);
            console.log("gabe fore real on god");
            console.log(noResult);
        }
        if (storageCity !== null) {
            const noResult = await handler.queryWanderers(no);
            console.log(no);
            console.log("gabe fore real on god");
            console.log(noResult);
        }
    }
    return (
        <Button function={api} text={"gabeforreal"} />
    )
}

export default Results
