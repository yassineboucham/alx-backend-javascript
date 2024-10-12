export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a string');
    }
  }

  set students(value) {
    if (value instanceof Array) {
      for (const element of value) {
        if (!(typeof element === 'string')) {
          throw TypeError('Students must be an array of strings');
        }
        this._students = value;
      }
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
