const passwordText = document.getElementById('password-text');
const passwordInput = document.getElementById('password-input');
const passwordContainer = document.getElementById('password-container');
const contentContainer = document.getElementById('content-container');

const initPage = () => {
  let i = 0;
  typePassword(i);    
};

const typePassword = i => {
  const password = 'Password:';

  if (i < password.length) {
    passwordText.innerHTML += password[i];
    i++;
    setTimeout(() => typePassword(i), 80);
  } else {
    passwordInput.focus();
  }
};

const checkPassword = () => {
  if (passwordInput.value === 'hunter2') {
    passwordContainer.className = 'hidden';
    contentContainer.className = '';
  }
};

const toggleSection = id => {
  const section = document.getElementById(id);

  const showSection = () => {
    section.className = 'section-shown';
    section.removeEventListener('click', showSection);
    section.addEventListener('click', hideSection);
  };
  const hideSection = () => {
    section.className = 'section-hidden';
    section.removeEventListener('click', hideSection);
    section.addEventListener('click', showSection);
  };

  section.className = 'section-shown';
  section.removeEventListener('click', toggleSection);
  section.addEventListener('click', hideSection);
};
