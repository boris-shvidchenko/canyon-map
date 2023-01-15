import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    esriConfig.apiKey = process.env.REACT_APP_DEFAULT_KEY;
  
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

    const feature = new FeatureLayer({
      url: 'https://services5.arcgis.com/K2yvD247JkyVgWmg/arcgis/rest/services/canyons/FeatureServer/0'
    })

    map.add(feature, 0)

  }, [])

  return (
    <div className='h-screen w-full'></div>
  );
}


