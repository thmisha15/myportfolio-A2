// LECTURE: MEAN Stack Development, slides 20-21 (addEventListener and callbacks).

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  if (!form) return;
  // LECTURE: MEAN Stack Development, slides 20-21 (event handler).
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    // PROJECT IMPLEMENTATION: collect validated fields and prepare an email URL.
    var data = new FormData(form);
    var subject = 'Portfolio inquiry from ' + data.get('name');
    var body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nPhone: ' + (data.get('phone') || 'Not provided') + '\n\nMessage:\n' + data.get('message');
    window.location.href = 'mailto:thmisha15@hotmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
});
