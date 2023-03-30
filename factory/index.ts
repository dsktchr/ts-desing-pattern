// 生成したいオブジェクトのインターフェースを定義する
interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodDoor implements Door {
  #width: number;
  #height: number;

  constructor(width: number, height: number) {
    this.#width = width;
    this.#height = height;
  }

  public getWidth(): number {
    return this.#width;
  }

  public getHeight(): number {
    return this.#height;
  }
}

class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodDoor(width, height);
  }
}

function main() {
  const woodDoor = DoorFactory.makeDoor(10, 20);

  console.log(woodDoor.getHeight());
  console.log(woodDoor.getWidth());

  console.trace(woodDoor);
}

main();
