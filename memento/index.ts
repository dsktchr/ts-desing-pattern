class CalcMemento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getContent() {
    return this.content;
  }
}

class Editor {
  private content: string;

  public type(content: string) {
    if (!this.content) {
      this.content = content;
    } else {
      this.content += ", " + content;
    }
  }

  public getContent() {
    return this.content;
  }

  /**
   * save
   */
  public save() {
    return new CalcMemento(this.content);
  }

  /**
   * restore
   */
  public restore(calcMemento: CalcMemento) {
    this.content = calcMemento.getContent();
  }
}

const editor = new Editor();
editor.type("あいうえお");
editor.type("かきくけこ");
const typeResult = editor.save();

console.log(typeResult.getContent());

editor.type("さしすせそ");
console.log(editor.getContent());

editor.restore(typeResult);
console.log(editor.getContent());
