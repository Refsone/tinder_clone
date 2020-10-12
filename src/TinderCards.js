import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

import './TinderCards.css'

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name: 'Jeff Bezoz',
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ])
    const [lastDirection, setLastDirection] = useState(false)

    const swiped = (direction, nameToDelete) => {
        console.log("removing", nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = name => {
        console.log(name + "left the screen")
    }

    return (
        <div className="TinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
