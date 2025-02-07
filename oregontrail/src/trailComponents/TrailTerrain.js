export const TrailTerrain = ({ terrain, weather, image }) => {
    const placeholder = "./images/grassland.jpg";
    const finalImage = image || placeholder;

    return (
        <div className="trail-terrain">
            <img
                src={finalImage}
                alt={terrain}
                className="terrain-image"
                onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                    e.target.src = placeholder;
                }}
            />
            <div className="terrain-info">
                <p><strong>Terrain:</strong> {terrain || 'Unknown'}</p>
                <p><strong>Weather:</strong> {weather || 'Unknown'}</p>
            </div>
        </div>
    );
};
