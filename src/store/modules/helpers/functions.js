export function countItems(arr = []) {
  /**
   * Counts occurrences in array, returns object with counted items
   * @param arr An array of strings or numbers
   */
  const obj = {};
  arr.forEach(tag => {
    obj[tag] = obj[tag] + 1 || !!obj[tag] + 1;
  });
  return obj;
}

export function sortNested(entries, i = 1) {
  /**
   * Sorts two dimensional array in descending order, returns sorted array
   * @param entries An array, obtained via Object.entry method call
   * @param i Sorting index
   */
  entries.sort((prev, next) => {
    return next[i] - prev[i];
  });
  return entries;
}

export function splitToWords(
  arr = [],
  prop = "tags",
  re = "^[a-zA-Z]+$",
  sep = " "
) {
  /**
   * Iterates over an array of objects, returns an array of RE matched words.
   * @param arr An array, obtained via Object.entry method call
   * @param prop An object property to split on
   * @param sep Split parameter
   * @param re RegExp validator
   */
  const words = [];
  arr.forEach(obj => {
    obj[prop].split(sep).forEach(word => {
      if (word.match(re)) {
        words.push(word);
      }
    });
  });
  return words;
}
