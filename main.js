let valInput = document.querySelector("#val");
let wifeIndex = document.querySelector("#select");
let maleInput = document.querySelector("#male");
let femaleInput = document.querySelector("#female");

function calc() {
  let merathValue = +valInput.value;
  let isWife = +wifeIndex.value;
  let wifeValue = 0;

  function isWifeFun() {
    wifeValue = (1 / 8) * merathValue;
    merathValue -= wifeValue;
  }
  
  isWife == 1 ? isWifeFun() : null;

  let finalSaham = merathValue / (2 * +maleInput.value + +femaleInput.value);

  isWife == 1 ? document.write("قيمة ميراث الزوجة : " + wifeValue) : null;

  document.write(`قيمة ميراث الذكر : ` + finalSaham * 2);
  document.write(`قيمة ميراث الأنثي : ` + finalSaham);
}