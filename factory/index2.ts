// 面接官
interface Interviewer {
  askQuestion();
}

// エンジニアの面接官
class Developer implements Interviewer {
  askQuestion() {
    console.log("最近勉強した子とは何ですか");
  }
}

// エグゼクティブクラスの面接官
class Executive implements Interviewer {
  askQuestion() {
    console.log("会社に入ってどんなメリットをもたらせそうか");
  }
}

// 抽象マネージャークラス
abstract class HiringManager {
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestion();
  }
}

// エンジニアマネージャー
class DeveloperManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

// なんかのマネージャー
class ExecutiveManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Executive();
  }
}

const devManager = new DeveloperManager();
devManager.takeInterview();

const marketManager = new ExecutiveManager();
marketManager.takeInterview();
