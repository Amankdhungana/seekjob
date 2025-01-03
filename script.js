const signupForm = document.getElementById("signupForm");
      const loginForm = document.getElementById("loginForm");
      const container = document.getElementById("container");
      const signupError = document.getElementById("signupError");
      const loginError = document.getElementById("loginError");

      const users = JSON.parse(localStorage.getItem("users")) || {};

      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
          signupError.textContent = "Passwords do not match.";
          return;
        }

        if (users[email]) {
          signupError.textContent = "Email is already registered.";
          return;
        }

        users[email] = { name, password };
        localStorage.setItem("users", JSON.stringify(users));
        signupError.textContent = "";
        alert("Signup successful!");
        container.classList.remove("right-panel-active");
      });

      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (!users[email] || users[email].password !== password) {
          loginError.textContent = "Invalid email or password.";
          return;
        }

        loginError.textContent = "";
        alert("Login successful!");
        window.location.href = "welcome.html";
      });

      document.getElementById("showSignup").addEventListener("click", function () {
        container.classList.add("right-panel-active");
      });

      document.getElementById("showLogin").addEventListener("click", function () {
        container.classList.remove("right-panel-active");
      });
