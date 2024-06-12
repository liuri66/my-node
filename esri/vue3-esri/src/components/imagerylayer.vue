<template>
    <div id="viewDiv"></div>
</template>

<script setup>

    import Map from "@arcgis/core/Map.js";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer.js";
    import MapView from "@arcgis/core/views/MapView.js";
    import { onMounted } from "vue";
    onMounted(()=>{
        // 创建一个图像图层
        const layer = new ImageryLayer({
            url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
            format:"jpgpng"
        });
        //添加图像图层到地图
        const map = new Map({
            basemap:"gray-vector",
            layers:[layer]
        });
        const view =new MapView({
            container:"viewDiv",
            map:map,
            center:[-100,40],
            zoom:4
        });
    })

</script>
<style scoped>

#viewDiv {
/*<!-- 记得设置宽高 -->*/
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
</style>