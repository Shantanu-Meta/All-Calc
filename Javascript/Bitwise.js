function resetBit() {
  document
    .querySelector("#bitSet")
    .addEventListener("click", function () {
      document.querySelector("#first").value = "";
      document.querySelector("#second").value = "";
      document.querySelector("#result").value = "";
    });
}
function Binary(number) {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return binary;
}
function and() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a & b;
  document.getElementById("result").value = c;
  let result = Binary(c);
  let first = Binary(a);
  let second = Binary(b);
  document.getElementById("firstbinary").value = first;
  document.getElementById("secondbinary").value = second;
  document.getElementById("binaryresult").value = result;
}
function or() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a | b;
  document.getElementById("result").value = c;
  let result = Binary(c);
  let first = Binary(a);
  let second = Binary(b);
  document.getElementById("firstbinary").value = first;
  document.getElementById("secondbinary").value = second;
  document.getElementById("binaryresult").value = result;
}
function xor() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a ^ b;
  document.getElementById("result").value = c;
  Binary(c);
  let result = Binary(c);
  let first = Binary(a);
  let second = Binary(b);
  document.getElementById("firstbinary").value = first;
  document.getElementById("secondbinary").value = second;
  document.getElementById("binaryresult").value = result;
}
