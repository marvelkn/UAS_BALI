import React, { useEffect } from 'react'
import { background } from './SlideUlunDanu';
import { useState } from 'react';

const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState === 2){
                setCurrentState(0)
        }else{
            setCurrentState(currentState + 1)
        }
    }, 5000)
    return () => clearTimeout(timer)
    })
    const bgImageStyle = {
        backgroundImage: `url(${background[currentState].url})`,
        //   backgroundColor: `${background[currentState].color}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh"
    }

    const goToNext = () => {
        setCurrentState(currentState)
    }

    return (
        <div className="background-style">
            <div onClick={() => setCurrentState((currentState + 1) % 3)} style={bgImageStyle} ></div>
        </div>
    )
}

export default BackgroundSlider;