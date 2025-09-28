// let clickCount = 0;
// const clickLayer = document.getElementById("clickLayer");

// function handleClick() {
//   clickCount++;

//   if (clickCount === 1) {
//     window.open("https://www.facebook.com/ho.sy.tuan.457232", "_blank");
//   } else {
//     window.location.href = "https://hosytuan2910.github.io/DACNN2/";
//   }
// }

function addToCart(button, productName) {
  const originalText = button.textContent;
  button.textContent = "Đã thêm!";
  button.style.background = "#45a049";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "#4CAF50";
  }, 1500);

  console.log(`Added ${productName} to cart`);
}

function viewMore() {
  alert("Đang tải thêm sản phẩm...");
  // Ở đây bạn có thể thêm logic để load thêm sản phẩm
  console.log("Loading more products...");
}

// Thêm hiệu ứng ripple cho nút
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.background = "rgba(255,255,255,0.5)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 0.6s ease-out";

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// CSS cho ripple effect
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
            }
        `;
document.head.appendChild(style);
