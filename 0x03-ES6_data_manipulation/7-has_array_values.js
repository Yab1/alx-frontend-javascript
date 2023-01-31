export default function cleanSet(set, array) {
  return array.every((ele) => set.has(ele));
}
