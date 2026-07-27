export type PlaceLike = {
  name?: string;
  address?: string;
  lat?: number;
  lng?: number;
  googleMapsUrl?: string;
};

export function buildMapsSearchUrl(place?: PlaceLike) {
  if (!place) return '';
  if (place.googleMapsUrl) return place.googleMapsUrl;
  const query = place.lat !== undefined && place.lng !== undefined
    ? `${place.lat},${place.lng}`
    : place.address || place.name || '';
  return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : '';
}

export function buildDirectionsUrl(place?: PlaceLike, mode = 'transit') {
  if (!place) return '';
  const destination = place.lat !== undefined && place.lng !== undefined
    ? `${place.lat},${place.lng}`
    : place.address || place.name || '';
  return destination
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=${encodeURIComponent(mode)}`
    : '';
}
