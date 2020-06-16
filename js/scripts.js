//Business Logic
function Ticket(name) {
  this.name = name;
  this.price = 13;
}

Ticket.prototype.matinee = function() {
  this.price -= 3;
}

Ticket.prototype.ageDiscount = function(age) {
  if (age >= 65 || age <= 13) {
    this.price -= 3;
  }
}

Ticket.prototype.studentVeteranDiscount = function(studentVeteran, age) {
  if (studentVeteran && age < 65 && age > 13) {
    this.price -= 2;
  }
}