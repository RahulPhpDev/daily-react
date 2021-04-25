import React from 'react'

import Tag from './subcomponent/Tag';


const Expertise = ({ expertise }) => {
    return (
        <>
            {expertise.map( expert => <Tag key={expert}>{ expert }</Tag> )}
        </>
    )
}

export default Expertise;