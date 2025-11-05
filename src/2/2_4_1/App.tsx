import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        if (walk) {
            alert('Next is stop');
        } else {
            alert('Next is walk');
        }
        setWalk(!walk)
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1
                style={{
                    color: walk ? 'darkgreen' : 'darkred',
                }}
            >
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}