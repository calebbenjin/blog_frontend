import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
 
  const url = media.data.map(img => img.attributes.url);
  const imageUrl = getStrapiURL(url);
  return  imageUrl;
}