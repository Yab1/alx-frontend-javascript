export default function getListStudentIds(input) {
  return Array.isArray(input) ? input.map((ele) => ele.id) : []
}
