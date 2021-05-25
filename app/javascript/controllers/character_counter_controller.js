import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "counter"]

  updateCounter() {
    const numberOfCharacters = this.inputTarget.value.length;
    if (numberOfCharacters > 0) {
      this.counterTarget.innerHTML = numberOfCharacters;
    } else {
      this.counterTarget.innerHTML = "0";
    }
  }
}
