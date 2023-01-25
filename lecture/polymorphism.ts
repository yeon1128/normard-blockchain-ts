interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T>;
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
// 타입 스크립트는 제네릭을 바탕으로 call signiture을 만들어 줌
const stringsStorage = new LocalStorage<string>();
stringsStorage.get("cat");
stringsStorage.set("hello", "how are you?");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("true");
booleansStorage.set("true", true);
