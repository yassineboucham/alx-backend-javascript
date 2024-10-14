export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // When the class is cast into a String, it should return the location.
  toString() {
    return this._location;
  }

  // When the class is cast into a Number, it should return the size.
  valueOf() {
    return this._size;
  }
}
