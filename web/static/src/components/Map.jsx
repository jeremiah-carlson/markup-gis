import * as L from "leaflet";
import { onMount } from "solid-js";


const Map = ()=>{

    onMount(() => {
        const map = L.map('map-div').setView([51.505, -0.09], 13);;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    })
    return <div id="map-div" style="height:300px" class="z-20"></div>
};

export default Map;