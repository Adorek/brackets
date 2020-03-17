module.exports = function check(str, bracketsConfig) {
  val = bracketsConfig.map(e => e.join("")).join("?").replace(/[{}()|[\]]/g, '\\$&').replace(/\?/g, '|');
  while (new RegExp(val, "g").test(str)) {
    str = str.replace(new RegExp(val, "g"), "")     
  }
  return !str.length;
}
