var wms_layers = [];


        var lyr_GOOGLEMAPS_0 = new ol.layer.Tile({
            'title': 'GOOGLE MAPS',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TEXT_1 = new ol.format.GeoJSON();
var features_TEXT_1 = format_TEXT_1.readFeatures(json_TEXT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEXT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEXT_1.addFeatures(features_TEXT_1);
var lyr_TEXT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEXT_1, 
                style: style_TEXT_1,
                interactive: true,
                title: 'TEXT'
            });
var format_POLYGONS_2 = new ol.format.GeoJSON();
var features_POLYGONS_2 = format_POLYGONS_2.readFeatures(json_POLYGONS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLYGONS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYGONS_2.addFeatures(features_POLYGONS_2);
var lyr_POLYGONS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLYGONS_2, 
                style: style_POLYGONS_2,
                interactive: true,
    title: 'POLYGONS<br />\
    <img src="styles/legend/POLYGONS_2_0.png" /> 0-ADJOINING<br />\
    <img src="styles/legend/POLYGONS_2_1.png" /> 0-PARENT PLOT<br />\
    <img src="styles/legend/POLYGONS_2_2.png" /> C-PROP-BNDY<br />\
    <img src="styles/legend/POLYGONS_2_3.png" /> <br />'
        });

lyr_GOOGLEMAPS_0.setVisible(true);lyr_TEXT_1.setVisible(true);lyr_POLYGONS_2.setVisible(true);
var layersList = [lyr_GOOGLEMAPS_0,lyr_TEXT_1,lyr_POLYGONS_2];
lyr_TEXT_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_POLYGONS_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_TEXT_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_POLYGONS_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_TEXT_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_POLYGONS_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'inline label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_POLYGONS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});