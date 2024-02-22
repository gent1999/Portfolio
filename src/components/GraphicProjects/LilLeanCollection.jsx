import React from 'react';
import GraphicProjectThumbnail from './GraphicProjectThumbnail';

const LilLeanCollection = () => {
    return (
        <div className="container mx-auto px-4 pt-10 flex flex-col items-center"> {/* Center the container */}
            <h2 className="text-2xl mb-6 projects-fade-in flex items-center"> {/* Add flex and items-center to align the arrow and text */}
                Lil Lean Collection
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start thumbnail-fade-in"> {/* Add md:items-start for top alignment on medium and larger screens */}
                {/* Graphic Design Projects */}
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/lil_lean/Forever_Motion.png"
                        title="Forever Motion"
                    />
                </a>
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/lil_lean/Slime_Business.png"
                        title="Slime Business"
                    />
                </a>
                <a href="..." target="_blank" rel="noopener noreferrer"> {/* Add your graphic design project links */}
                    <GraphicProjectThumbnail
                        image="/graphics_images/lil_lean/Untouchable.png"
                        title="Untouchable"
                    />
                </a>
            </div>
        </div>
    )
}

export default LilLeanCollection;
