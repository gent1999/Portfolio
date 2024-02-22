import React from 'react';
import GraphicProjectThumbnail from './GraphicProjectThumbnail';

const GraphicsLanding = () => {
    return (
        <div className="container mx-auto px-4 pt-5 flex flex-col items-center"> {/* Center the container */}
            <div className="flex flex-col md:flex-row items-center md:items-start thumbnail-fade-in"> {/* Add md:items-start for top alignment on medium and larger screens */}
                {/* Graphic Design Projects */}
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/lil_lean/Forever_Motion.png"
                        title="Photoshop"
                    />
                </a>
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/wolfpack/Eclipse_3.png"
                        title="Photoshop"
                    />
                </a>
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/lil_lean/AINNOSLEEP.png"
                        title="Photoshop"
                    />
                </a>
            </div>
        </div>
    )
}

export default GraphicsLanding;