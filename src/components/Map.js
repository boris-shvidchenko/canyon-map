// ArcGIS classes
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Renderer from "@arcgis/core/renderers/Renderer";
// Hooks
import { useEffect } from 'react';

export default function MainMap() {

  useEffect(() => {
    // Apply API key to access ArcGIS services
    esriConfig.apiKey = process.env.REACT_APP_DEFAULT_KEY;
  
    // Create a new map
    const map = new Map({
      basemap: 'arcgis-topographic' // Basemap layer service
    });
  
    // Create a new map view to hold/display the map
    const view = new MapView({
      container: 'root',
      map: map,
      extent: {
          xmin: -108.149414,
          ymin: 36.450743,
          xmax: -115.092773,
          ymax: 42.19054,
          spatialReference: 4326
      },
    });

    // Define the style of the feature layer
    const featureStyle = {
        type: "simple",  
        symbol: {
            type: "simple-line",  
            color: [ 0, 0, 0, 1 ],
            width: 1.5
        }
    }

    // Define a feature layer to use
    const feature = new FeatureLayer({
      url: 'https://services5.arcgis.com/K2yvD247JkyVgWmg/arcgis/rest/services/canyons/FeatureServer/0',
      renderer: featureStyle
    })

    // Add feature to map
    map.add(feature, 0)

  }, [])

  return (
    <div className='h-screen w-full'></div>
  );
}