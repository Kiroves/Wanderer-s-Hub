import React from 'react'
import countryWanderers from '@/app/api/openAI';
import {countryWanderersMembers} from '@/app/api/openAI';


const TestButton = () => {
    const handler = new countryWanderers();
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={() => handler.queryWanderers('Give me some travel suggestions!')} className="bg-green-500 text-white px-4 py-2 rounded-full">testing</button>
        </div>
    )
}

export default TestButton
