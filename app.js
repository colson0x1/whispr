const { hash } = window.location;

const memo = atob(hash.replace('#', ''));

if (memo) {
  document.querySelector('#memo-form').classList.add('hide');
  document.querySelector('#memo-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = memo;
}

document.querySelector('form ').addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('#memo-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#memo-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
