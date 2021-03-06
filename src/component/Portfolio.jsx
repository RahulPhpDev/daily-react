import React from 'react'
import Image from './subcomponent/Image'

const Portfolio = () => {

    return (
        <div className="flex flex-wrap">
            { [...Array(12)].map((v, i) => (
                <Image key={i} />
            ))}
        </div>
    );
}

export default Portfolio;