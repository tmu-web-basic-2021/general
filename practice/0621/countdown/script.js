function updateClock() {
  const div = document.querySelector('#clock');
  const now = new Date();
  div.textContent = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}
setInterval(updateClock, 500);

function updateCountdown() {
  const targetDate = new Date('2021-07-01 20:00:00');
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime() + 1000;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const div = document.querySelector('#countdown');

  div.innerHTML = "東京オリンピック開会式まであと<br>" +
    String(days).padStart(2, "0") + "日" +
    String(hours).padStart(2, "0") + "時間" +
    String(minutes).padStart(2, "0") + "分" +
    String(seconds).padStart(2, "0") + "秒!";
}
setInterval(updateCountdown, 500);