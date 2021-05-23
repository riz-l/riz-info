// Import: Packages
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

// Util: sanityImageUrl
export function sanityImageUrl(source) {
  return builder.image(source);
}
