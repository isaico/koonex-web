import React, { useEffect, useState } from 'react';

const getRandom = (min, max) => {
    const bubbleSize = Math.floor(Math.random() * (max - min) + min);
    return bubbleSize;
};
export const Bubbles = () => {
    const [bubble, setBubble] = useState(null);
    const [bubbleSize, setBubbleSize] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('intervalo');
            setBubbleSize(getRandom(1, 15));

            const rand = getRandom(1, 100);
            bubbles.push(
                <div
                    className={`w-12 h-12 bg-white rounded-full opacity-30 absolute bottom-0  bubble left-1`}
                />
            );
        }, 2000);
        return () => {
            clearInterval(interval);
            setBubble(false);
        };
    });

    // const renderDiv = () => {
    //     return (
    //         <div
    //             className={`w-${bubbleSize} h-${bubbleSize} bg-white rounded-full opacity-30 absolute bottom-0 left-2 bubble`}
    //         />
    //     );
    // };
    let bubbles = [];
    // for (let i = 0; i < 20; i++) {
    //     const rand = getRandom(1,100)
    //     console.log("🚀 ~ file: Bubbles.jsx ~ line 31 ~ Bubbles ~ rand", rand)
    //     bubbles.push(
    //         <div
    //             key={i}
    //             className={`w-12 h-12 bg-white rounded-full opacity-30 absolute bottom-0  bubble left-`}
    //         />
    //     );
    // }
    return (
        <div className="">
            {bubbles}
            {/* <div onChange={()=>renderDiv()}>burbuja</div> */}
            {/* {bubble ? renderDiv() : null} */}
            {/* {
                <div
                    className={`w-${bubbleSize} h-${bubbleSize} bg-white rounded-full opacity-30 absolute bottom-0 left-2 bubble`}
                />
            } */}
            {bubbleSize}
        </div>
    );
};
