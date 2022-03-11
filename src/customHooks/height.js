import { useState, useEffect } from 'react'

const getWindowDimension = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [window.innerWidth, window.innerHeight])

    return dimensions
}

export default getWindowDimension
