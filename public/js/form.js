function CPF(i) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
  if (v.length == 14) i.style = "box-shadow: 0 0 3px rgb(5, 150, 0)";
  if (v.length != 14) i.style = "box-shadow: 0 0 1.5px black"

}

function RG(i) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "13");
  if (v.length == 2 || v.length == 6) i.value += ".";
  if (v.length == 10) i.value += "-";
  if (v.length == 13) i.style = "box-shadow: 0 0 3px rgb(5, 150, 0)";
  if (v.length != 13) i.style = "box-shadow: 0 0 1.5px black"

}

function date(i) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "10");
  if (v.length == 2 || v.length == 5) i.value += "/";
  if (v.length == 10) i.style = "box-shadow: 0 0 3px rgb(5, 150, 0)";
  if (v.length != 10) i.style = "box-shadow: 0 0 1.5px black"

}

function cell(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "16");

  if (v.length == 1) i.value = "(" + i.value;
  if (v.length == 3) i.value += ") ";
  if (v.length == 11) i.value += "-";
  if (v.length == 16) i.style = "box-shadow: 0 0 3px rgb(5, 150, 0)";
  if (v.length != 16) i.style = "box-shadow: 0 0 1.5px black"
}


