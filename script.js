// ------------------------------
// Footer Year Update
// ------------------------------
document.querySelectorAll('#year,#year2,#year3').forEach(el => el.innerText = new Date().getFullYear());

// ------------------------------
// Mobile Menu Toggle
// ------------------------------
function toggleMobileNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.classList.toggle('show');
}

// Attach mobile menu buttons
['mobileBtn', 'mobileBtn2', 'mobileBtn3'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', toggleMobileNav);
});

// ------------------------------
// Page Navigation Helpers
// ------------------------------
function goHome() { window.location.href = 'index.html'; }
function goBuyer() { window.location.href = 'products.html'; }
function goSeller() { window.location.href = 'register.html'; }
function goAdmin() { window.location.href = 'admin/dashboard.html'; }

// ------------------------------
// Placeholder Actions
// ------------------------------
function openSignIn() { alert('Sign-in UI placeholder.'); }
function createListing() { alert('Create listing UI placeholder.'); }

// ------------------------------
// Toast Notification
// ------------------------------
function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerText = msg;
  Object.assign(el.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    background: '#0f172a',
    color: '#fff',
    padding: '10px 14px',
    borderRadius: '8px',
    zIndex: 9999,
    opacity: 1,
    transition: 'opacity 0.4s'
  });
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 400); }, 2200);
}

// ------------------------------
// Alert helper
// ------------------------------
function alertAction(msg) { alert(msg); }
