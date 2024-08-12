ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-116.668832, 31.865599, -116.644205, 31.878743]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_delitos_pedregal_playitas_1 = new ol.format.GeoJSON();
var features_delitos_pedregal_playitas_1 = format_delitos_pedregal_playitas_1.readFeatures(json_delitos_pedregal_playitas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_delitos_pedregal_playitas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delitos_pedregal_playitas_1.addFeatures(features_delitos_pedregal_playitas_1);
var lyr_delitos_pedregal_playitas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delitos_pedregal_playitas_1, 
                style: style_delitos_pedregal_playitas_1,
                popuplayertitle: "delitos_pedregal_playitas",
                interactive: true,
                title: '<img src="styles/legend/delitos_pedregal_playitas_1.png" /> delitos_pedregal_playitas'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_delitos_pedregal_playitas_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_delitos_pedregal_playitas_1];
lyr_delitos_pedregal_playitas_1.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'MES': 'MES', 'HECHO_COLO': 'HECHO_COLO', 'HECHO_DELI': 'HECHO_DELI', 'ANIO': 'ANIO', 'municipio_': 'municipio_', });
lyr_delitos_pedregal_playitas_1.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'MES': 'TextEdit', 'HECHO_COLO': 'TextEdit', 'HECHO_DELI': 'TextEdit', 'ANIO': 'TextEdit', 'municipio_': 'TextEdit', });
lyr_delitos_pedregal_playitas_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'MES': 'inline label - visible with data', 'HECHO_COLO': 'inline label - visible with data', 'HECHO_DELI': 'inline label - visible with data', 'ANIO': 'inline label - visible with data', 'municipio_': 'hidden field', });
lyr_delitos_pedregal_playitas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});