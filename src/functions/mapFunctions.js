// ArcGIS classes
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

// Apply API key to access ArcGIS services
function apiConfig() {
    esriConfig.apiKey = process.env.REACT_APP_DEFAULT_KEY;
}

function createMap(state) {

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
            components: ['attribution']
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
            padding: {
                top: 25,
                left: 20
            },
            components: ['attribution']
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
        type: 'simple',  
        symbol: {
            type: 'simple-line',  
            color: [ 255, 51, 0, 1 ],
            width: 1.5
        }
    };

    // Define label properties
    const featureLabels = {
        symbol: {
            type: 'text',
            color: 'black',
            haloColor: 'white',
            haloSize: 1,
            font: {
            family: 'sans-serif',
            size: 12
            }
        },
        maxScale: 0,
        minScale: 100000,
        repeatLabel: false,
        labelPlacement: 'above-center',
        labelExpressionInfo: {
            expression: '$feature.Name'
        }
    };

    // Add a filter, if selected by user
    const featureFilter = obtainFilter(state);

    // Define a feature layer to use
    const feature = new FeatureLayer({
        url: 'https://services5.arcgis.com/K2yvD247JkyVgWmg/arcgis/rest/services/canyons/FeatureServer/0',
        renderer: featureStyle,
        labelingInfo: featureLabels,
        popupTemplate: popupTemplate,
        definitionExpression: featureFilter
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
}

// Compiles a rating to filter via SQL, based on the user's choices
function obtainFilter(state) {
    if (state.filter.tech === null && state.filter.water === null && state.filter.time === null) {
        return null;
    } else if (state.filter.tech === null && state.filter.water === null) {
        return `Rating = '2A${state.filter.time}' OR Rating = '2B${state.filter.time}' OR Rating = '2C${state.filter.time}' OR Rating = '3A${state.filter.time}' OR Rating = '3B${state.filter.time}' OR Rating = '3C${state.filter.time}' OR Rating = '4A${state.filter.time}' OR Rating = '4B${state.filter.time}' OR Rating = '4C${state.filter.time}'`;
    } else if (state.filter.tech === null && state.filter.time === null) { 
        return `Rating = '2${state.filter.water}I' OR Rating = '2${state.filter.water}II' OR Rating = '2${state.filter.water}III' OR Rating = '2${state.filter.water}IV' OR Rating = '2${state.filter.water}V' OR Rating = '2${state.filter.water}VI' OR Rating = '3${state.filter.water}I' OR Rating = '3${state.filter.water}II' OR Rating = '3${state.filter.water}III' OR Rating = '3${state.filter.water}IV' OR Rating = '3${state.filter.water}V' OR Rating = '3${state.filter.water}VI' OR Rating = '4${state.filter.water}I' OR Rating = '4${state.filter.water}II' OR Rating = '4${state.filter.water}III' OR Rating = '4${state.filter.water}IV' OR Rating = '4${state.filter.water}V' OR Rating = '4${state.filter.water}VI'`;
    } else if (state.filter.water === null && state.filter.time === null) {
        return `Rating = '${state.filter.tech}AI' OR Rating = '${state.filter.tech}AII' OR Rating = '${state.filter.tech}AIII' OR Rating = '${state.filter.tech}AIV' OR Rating = '${state.filter.tech}AV' OR Rating = '${state.filter.tech}AVI' OR Rating = '${state.filter.tech}BI' OR Rating = '${state.filter.tech}BII' OR Rating = '${state.filter.tech}BIII' OR Rating = '${state.filter.tech}BIV' OR Rating = '${state.filter.tech}BV' OR Rating = '${state.filter.tech}BVI' OR Rating = '${state.filter.tech}CI' OR Rating = '${state.filter.tech}CII' OR Rating = '${state.filter.tech}CIII' OR Rating = '${state.filter.tech}CIV' OR Rating = '${state.filter.tech}CV' OR Rating = '${state.filter.tech}CVI'`;
    } else if (state.filter.tech === null) {
        return `Rating = '2${state.filter.water}${state.filter.time}' OR Rating = '3${state.filter.water}${state.filter.time}' OR Rating = '4${state.filter.water}${state.filter.time}'`;
    } else if (state.filter.water === null) {
        return `Rating = '${state.filter.tech}A${state.filter.time}' OR Rating = '${state.filter.tech}B${state.filter.time}' OR Rating = '${state.filter.tech}C${state.filter.time}'`;
    } else if (state.filter.time === null) {
        return `Rating = '${state.filter.tech}${state.filter.water}I' OR Rating = '${state.filter.tech}${state.filter.water}II' OR Rating = '${state.filter.tech}${state.filter.water}III' OR Rating = '${state.filter.tech}${state.filter.water}IV' OR Rating = '${state.filter.tech}${state.filter.water}V' OR Rating = '${state.filter.tech}${state.filter.water}VI'`;
    } else {
        return `Rating = '${state.filter.tech + state.filter.water + state.filter.time}'`;
    }
}

export {
    createMap,
    apiConfig
}