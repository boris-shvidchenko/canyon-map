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

    // Filter to use with the feature layer
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

// Compiles a rating to filter, based on the user's choices
function obtainFilter(state) {
    if (state.filter.tech === null && state.filter.water === null && state.filter.time === null) {
        return null;
    } else if (state.filter.tech === null) {
        return `Rating = '${'2' + state.filter.water + state.filter.time}' AND Rating = '${'3' + state.filter.water + state.filter.time}' AND Rating = '${'4' + state.filter.water + state.filter.time}'`;
    } else if (state.filter.water === null) {
        return `Rating = '${state.filter.tech + 'A' + state.filter.time}' AND Rating = '${state.filter.tech + 'B' + state.filter.time}' AND Rating = '${state.filter.tech + 'C' + state.filter.time}'`;
    } else if (state.filter.time === null) {
        return `Rating = '${state.filter.tech + state.filter.water + 'I'}' AND Rating = '${state.filter.tech + state.filter.water + 'II'}' AND Rating = '${state.filter.tech + state.filter.water + 'III'}' AND Rating = '${state.filter.tech + state.filter.water + 'IV'}' AND Rating = '${state.filter.tech + state.filter.water + 'V'}' AND Rating = '${state.filter.tech + state.filter.water + 'VI'}'`;
    } else if (state.filter.tech === null && state.filter.water === null) {
        return `Rating = '${'2A' + state.filter.time}' AND Rating = '${'2B' + state.filter.time}' AND Rating = '${'2C' + state.filter.time}' AND Rating = '${'3A' + state.filter.time}' AND Rating = '${'3B' + state.filter.time}' AND Rating = '${'3C' + state.filter.time}' AND Rating = '${'4A' + state.filter.time}' AND Rating = '${'4B' + state.filter.time}' AND Rating = '${'4C' + state.filter.time}'`;
    } else if (state.filter.tech === null && state.filter.time === null) { 
        return `Rating = '${'2' + state.filter.water + 'I'}' AND Rating = '${'2' + state.filter.water + 'II'}' AND Rating = '${'2' + state.filter.water + 'III'}' AND Rating = '${'2' + state.filter.water + 'IV'}' AND Rating = '${'2' + state.filter.water + 'V'}' AND Rating = '${'2' + state.filter.water + 'VI'}' AND Rating = '${'3' + state.filter.water + 'I'}' AND Rating = '${'3' + state.filter.water + 'II'}' AND Rating = '${'3' + state.filter.water + 'III'}' AND Rating = '${'3' + state.filter.water + 'IV'}' AND Rating = '${'3' + state.filter.water + 'V'}' AND Rating = '${'3' + state.filter.water + 'VI'}' AND Rating = '${'4' + state.filter.water + 'I'}' AND Rating = '${'4' + state.filter.water + 'II'}' AND Rating = '${'4' + state.filter.water + 'III'}' AND Rating = '${'4' + state.filter.water + 'IV'}' AND Rating = '${'4' + state.filter.water + 'V'}' AND Rating = '${'4' + state.filter.water + 'VI'}'`;
    } else {
        return `Rating = '${state.filter.tech + 'AI'}' AND Rating = '${state.filter.tech + 'AII'}' AND Rating = '${state.filter.tech + 'AIII'}' AND Rating = '${state.filter.tech + 'AIV'}' AND Rating = '${state.filter.tech + 'AV'}' AND Rating = '${state.filter.tech + 'AVI'}' AND Rating = '${state.filter.tech + 'BI'}' AND Rating = '${state.filter.tech + 'BII'}' AND Rating = '${state.filter.tech + 'BIII'}' AND Rating = '${state.filter.tech + 'BIV'}' AND Rating = '${state.filter.tech + 'BV'}' AND Rating = '${state.filter.tech + 'BVI'}' AND Rating = '${state.filter.tech + 'CI'}' AND Rating = '${state.filter.tech + 'CII'}' AND Rating = '${state.filter.tech + 'CIII'}' AND Rating = '${state.filter.tech + 'CIV'}' AND Rating = '${state.filter.tech + 'CV'}' AND Rating = '${state.filter.tech + 'CVI'}'`;
    } 
}

export {
    createMap,
    apiConfig
}

    
    
    