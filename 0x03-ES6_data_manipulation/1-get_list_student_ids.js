export default function getListStudentIds(input) {
  if (!Array.isArray(input)) {
    return []
  }
  return input.map((ele) => ele.id)
}
