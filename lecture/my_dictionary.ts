type Words = {
  [key: string]: string; // property의 이름은 모르지만 type만을 알 때 사용
  //   [whatever: string]: string;
  //   [key: number]: string;
};
// let dict: Word = {
//   potato: "food",
//   1: "food",
//   2: "",
//   3: " ",
// };
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(word: Word) {
    delete this.words[word.term];
  }
  update(word: Word, term: string, def: string) {
    this.words[def] = def;
    this.words[term] = term;
  }
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
