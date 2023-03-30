// Door
interface Door2 {
  getDescription();
}

// 木製のドア
class WoodDoor2 implements Door2 {
  getDescription() {
    console.log("木製のドア");
  }
}

class IronDoor implements Door2 {
  getDescription() {
    console.log("鉄製のドア");
  }
}

interface DoorFittingExpert {
  getDescription();
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("鉄製のドア専門です");
  }
}

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("木製のドア担当しかできません");
  }
}

// 抽象ファクトリクラス
// 同様の性質のものを生産するクラス
interface DoorFactory2 {
  makeDoor(): Door2;
  makeFittingExpert(): DoorFittingExpert;
}

class WoodenFactory implements DoorFactory2 {
  public makeDoor(): Door2 {
    return new WoodDoor2();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

class IronFactory implements DoorFactory2 {
  public makeDoor(): Door2 {
    return new IronDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

const woodenFactory = new WoodenFactory();
const woodDoor2 = woodenFactory.makeDoor();
const carpenter = woodenFactory.makeFittingExpert();
console.log(woodDoor2.getDescription(), carpenter.getDescription());

const ironFactory = new IronFactory();
const ironDoor = ironFactory.makeDoor();
const ironExpert = ironFactory.makeFittingExpert();
console.log(ironDoor.getDescription(), ironExpert.getDescription());
