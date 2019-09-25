/**
 * Formats money into a more readable way.
 * So 250090 becomes: 250,090
 *
 * @param {number}  price    The amount which will be formatted.
 *
 * @return {string} The formatted number with commas and stuff.
 */
export default (price) => {
  const priceStringArray = Array.from(price.toString());
  // We need to start adding the commas from the end for properly fomatting.
  for(let i = priceStringArray.length - 3; i >= 0; i -= 3) {
    if (i !== 0) {
      priceStringArray.splice(i, 0, ',');
    }
  }
  return priceStringArray.join('');
};
