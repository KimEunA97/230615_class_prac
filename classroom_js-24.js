//인스턴스

// ? 정적 멤버(static member) 방식으로 class, 활용
class CorePokemon {
  constructor(name, health, attack, defense) {

    this.name = "공욱재";
    this.health = 1000;
    this.attack = 20;
    this.defense = 500;

  }
}

const testPokemon = new CorePokemon();
// ? 결과적으로 객체가 '인스턴스(instance)'로 생성된다.
console.log(testPokemon)
// ? typeof와 같은 데이터 타입 검사기가 있는 것처럼 "해당 인스턴스인지" 검사하는 메서드도 마련되어있다.


//instanceof 는 인스턴스인지 검사한다.
//testPokemon이 CorePokemon으로 생성된 인스턴스인가?
console.log(testPokemon instanceof CorePokemon) //true
// * instanceof로 '어떤 생성자 함수'로부터 '생성된 인스턴스'인지 boolean 타입 리턴을 통해 확인할 수 있다.

// ? 자바스크립트(javsscript)에서는 아래의 리터럴 방식을 허용하지만,
// ? 객체지향 프로그래밍에서는 허용하지 않는다.

//인스턴스 아님
let literalCorePokemon = {
  name: "공욱재",
  health: 1000,
  attack: 20,
  defense: 500,

}

// ? 객체는 '변수'에 참조되었기 때문에, 별도의 인스턴스가 생성되지 않는다.

console.log(literalCorePokemon);
console.log(literalCorePokemon instanceof CorePokemon); //false


