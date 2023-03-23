//для ясности, комментарий идет перед выполнением задания.

function validateEmail(email) {
  if (email == "") return false;
  if (typeof email != "string") return false;
  if (!email.split("").includes("@") || email.split("")[0] == "@") return false;

  //проверка на 5 символов задание 2
  if (email.split("").length < 6) return false;

  // проверка на один символ @ задаие 3
  if (email.indexOf("@") !== email.lastIndexOf("@")) return false;

  // проверка на наличие точки задание 4

  // проверка на наличие точки сразу перед символом @
  let atSignIndex = email.indexOf("@");
  if (email[atSignIndex - 1] === ".") return false;

  //если точка будет отсутвовать в email или индекс символа 'точка' будет меньше чем индекс символа "@" то условаие будет возвращено false, другими словами точка в этом условаии обязательно должа присутствовать в email-адресе после символа @.
  if (email.lastIndexOf(".") < email.indexOf("@")) return false;

  // я так же добавил проверку на то что бы точка не была сразу после символа @, так как это тоже не корректно для email-адреса.
  if (email[atSignIndex + 1] === ".") return false;
}
