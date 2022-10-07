const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  $("#message-form").addClass('hide');
  $("#message-show").removeClass('hide');

  $("h1").innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  $("#message-form").addClass('hide');
  $('#link-form').removeClass('hide');

  const input = $('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = $('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
