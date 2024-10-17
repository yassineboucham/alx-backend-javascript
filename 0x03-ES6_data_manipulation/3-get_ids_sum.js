export default function getStudentIdsSum(students) {
  function sm(accumulator, item) {
    return accumulator + item.id;
  }
  const sum = students.reduce(sm, 0);
  return sum;
}
