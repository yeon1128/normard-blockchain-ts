// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickName: string
//   ) {}
// }
// const nico = new Player("nico", "last", "니꼬");
// nico.firstName // error ⭕️
// nico.nickName; // error ❌

/** 📍 추상 클래스
 * 다른 클래스가 상속받을 수 있는 클래스
 * 하지만 추상클래스는 직접 새로운 인스턴스를 만들 수는 없음
 * const nico = new User() // error ⭕️
 * 정리하자면 only 상속만 가능한 클래스
 */
/** 📍 추상 메소드
 * 추상 클래스를 상속받는 모든 것들이 구현해야 하는 메소드
 */
/** 📍 protected
 * property를 private으로 만들었다면 클래스를 상속받는다고 해도 해당 property를 사용할 수 없음
 * protected 를 사용하면 상속받은 클래스에서 사용가능
 * 하지만 클래스 밖에서는 사용불가
 */
abstract class User {
  constructor(
    // private firstName: string,
    // private lastName: string,
    // // public nickName: string
    // private nickName: string

    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void; // call signature
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //   private getFullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   protected getFullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
}
class Player extends User {
  getNickName() {
    // console.log(this.nickName); // private - error ⭕️
    console.log(this.nickName); // protected - error ❌
    // this.getFullName();
  }
}
const nico = new Player("nico", "last", "니꼬");
// nico.getFullName();
// nico.getFullName(); // private - error ⭕️
// nico.firstName; // protected - error ⭕️
