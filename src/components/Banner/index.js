import React from 'react'
import ImageGallery from 'react-image-gallery'
import './style.css'

function Banner() {

    const imageItems = [
        {
            original:'https://images.pexels.com/photos/719597/pexels-photo-719597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            // thumbnail: 'https://tse2-mm.cn.bing.net/th/id/OIP.E67ry3Oa_Z01W8pfKHRiIwHaEq?pid=Api&rs=1',
            // description: 'Trump is un nane'

        },
        {
            original: 'https://images.pexels.com/photos/776636/pexels-photo-776636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            // description: 'Trump is tromperie'
        },
        {
            original: 'https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            // description: "Debat sur la Saint-Valentin: Valentin est peut etre mort puceau."
        },
        
    ]

    return (
        <div className="header__banner">
            <div className="banner__image">    
                <ImageGallery 
                autoPlay = {false}
                showPlayButton = {false}
                showThumbnails = {false}
                slideInterval = {5000}
                showFullscreenButton = {false}
                items={imageItems} />
            </div>
            <div className="banner_description">
                <div className="banner_descriptionHeader">
                    <div className="event__category">
                        <h1>Debat </h1>
                    </div>
                    <div className="event__date">
                        <p>Mon 26/05/21</p>
                    </div>
                </div>
                <hr/>
                <br/>
                <div className="banner_descriptionBody">
                    <h1>
                        L'administration Biden au prisme des alliés : perspectives croisées France-Japon.
                    </h1>
                    <p>Organized by: Alex le bouyoule</p>
                </div>
                
            </div>
        </div>
        
    )
}

export default Banner
