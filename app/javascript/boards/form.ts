export type BoardFormData = {
  name: string;
  email: string;
  width: string;
  height: string;
  num_mines: string;
};

export default class BoardForm {
  private formElement: HTMLFormElement;
  private emailField: HTMLInputElement;
  private nameField: HTMLInputElement;
  private widthField: HTMLInputElement;
  private heightField: HTMLInputElement;
  private numMinesField: HTMLInputElement;
  private onSubmitCallback: () => void;

  constructor({
    url,
    formElement,
    onSubmitCallback,
    update = false,
  }: {
    url: string;
    formElement: HTMLFormElement;
    onSubmitCallback: () => void;
    update?: boolean;
  }) {
    this.formElement = formElement;
    this.formElement.action = url;

    this.onSubmitCallback = onSubmitCallback;

    this.emailField = this.formElement.querySelector(
      "input[name='board[email]']"
    ) as HTMLInputElement;
    this.nameField = this.formElement.querySelector(
      "input[name='board[name]']"
    ) as HTMLInputElement;
    this.widthField = this.formElement.querySelector(
      "input[name='board[width]']"
    ) as HTMLInputElement;
    this.heightField = this.formElement.querySelector(
      "input[name='board[height]']"
    ) as HTMLInputElement;
    this.numMinesField = this.formElement.querySelector(
      "input[name='board[num_mines]']"
    ) as HTMLInputElement;

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.formElement.addEventListener('turbo:submit-end', this.onFormSubmit);

    if (!update) {
      return;
    }

    this.fetchData(url, (data: BoardFormData) => this.fill(data));
  }

  public fill(data: BoardFormData) {
    this.emailField.value = data.email || '';
    this.nameField.value = data.name || '';
    this.widthField.value = data.width || '';
    this.heightField.value = data.height || '';
    this.numMinesField.value = data.num_mines || '';
  }

  public onFormSubmit() {
    this.onSubmitCallback();
    this.clear();
  }

  public clear() {
    this.emailField.value = '';
    this.nameField.value = '';
    this.widthField.value = '';
    this.heightField.value = '';
    this.numMinesField.value = '';
  }

  private fetchData(
    url: string,
    onSuccessCallback: (data: BoardFormData) => void
  ) {
    fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: BoardFormData) => onSuccessCallback(data));
  }
}
