import React from 'react'
import Card from '../components/Card'

export default function Search() {
    return (
        <div className="content-wrapper">
            <div className="heading-text"><h6>200 result of search "bitcoin"</h6></div>
            <div className="cards-content" >
                {/* <Card key="1" />
                <Card key="2"/>
                <Card key="3"/>
                <Card key="4"/> */}
            </div>
            <div className="load-more">
                <button className="btn">Load More</button>
            </div>
        </div>
    )
}
