// --- CLIENT: Credit Application ---
const creditForm = document.getElementById('creditForm');
if (creditForm) {
  creditForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (amount < 20 || amount > 300) {
      document.getElementById('creditMessage').textContent = "Amount must be between K20 and K300!";
      return;
    }

    const profit = amount * 0.4;
    const totalDue = amount + profit;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    const creditData = {
      name,
      amount,
      profit,
      totalDue,
      dueDate: dueDate.toDateString(),
      status: "Pending",
      proof: null
    };

    let credits = JSON.parse(localStorage.getItem('creditData')) || [];
    credits.push(creditData);
    localStorage.setItem('creditData', JSON.stringify(credits));

    document.getElementById('creditMessage').innerHTML =
      `✅ Credit Approved for <b>${name}</b><br>
       Amount: K${amount}<br>
       Profit (40%): K${profit.toFixed(2)}<br>
       Total Due: K${totalDue.toFixed(2)} by ${dueDate.toDateString()}`;

    creditForm.reset();
  });
}

// --- ADMIN LOGIN ---
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', function() {
    const username = document.getElementById('adminUser').value.trim();
    const password = document.getElementById('adminPassword').value;
    const loginMsg = document.getElementById('loginMsg');

    if (username === "Demien Danny" && password === "1242dexmarn") {
      loginMsg.textContent = "✅ Login successful!";
      window.location.href = "dashboard.html";
    } else {
      loginMsg.textContent = "❌ Incorrect username or password.";
    }
  });
}
