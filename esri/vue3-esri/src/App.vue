<script setup>
import WebMap from "@arcgis/core/WebMap.js";
// import { Map } from "esri/Map";
import Map from "@arcgis/core/Map.js";
// import { FeatureLayer } from "esri/layers/FeatureLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
// import { MapView } from "esri/views/MapView";
import MapView from "@arcgis/core/views/MapView.js";
import { onMounted } from "vue";
import imagerlayer from '@/components/imagerylayer.vue'
onMounted(()=>{
     const map = new Map({
      basemap: "hybrid"
    });
    const view = new MapView({
          container: "viewDiv",
          map: map,

          extent: {
            // autocasts as new Extent()
     xmin: -9177811,
            ymin: 4247000,
            xmax: -9176791,
            ymax: 4247784,
            spatialReference: 102100
          }
        });
        const featureLayer = new FeatureLayer({
          url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
        });
        map.add(featureLayer);
})
   
</script>

<template>
    <!-- <div id="viewDiv"></div> -->
    7777
    <imagerlayer></imagerlayer>
</template>

<style scoped>
html,
body,
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
</style>
