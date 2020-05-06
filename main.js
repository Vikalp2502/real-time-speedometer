'use strict';

const speedDiv = document.getElementById('speed')

// Check for API
if (!'geolocation' in navigator) {
  alert('No geolocation API available')
  speedDiv.innerHTML = 'No API'
} else {
	
  const WID = navigator.geolocation.watchPosition(
    
    // Success
    function (loc) {
      if (loc.coords.speed) {
        console.log('Got speed:',loc.coords.speed)
        // convert to mph and display
        speedDiv.innerHTML = (2.23693629205*loc.coords.speed).toFixed(1)
      } else {
        speedDiv.innerHTML = '0.0'
      }
    },
    
    // Error
    function() {
      console.error('Could not determine GPS position')
    },
    
    // Options
    {
      enableHighAccuracy: true,
    }
    
  )
}
