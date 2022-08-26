 async function sendCoordinate() {
     
 if ("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      document.getElementById("latitude").textContent = lat;
      document.getElementById("longitude").textContent = lon;
      const response = await fetch('https://vit-map.herokuapp.com/api/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lat,
            lon
        }),
    })
    const data = await response.json()
    console.log(data);
    });
} else {
  console.log("geolocation not available");
}
  
}
const but1 = document.getElementById("startDataTransfer");
const but2 = document.getElementById("stopDataTransfer");
but1.onclick = function () {
  const myInterval = setInterval(sendCoordinate,5000);
}
but2.onclick = function () {
  clearInterval(myInterval);
}