const input_number = document.getElementById("input-number");
const input_text = document.getElementById("input-text");
const input_cc = document.getElementById("input-cc");
const chatbutton = document.getElementById("chat-button");

chatbutton.addEventListener("click", function () {
  const cc = input_cc.value;
  const number = input_number.value;
  const text = input_text.value;

  const url = getWhatsappURL(cc, number, text);

  window.location.href = url;
});

function getWhatsappURL(cc, number, text) {
  return `https://wa.me/${cc}${number}?text=${text}`;
}
