document.getElementById('generate-password-button').addEventListener('click', function() {
    var passwordOutput = document.getElementById('password-output');
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-=?@^_";
    var password = '';
    for (var i = 0; i < 20; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwordOutput.value = password;
  });
  