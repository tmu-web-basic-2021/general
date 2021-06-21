function createParagraph() {
  // ここは関数の定義　関数の名前はcreateParagraph　引数はなし
  const para = document.createElement("p");
  para.textContent = "ボタンが押されました！";
  document.body.appendChild(para);
}

const button = document.querySelector("button");
button.addEventListener("click", createParagraph);