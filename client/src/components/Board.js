import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./Board.css";

const Board = forwardRef((props, ref) => {
    const canvasRef = React.useRef(null);
    const parentRef = React.useRef(null);
    const [ctx, setCtx] = useState({});
    const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
    const [drawing, setDrawing] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(5)

    useEffect(() => {
        let canv = canvasRef.current;
        canv.width = parentRef.current.offsetWidth;
        canv.height = parentRef.current.offsetHeight;

        let canvCtx = canv.getContext("2d");
        canvCtx.lineJoin = "round";
        canvCtx.lineCap = "round";
        canvCtx.lineWidth = size;
        canvCtx.fillStyle = "white";
        canvCtx.fillRect(0, 0, canv.width, canv.height);
        setCtx(canvCtx);

        // let offset = canv.getBoundingClientRect();
        setCanvasOffset({ x: parseInt(canv.offsetLeft), y: parseInt(canv.offsetTop) });
    }, [ctx]);

    useEffect(() => {
        let canvCtx = canvasRef.current.getContext("2d");
        canvCtx.lineWidth = size;
        setCtx(canvCtx);
    }, [size])

    function handleMouseDown(e) {
        console.log(((e.touches == undefined) ? e.clientX : e.touches[0].clientX), canvasOffset.x)
        console.log(((e.touches == undefined) ? e.clientY : e.touches[0].clientY), canvasOffset.y)
        // console.log(e.clientY)
        // console.log(e.touches[0].clientY)
        setDrawing(true);
        setPosition({
            x: parseInt(((e.touches == undefined) ? e.clientX : e.touches[0].clientX) - canvasOffset.x),
            y: parseInt(((e.touches == undefined) ? e.clientY : e.touches[0].clientY) - canvasOffset.y),
        });
    }
    function handleMouseUp() {
        setDrawing(false);
    }

    function handleMouseMove(e) {
        let mousex = ((e.touches == undefined) ? e.clientX : e.touches[0].clientX) - canvasOffset.x;
        let mousey = ((e.touches == undefined) ? e.clientY : e.touches[0].clientY) - canvasOffset.y;
        if (drawing) {
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(position.x, position.y);
            ctx.lineTo(mousex, mousey);
            ctx.stroke();
        }
        setPosition({ x: mousex, y: mousey });
    }

    useImperativeHandle(ref, () => ({
        handleColor(color) {
            if (color == "#ffffff") {
                setSize(20)
            } else {
                setSize(5)
            }
            setColor(color);
        },
        export() {
            return (canvasRef.current.toDataURL('image/jpeg', 0.9).split(',')[1])
        }
    }))

    return (
        <div className="board" ref={parentRef}>
            <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}

                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            />
        </div>
    );
}
)

export default Board;
