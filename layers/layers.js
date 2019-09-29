var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cateos_La_Rioja_1 = new ol.format.GeoJSON();
var features_cateos_La_Rioja_1 = format_cateos_La_Rioja_1.readFeatures(json_cateos_La_Rioja_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cateos_La_Rioja_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cateos_La_Rioja_1.addFeatures(features_cateos_La_Rioja_1);
var lyr_cateos_La_Rioja_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cateos_La_Rioja_1, 
                style: style_cateos_La_Rioja_1,
                interactive: true,
                title: '<img src="styles/legend/cateos_La_Rioja_1.png" /> cateos_La_Rioja'
            });
var format_manifestaciones_La_Rioja_2 = new ol.format.GeoJSON();
var features_manifestaciones_La_Rioja_2 = format_manifestaciones_La_Rioja_2.readFeatures(json_manifestaciones_La_Rioja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manifestaciones_La_Rioja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manifestaciones_La_Rioja_2.addFeatures(features_manifestaciones_La_Rioja_2);
var lyr_manifestaciones_La_Rioja_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manifestaciones_La_Rioja_2, 
                style: style_manifestaciones_La_Rioja_2,
                interactive: true,
                title: '<img src="styles/legend/manifestaciones_La_Rioja_2.png" /> manifestaciones_La_Rioja'
            });
var format_minas_La_Rioja_3 = new ol.format.GeoJSON();
var features_minas_La_Rioja_3 = format_minas_La_Rioja_3.readFeatures(json_minas_La_Rioja_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minas_La_Rioja_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minas_La_Rioja_3.addFeatures(features_minas_La_Rioja_3);
var lyr_minas_La_Rioja_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minas_La_Rioja_3, 
                style: style_minas_La_Rioja_3,
                interactive: true,
                title: '<img src="styles/legend/minas_La_Rioja_3.png" /> minas_La_Rioja'
            });

lyr_Googlestreet_0.setVisible(true);lyr_cateos_La_Rioja_1.setVisible(true);lyr_manifestaciones_La_Rioja_2.setVisible(true);lyr_minas_La_Rioja_3.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_cateos_La_Rioja_1,lyr_manifestaciones_La_Rioja_2,lyr_minas_La_Rioja_3];
lyr_cateos_La_Rioja_1.set('fieldAliases', {'CATEO': 'CATEO', 'NOMBRE': 'NOMBRE', 'TITULAR': 'TITULAR', });
lyr_manifestaciones_La_Rioja_2.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'NOMBRE': 'NOMBRE', 'TITULAR': 'TITULAR', });
lyr_minas_La_Rioja_3.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'NOMBRE': 'NOMBRE', 'TITULAR': 'TITULAR', });
lyr_cateos_La_Rioja_1.set('fieldImages', {'CATEO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TITULAR': 'TextEdit', });
lyr_manifestaciones_La_Rioja_2.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'NOMBRE': 'TextEdit', 'TITULAR': 'TextEdit', });
lyr_minas_La_Rioja_3.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'NOMBRE': 'TextEdit', 'TITULAR': 'TextEdit', });
lyr_cateos_La_Rioja_1.set('fieldLabels', {'CATEO': 'header label', 'NOMBRE': 'inline label', 'TITULAR': 'inline label', });
lyr_manifestaciones_La_Rioja_2.set('fieldLabels', {'EXPEDIENTE': 'header label', 'NOMBRE': 'inline label', 'TITULAR': 'inline label', });
lyr_minas_La_Rioja_3.set('fieldLabels', {'EXPEDIENTE': 'header label', 'NOMBRE': 'inline label', 'TITULAR': 'inline label', });
lyr_minas_La_Rioja_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});