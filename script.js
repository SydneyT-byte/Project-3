function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };

  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  const map = new google.maps.Map(mapDiv, {
    center: chicago,
    zoom: 11,
    mapTypeId: "roadmap"
  });

  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    title: "Chicago Area"
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("questions-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nmy.email@example.com");
    });
  }
});
