document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
  this.reset();
});
