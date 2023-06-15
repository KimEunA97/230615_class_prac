class CorePokemon {
  constructor(name, health, attack, defense) {

    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;

  }
}

//방어력 왜 이리 높아요?
const testPokemon = new CorePokemon('공욱재', 1000, 20, 1000);
console.log(testPokemon);
// CorePokemon { name: '공욱재', health: 1000, attack: 20, defense: 1000 }


//extends는 이미 존재하는 class를 추가로 확장해서 쓰겠다는 말
// CorePokemon를 extends로 확장하였다는 뜻으로 WrapPokemon class 선언
class WrapPokemon extends CorePokemon {

  constructor(name, health, attack, defense, type) {

    // super()라는 특별한 상속 메서드를 사용하면, 부모 클래스의 생성자를 호출할 수 있다.
    super(name, health, attack, defense)

    // type key는 WrapPokemon에서만 사용할 수 있는 key다.
    // 즉 CorePokemon 클래스에서는 사용할 수 없다.
    this.type = type;

  }
 
}

//CorePokemon에는 없지만 WrapPokemon에서 확장한 type에 해당하는 "전기"라는 값을 인자로 넣었다.
const pikapika = new WrapPokemon('피카츄', 100, 50, 30, "전기");

console.log(pikapika);
// WrapPokemon { name: '피카츄', health: 100, attack: 50, defense: 30, type: '전기' }
