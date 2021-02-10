import React from 'react'
import ImageGallery from 'react-image-gallery'

function Banner() {

    const imageItems = [
        {
            original:'https://tse2-mm.cn.bing.net/th/id/OIP.E67ry3Oa_Z01W8pfKHRiIwHaEq?pid=Api&rs=1',
            // thumbnail: 'https://tse2-mm.cn.bing.net/th/id/OIP.E67ry3Oa_Z01W8pfKHRiIwHaEq?pid=Api&rs=1',
            destription: 'Trump' ,
            fullScreen: true

        },
        // {
        //     original: 'https://tse3-mm.cn.bing.net/th/id/OIP.fd7s7eD42pjZ5W9jweVxvAHaE_?pid=Api&rs=1',
        //     description: 'Trump'
        // }
    ]

    return (
        <div>
            <ImageGallery items={imageItems} />
        </div>
    )
}

export default Banner
