export async function getSunsetForMountain(coords) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lng}&date=today`)
    let data = await response.json()
    return data.results
  }