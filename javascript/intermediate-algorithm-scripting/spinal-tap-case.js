// INTERMEDIATE ALGORITHM SCRIPTING

// Spinal Tap Case
function spinalCase(str) {
  return str
    .trim()
    .split(/[\W^_]|(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}

spinalCase('   ThisIs_Spinal Tap');