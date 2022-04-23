import * as React from 'react';
import Map from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { Marker } from 'react-map-gl';


function Maps({searchResults}) {

    const coordinates = searchResults.map((results)=>({
        longitude: results.long,
        latitude : results.lat
    }))

    const center = getCenter(coordinates);

    const markers =  searchResults.map((result)=>(
      <div>
        <Marker latitude={result.lat} longitude={result.long}>
         <p>📌</p>
        </Marker>
      </div>
    ));

    console.log(markers);
   
  return (
    <div className='relative'>
        <Map
         mapStyle='mapbox://styles/kartikeysharmaks/cl2blw1og006r14o12ydv74rf'
         mapboxAccessToken={process.env.mapbox_key}
         style={{minWidth: 600, maxHeight:"100%"}}
         initialViewState={{
            longitude:  center.longitude,
            latitude: center.latitude ,
            zoom: 8,
          }}
        >
      
        </Map>
    </div>
  );
};

export default Maps;