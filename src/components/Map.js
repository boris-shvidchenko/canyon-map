// ArcGIS classes
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
// Hooks
import { useContext, useEffect } from 'react';
// Context
import { Context } from '../App';

export default function MainMap() {

  // Obtain state from context
  const { state } = useContext(Context);

  useEffect(() => {
    // Apply API key to access ArcGIS services
    esriConfig.apiKey = process.env.REACT_APP_DEFAULT_KEY;
  
    // Create a new map
    const map = new Map({
      basemap: state.basemap, 
      ground: 'world-elevation'
    });

    // Creates a new 2D/3D view
    const view = state.twoDimensional ? 
      new MapView({
        container: 'root',
        map: map,
        extent: {
            xmin: -108.149414,
            ymin: 36.450743,
            xmax: -115.092773,
            ymax: 42.19054,
            spatialReference: 4326
        },
        // Removes the +/- widget from the map
        ui: {
          components: ["attribution"]
        },
        // Disables map rotation with right mouse click
        constraints: {
          rotationEnabled: false
        }
      }) :
      new SceneView({
        container: 'root',
        map: map,
        camera: {
            position: {
                x: -111.513936,
                y: 39.133887,
                z: 2000000
            }
        },
        // Removes the +/- and navigation widgets from the map
        ui: {
          components: ["attribution"]
        }      
      });

    // Create a template for popups
    const popupTemplate = {
        title: '{Name}',
        content: [{
            type: 'fields',
            fieldInfos: [{
                fieldName: 'Rating',
                label: 'Rating'
            }]
        }]
    };

    // Define the style of the feature layer
    const featureStyle = {
        type: "simple",  
        symbol: {
            type: "simple-line",  
            color: [ 255, 51, 0, 1 ],
            width: 1.5
        }
    };

    // Define a feature layer to use
    const feature = new FeatureLayer({
      url: 'https://services5.arcgis.com/K2yvD247JkyVgWmg/arcgis/rest/services/canyons/FeatureServer/0',
      renderer: featureStyle,
      popupTemplate: popupTemplate
    });
 
    // Add feature to map
    map.add(feature, 0);

    // Add compass widget to map if 3D view is selected
    if (!state.twoDimensional) view.ui.add('compass', 'top-left');

    // Customize the (2D map) popup
    view.popup = {
        dockOptions: {
            buttonEnabled: false,
            breakpoint: false
        },
        viewModel: {
            includeDefaultActions: false,
        },
        collapseEnabled: false
    };

  }, [state.basemap, state.twoDimensional])

  return (
    <div className='h-screen w-full'></div> 
  );
}