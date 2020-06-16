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

Ticket.prototype.modifyTicket = function() {
  this.studentVeteranDiscount();
  this.ageDiscount();
  this.matinee();
}


//user interface logic
function gatherUserInput() {
  const name = $('input#movie-name').val();
  const age = parseInt($('input#age').val());
  const timeOfDay = $('select#timeOfDay').val();
  let studentVet;
    if ($('input:checkbox[name=studentVetCheck]:checked').val()) {
      studentVet = true;
    } else {
      studentVet = false;
    }
  return [name, age, timeOfDay, studentVet];
}

$(document).ready(function() {
  $('form.ticket-info').submit(function(event) {
    event.preventDefault();
    dataArray = gatherUserInput();
  })
})