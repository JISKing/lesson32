let assert = chai.assert;

describe("valid string", function () {
  it("not an empty string", function () {
    assert.equal(validateEmail(""), false);
  });
  it("typeof string", function () {
    assert.equal(validateEmail(222), false, "number error");
    assert.equal(validateEmail(true), false, "boolean error");
    assert.equal(validateEmail({}), false, "object error");
  });
  it("not an empty string", function () {
    assert.equal(validateEmail("     "), false);
  });
});
describe("valid data", function () {
  it("Don't have the @ or @ the first character", function () {
    assert.isFalse(validateEmail("emailgmail.com"), "Don't have the@");
  });
  assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
});

//проверка на длинну менше или равно 5, по заданию вроде как просто меньше 5 но я сделал меньше или равно 5, то есть меньше 6.
describe("string length", function () {
  it("Email has 5 or less then 5 symbols", function () {
    assert.equal(validateEmail("e@g.c"), false, "Too short email");
  });
});

// проверка на один символ @ задание 3

describe("@ symbol", function () {
  it("Email has more then 1 symbol '@'", function () {
    assert.equal(
      validateEmail("email@@gmail.com"),
      false,
      "More then 1 symbol '@'"
    );
  });
});

// проверка на присутствие точки в email

describe("'.' symbol in email", function () {
  it("The dot is right before the @ symbol", function () {
    assert.equal(
      validateEmail("e.mail.@gmail.com"),
      false,
      "incorrect email"
    );
  });

  it("The dot after the @ symbol", function () {
    assert.equal(
      validateEmail("e.mail@gmailcom"),
      false,
      "incorrect email"
    );
  });

  it("The dot right after the @ symbol", function () {
    assert.equal(
      validateEmail("e.mail@.gmailcom"),
      false,
      "incorrect email"
    );
  });
});