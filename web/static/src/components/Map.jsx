import * as L from "leaflet";
import { onMount } from "solid-js";


const Map = ()=>{

    onMount(() => {
        const map = L.map('map-div').setView([51.505, -0.09], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

        //L.control.mousePosition().addTo(map);

        let t1 = L.marker([51.505, -0.09]);
        t1.addTo(map);

        setTimeout(()=>map.flyTo({lat: 51.505, lng: 30}), 3000);
    })
    return <div id="map-div" class="h-3/4 w-full z-20"></div>
};

export default Map;