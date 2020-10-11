import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center = { lat: 26.8206, lng: 30.8025 }, zoom = 5, onClick }) => {
	const [marker, setMarker] = useState(null)
	const [maps, setMaps] = useState(null)
	const [map, setMap] = useState(null)

	const handleClick = ({ x, y, lat, lng, event }) => {
		// Allow only 1 marker to be present
		if (marker) {
			marker.setPosition({ lat, lng })
		} else {
			const marker = new maps.Marker({
				position: { lat, lng },
				map,
				title: 'Hello World!'
			})
			setMarker(marker)
		}

		onClick({ lat, lng })
	}
	return (
	// Important! Always set the container height explicitly
		<div style={{ height: '200px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDOPob-Y_ubilvNv0Z7MoHdVogySEQ7mMg' }}
				defaultCenter={center}
				defaultZoom={zoom}
				onClick={handleClick}
				onGoogleApiLoaded={({ map, maps }) => {
					setMaps(maps)
					setMap(map)
				}}
			>
			</GoogleMapReact>
		</div>
	)
}

export default Map
