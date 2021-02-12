import React from 'react'
import './style.css'

function BodyArticle() {
    return (
        <div className="article__resume">
            <div className="article__header">
                <h1>category</h1>
                <hr/>
                <img src="https://images.pexels.com/photos/776636/pexels-photo-776636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div>
            
            <div className="article__description">
                <h3>20 Jan 2021</h3>
                <h1>La France en Afrique : Pour ou contre?</h1>
                <h4>Source</h4>
                <h4>Par : Albert mouton</h4>
                <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem harum molestiae a illum culpa placeat magni quia eligendi amet voluptatibus perferendis vitae sapiente, ullam asperiores?
                </h5>  
            </div>
        </div>
    )
}

export default BodyArticle
