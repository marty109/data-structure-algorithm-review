class HashTable {
  constructor() {
    this.table = []
  }

  static hashCode(key) {
    let hash = 0
    for (let k of key) {
      hash += k.charCodeAt()
    }
    return hash % 37
  }
}