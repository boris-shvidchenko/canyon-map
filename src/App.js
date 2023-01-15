import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { useLayoutEffect } from 'react';

export default function App() {

  useLayoutEffect(() => {
    esriConfig.apiKey = process.env.REACT_APP_DEFAULT_API_KEY;
  
    const map = new Map({
      basemap: 'arcgis-topographic' // Basemap layer service
    });
  
    const view = new MapView({
      container: 'root',
      map: map,
      extent: {
          xmin: -122.9810734,
          ymin: 36.2029589,
          xmax: -118.7068497,
          ymax: 39.9165496,
          spatialReference: 4326
      },
    });
  }, [])

  return (
    <div className='h-screen w-full'></div>
  );
}


