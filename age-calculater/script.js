let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  // Extract the day, month, and year from the birth date
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // Get the current date
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  // Initialize variables for final calculation
  let d3, m3, y3;

  // Calculate year difference
  y3 = y2 - y1;

  // Adjust month and year if current month is before the birth month
  if (m2 < m1 || (m2 === m1 && d2 < d1)) {
    y3--;
  }

  // Calculate month difference
  m3 = m2 - m1;
  if (m3 < 0) {
    m3 += 12;
  }

  // Calculate day difference
  d3 = d2 - d1;
  if (d3 < 0) {
    m3--;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    d3 += getDaysInMonth(y2, m2 - 1 === 0 ? 12 : m2 - 1); // Handle previous month days
  }

  // Display the result
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
