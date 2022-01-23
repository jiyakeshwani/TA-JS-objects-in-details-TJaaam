class BookList {
  constructor(root, list = []) {
    this.list = list;
    this.root = root;
  }
  add(title, author, id) {
    let book = new Book(title, author, id);
    this.list.push(book);
    this.createUI();
    return this.list.length;
  }
  delete(id) {
    let index = this.list.findIndex((book) => book.id === id);
    this.list.splice(index, 1);
    this.createUI();
    return this.list.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.list.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector("span").addEventListener(
        "click",
        this.delete.bind(this, book.id)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.isRead = false;
  }

  handleClick() {
    this.isRead = !this.isRead;
    this.createUI();
  }
  createUI() {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isRead;
    input.addEventListener("click", this.handleClick.bind(this));
    let h2 = document.createElement("h2");
    h2.innerText = this.title;
    let p = document.createElement("p");
    p.innerText = this.author;
    let span = document.createElement("span");
    span.innerText = "Delete";
    li.append(input, h2, p, span);
    return li;
  }
}
let mybook = new BookList(document.querySelector(".books"));

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = form.querySelector("input[name='title']").value;
  let author = form.querySelector("input[name='author']").value;
  let id = form.querySelector("input[name='isbn']").value;
  console.log(name, author, id);
  mybook.add(name, author, id);
  name.value = "";
  author.value = "";
  id.value = "";
});
