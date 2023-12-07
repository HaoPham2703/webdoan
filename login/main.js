const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));

    if (user && user.username === inputUsername.value && user.password === inputPassword.value) {
      const username = inputUsername.value.split('@')[0];

      localStorage.setItem('loggedInUser', username);
      updateWelcomeMessage(username);

      // Đặt một cờ trong sessionStorage để chỉ ra rằng người dùng đã đăng nhập
      sessionStorage.setItem('isLoggedIn', 'true');

      alert("Đăng Nhập Thành Công");

      // Thay đổi đường dẫn này đến đích mong muốn của bạn
      window.location.href = "../index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

function updateWelcomeMessage(username) {
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (welcomeMessage) {
    if (username) {
      welcomeMessage.textContent = `Chào mừng ${username} đến với trang web của mình`;
    } else {
      welcomeMessage.textContent = "Chào mừng đến với trang web của mình";
    }
  }
}

// Hàm xử lý sự kiện popstate

