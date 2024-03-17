import React, { useState } from 'react';

const Light = ({state, setState}) => {
    const [lit1, setLit1] = useState(false);
    const [lit2, setLit2] = useState(false);
    const [lit3, setLit3] = useState(false);
    const [lit4, setLit4] = useState(false);

    const checkLights = (val) => {
        if(lit1 && val != "lit1"){
            {/*turn off display info for Raccoon*/}
            setLit1(!lit1);
        }
        if(lit2 && val != "lit2"){
            {/*turn on display info for Camel*/}
            setLit2(!lit2);
        }
        if(lit3 && val != "lit3"){
            {/*turn on display info for PB*/}
            setLit3(!lit3);
        }
        if(lit4 && val != "lit4"){
            {/*turn on display info for Monkey*/}
            setLit4(!lit4);
        }
    }
    const toggleLight1 = () => {
        setLit1(!lit1);
        {/*turn on display info for Raccoon*/}
        setState(3);
        checkLights("lit1")
    };

    const toggleLight2 = () => {
        setLit2(!lit2);
        {/*turn on display info for Camel*/}
        setState(0);
        checkLights("lit2")
    };

    const toggleLight3 = () => {
        setLit3(!lit3);
        {/*turn on display info for PB*/}
        setState(1);
        checkLights("lit3")
    };

    const toggleLight4 = () => {
        setLit4(!lit4);
        {/*turn on display info for Monkey*/}
        setState(2)
        checkLights("lit4")
    };
    return (
        <div>
            <div className="relative">
                <button
                    className={`absolute top-[40px] left-[-25px] w-[300px] h-[300px] rounded-full ${lit1 ? 'bg-yellow-100 opacity-25' : 'bg-transparent'}`}
                    onClick={toggleLight1}
                />
                <button
                    className={`absolute top-[8px] left-[265px] w-[350px] h-[350px] rounded-full ${lit2 ? 'bg-yellow-100 opacity-25 ' : 'bg-transparent'}`}
                    onClick={toggleLight2}
                />
                <button
                    className={`absolute top-[325px] left-[-30px] w-[250px] h-[250px] rounded-full ${lit3 ? 'bg-yellow-100 opacity-25' : 'bg-transparent'}`}
                    onClick={toggleLight3}
                />
                <button
                    className={`absolute top-[300px] left-[275px] w-[300px] h-[300px] rounded-full ${lit4 ? 'bg-yellow-100 opacity-25' : 'bg-transparent'}`}
                    onClick={toggleLight4}
                />
            </div>
        </div>

    );
};

export default Light;
