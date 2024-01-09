import { Controller } from "@hotwired/stimulus";
import BoardForm from "../boards/form";

// Connects to data-controller="boards"
export default class extends Controller {
  private modalBackdropTarget: HTMLElement;
  private addModalTarget: HTMLElement;
  private confirmDestroyTarget: HTMLFormElement;
  private destroyModalTarget: HTMLElement;
  private editModalTarget: HTMLElement;
  private form: BoardForm | null;

  static targets = [
    "addModal",
    "confirmDestroy",
    "destroyModal",
    "editModal",
    "modalBackdrop",
  ];

  connect() {}

  add() {
    this.form = new BoardForm({
      url: `/boards`,
      formElement: this.addModalTarget.querySelector("form")!,
      onSubmitCallback: this.onSubmitCallback.bind(this),
    });

    this.modalBackdropTarget.classList.remove("hidden");
    this.addModalTarget.classList.add("flex");
    this.addModalTarget.classList.remove("hidden");
  }

  closeAddModal() {
    this.modalBackdropTarget.classList.add("hidden");
    this.addModalTarget.classList.add("hidden");
    this.addModalTarget.classList.remove("flex");

    this.form?.clear();
    this.form = null;
  }

  edit(e: PointerEvent) {
    const boardId = (e.target as HTMLElement).dataset.id;

    if (!boardId) {
      return;
    }

    this.form = new BoardForm({
      url: `/boards/${boardId}`,
      formElement: this.editModalTarget.querySelector("form")!,
      onSubmitCallback: this.onSubmitCallback.bind(this),
      update: true,
    });

    this.modalBackdropTarget.classList.remove("hidden");
    this.editModalTarget.classList.add("flex");
    this.editModalTarget.classList.remove("hidden");
  }

  closeEditModal() {
    this.modalBackdropTarget.classList.add("hidden");
    this.editModalTarget.classList.add("hidden");
    this.editModalTarget.classList.remove("flex");

    this.form?.clear();
    this.form = null;
  }

  destroy(e: PointerEvent) {
    const serviceId = (e.target as HTMLElement).dataset?.id;

    this.confirmDestroyTarget.action = `/boards/${serviceId}`;
    this.modalBackdropTarget.classList.remove("hidden");
    this.destroyModalTarget.classList.add("flex");
    this.destroyModalTarget.classList.remove("hidden");
  }

  closeDestroyModal() {
    this.modalBackdropTarget.classList.add("hidden");
    this.destroyModalTarget.classList.add("hidden");
    this.destroyModalTarget.classList.remove("flex");
  }

  onSubmitCallback() {
    this.closeAddModal();
    this.closeEditModal();
    this.form?.clear();
    this.form = null;
  }
}
