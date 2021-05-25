import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["counter"]

  updateCounter(event) {
    const numberOfCharacters = event.currentTarget.value.length;
    if (numberOfCharacters > 0) {
      this.counterTarget.innerHTML = numberOfCharacters;
    } else {
      this.counterTarget.innerHTML = "";
    }
  }
}
