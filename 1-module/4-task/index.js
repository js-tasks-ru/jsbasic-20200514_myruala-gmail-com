/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerStr = str.toUpperCase();

  return lowerStr.includes('1XBET') || lowerStr.includes('XXX') ;
}
