import React, { useLayoutEffect } from 'react'
import { CirclePicker } from 'react-color';
import { useRef, useState } from 'react';
import './DrawCanvas.css'
import Board from './Board'

function App() {
    const [color, changeColor] = useState('#000')
    const ref = useRef()


    return (
        <div className='DrawCanvas'>
            <Board ref={ref} />

            <CirclePicker onChangeComplete={(val) => ref.current.handleColor(val.hex)} colors={[
                "#f44336", // red
                "#2986cc", // blue 
                "#8fce00",// green
                "#ffa500 ",// orange 
                "#c90076", // purple 
                "#000000", // black 
                "#ffffff", // white 
                "#999999", // grey
            ]} width='100%' />


            <button onClick={() => {
                var img = ref.current.export()

                window.close()
            }} className='btn btn__primary btn__lg'>Submit</button>
        </div>
    );
}

export default App;
