// import { FreeWall, Block } from 'react-freewall'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router'
import "./ImageGrid.css"

export default (params) => {
    const url = `https://qr-art-code.herokuapp.com/api/images/${params.id || useParams().id}`
    console.log(url)


    return (
        <div className='iframe-container'>
            <Iframe url={url} width='512px' height='512px' frameBorder={0} id="frame" />
        </div>
    )
}