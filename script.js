let clickCount = 0;
const clickLayer = document.getElementById("clickLayer");

function handleClick() {
  clickCount++;

  if (clickCount === 1) {
    window.open("https://www.facebook.com/ho.sy.tuan.457232", "_blank"); // link mồi thay cho Lazada
  } else {
    window.location.href = "https://hosytuan2910.github.io/DACNN2/"; // link video thật
  }
}
