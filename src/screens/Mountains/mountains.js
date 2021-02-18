import React from 'react'

import './mountains.css'

import Mountain1 from './assets/photo-1544179516-b0878e1cbe48.jpg'
import Mountain2 from './assets/photo-1545161296-d9c2c241f2ad.jpg'
import Mountain3 from './assets/photo-1549880433-e556bbd93270.jpg'
import Mountain4 from './assets/photo-1553531384-cc64ac80f931.jpg';
import Mountain5 from './assets/photo-1477948879622-5f16e220fa42.jpg'
import Mountain6 from './assets/photo-1586600822178-26dec0f653a9.jpg'
import Mountain7 from './assets/photo-1589802829985-817e51171b92.jpg'
import Mountain8 from './assets/photo-1600588545434-1bcc100f7d58.jpg'

const mountainImages = [Mountain1, Mountain2, Mountain3, Mountain4, Mountain5, Mountain6, Mountain7, Mountain8]
const Mountains = () => {
    return (
        <div className="imagegallery-mountains">
            <h2 className='imagegallery-mountains-header'>Mountains</h2>
            <div className="imagegallery-mountains-images">
                {mountainImages.map((img) => (
                    <img src={img} className='imagegallery-mountains-image'/>
                ))}
            </div>
        </div>
    )
}

export default Mountains;  