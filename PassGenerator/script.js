document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const generateBtn = document.getElementById('generate-btn');

  generateBtn.addEventListener('click', function() {
    const password = generatePassword();
    passwordInput.value = password;
  });

  function generatePassword() {
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }
});
