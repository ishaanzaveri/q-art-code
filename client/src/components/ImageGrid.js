// import { FreeWall, Block } from 'react-freewall'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Iframe from 'react-iframe'
import "./ImageGrid.css"

export default () => {
    // const ref = useRef()

    return (
        <Iframe url="./grid.html" width='512px' height='512px' frameBorder={0} id="frame" />
    )
}