export default function getStudentIdsSum(students) {
  let sum = students.reduce(sm, 0);
  function sm(accumulator, item){
    return accumulator + item.id;
  }
  return sum;
}
