// SPINAL TAP CASE
/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */
function spinalCase(str) {
  return str
    .trim()
    .split(/[\W^_]|(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}

spinalCase('   ThisIs_Spinal Tap');