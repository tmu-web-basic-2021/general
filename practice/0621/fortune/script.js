const results = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

const button = document.querySelector('#fortune');

button.onclick = function () {
  const div = document.querySelector('#result');

  const result = results[Math.floor(Math.random() * results.length)];
  div.textContent = "きょうのあなたの運勢は、" + result + "です！";
  button.disabled = true;
  button.textContent = "1回だけです！";
};