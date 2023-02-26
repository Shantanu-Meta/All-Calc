function vallidateTrig() {
    var angleValue = document.getElementById("angle-value").value;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (angleValue == "") {
      alert("Enter the value of angle.")
      return false;
    }
    else if (checkedOne == 0) {
      alert("Select at least one operation.")
      return false;
    }
    else
      trigCalculator()
  }
  
  function checkAll() {
    document.getElementById('sin').checked = true;
    document.getElementById('cos').checked = true;
    document.getElementById('tan').checked = true;
    document.getElementById('cosec').checked = true;
    document.getElementById('sec').checked = true;
    document.getElementById('cot').checked = true;
  }
  
  function trigCalculator() {
    var angleValue = document.getElementById('angle-value').value
    var angleRadian
    var angleDegree
    if (document.getElementById('degree').selected) {
      angleRadian = (angleValue * (Math.PI / 180)).toPrecision(3)
      angleDegree = angleValue
    }
    else {
      angleRadian = angleValue
      angleDegree = (angleRadian * (180 / Math.PI)).toPrecision(3)
    }
  
    if (document.getElementById('sin').checked) {
      var sin = Math.sin(angleRadian)
      if (angleDegree % 180 == 0 || angleDegree == 0)
        sin = 0;
      document.getElementById('resultContainer').innerHTML = `sin(${document.getElementById('angle-value').value})= ${sin.toPrecision(2)}`;
    }
    if (document.getElementById('cos').checked) {
      var cos = Math.cos(angleRadian)
      if (angleDegree % 90 == 0 && angleDegree % 180 != 0)
        cos = 0;
      var elem = document.getElementById('resultContainer')
      var clone = elem.cloneNode(true);
      clone.innerHTML = `cos(${document.getElementById('angle-value').value})= ${cos.toPrecision(2)}`;
      elem.after(clone);
    }
    if (document.getElementById('tan').checked) {
      var tan = Math.tan(angleRadian)
      if (angleDegree % 180 == 0 || angleDegree == 0)
        tan = 0;
      else if (angleDegree % 90 == 0)
        tan = 1 / 0;
      var elem = document.getElementById('resultContainer')
      var clone2 = elem.cloneNode(true);
      clone2.innerHTML = `tan(${document.getElementById('angle-value').value})= ${tan.toPrecision(2)}`;
      if (document.getElementById('cos').checked)
        clone.after(clone2);
      else
        elem.after(clone2);
    }
    if (document.getElementById('cosec').checked) {
      var cosec = 1 / Math.sin(angleRadian)
      if (angleDegree % 180 == 0 || angleDegree == 0)
        cosec = 1 / 0;
      var elem = document.getElementById('resultContainer')
      var clone3 = elem.cloneNode(true);
      clone3.innerHTML = `cosec(${document.getElementById('angle-value').value})= ${cosec.toPrecision(2)}`;
      clone2.after(clone3);
    }
    if (document.getElementById('cot').checked) {
      var cot = 1 / Math.tan(angleRadian)
      if (angleDegree % 180 == 0 || angleDegree == 0)
        cot = 1 / 0;
      else if (angleDegree % 90 == 0)
        cot = 0;
      var elem = document.getElementById('resultContainer')
      var clone4 = elem.cloneNode(true);
      clone4.innerHTML = `cot(${document.getElementById('angle-value').value})= ${cot.toPrecision(2)}`;
      clone3.after(clone4);
    }
    if (document.getElementById('sec').checked) {
      var sec = 1 / Math.cos(angleRadian)
      if (angleDegree % 90 == 0 && angleDegree % 180 != 0)
        sec = 1 / 0;
      var elem = document.getElementById('resultContainer')
      var clone5 = elem.cloneNode(true);
      clone5.innerHTML = `&ensp;sec(${document.getElementById('angle-value').value})= ${sec.toPrecision(2)}`;
      clone4.after(clone5);
    }
  
  
  }
  