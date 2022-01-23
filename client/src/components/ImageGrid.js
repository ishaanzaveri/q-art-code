// import { FreeWall, Block } from 'react-freewall'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Iframe from 'react-iframe'
import "./ImageGrid.css"

export default (params) => {
    const url = `/api/images/${params.url}`
    console.log(url)


    return (
        <Iframe url={url} width='512px' height='512px' frameBorder={0} id="frame" />
    )
}