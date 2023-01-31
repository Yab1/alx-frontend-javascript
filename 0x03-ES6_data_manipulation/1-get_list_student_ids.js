export default function getListStudentIds(input) {
  // solution One
  //   if (typeof input === 'object') {
  //     const arrObjIndex = Object.keys(input)
  //     return arrObjIndex.map((ele) => input[ele].id)
  //   } else return []
  //updated solution
  return Array.isArray(input) ? input.map((ele) => ele.id) : []
}
