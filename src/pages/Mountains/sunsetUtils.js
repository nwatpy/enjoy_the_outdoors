export async function getSunriseAndSunsetForMountain(coords) {
  let response = await fetch(`https://api.sunrisesunset.io/json?lat=${coords.lat}&lng=${coords.lng}`);
  let data = await response.json();
  return data;
}