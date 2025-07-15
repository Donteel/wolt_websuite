
function showRules(device) {
  const android = document.getElementById('rules-android');
  const iphone = document.getElementById('rules-iphone');

  if (!android || !iphone) return;

  document.querySelectorAll('.rules-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`rules-${device}`);
  if (target) target.classList.add('active');
}
