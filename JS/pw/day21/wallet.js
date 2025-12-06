  const API = 'http://localhost:4000/api';
  const authCard = document.getElementById('authCard');
  const walletCard = document.getElementById('walletCard');

  function setToken(token) {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }
  function getToken() { return localStorage.getItem('token'); }

  async function api(path, opts = {}) {
    const headers = opts.headers || {};
    headers['Content-Type'] = 'application/json';
    const token = getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;
    opts.headers = headers;
    const res = await fetch(API + path, opts);
    return res.json();
  }

  // register
  document.getElementById('registerBtn').onclick = async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const resp = await api('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password })});
    if (resp.token) {
      setToken(resp.token);
      showWallet(resp.user);
    } else alert(resp.error || 'Register failed');
  };

  // login
  document.getElementById('loginBtn').onclick = async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const resp = await api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password })});
    if (resp.token) {
      setToken(resp.token);
      showWallet(resp.user);
    } else alert(resp.error || 'Login failed');
  };

  document.getElementById('logoutBtn').onclick = () => {
    setToken(null);
    walletCard.style.display = 'none';
    authCard.style.display = 'block';
  };

  async function showWallet(user) {
    authCard.style.display = 'none';
    walletCard.style.display = 'block';
    document.getElementById('balance').innerText = user.balance ?? 0;
    loadHistory();
  }

  // add
  document.getElementById('addBtn').onclick = async () => {
    const amount = document.getElementById('amount').value;
    const note = document.getElementById('note').value;
    const resp = await api('/wallet/add', { method: 'POST', body: JSON.stringify({ amount, note })});
    if (resp.success) {
      document.getElementById('balance').innerText = resp.balance;
      loadHistory();
    } else alert(resp.error || 'Add failed');
  };

  // spend
  document.getElementById('spendBtn').onclick = async () => {
    const amount = document.getElementById('amount').value;
    const note = document.getElementById('note').value;
    const resp = await api('/wallet/spend', { method: 'POST', body: JSON.stringify({ amount, note })});
    if (resp.success) {
      document.getElementById('balance').innerText = resp.balance;
      loadHistory();
    } else alert(resp.error || 'Spend failed');
  };

  async function loadHistory() {
    const resp = await api('/wallet/history');
    const container = document.getElementById('txList');
    container.innerHTML = '';
    if (resp.transactions && resp.transactions.length) {
      resp.transactions.forEach(t => {
        const div = document.createElement('div');
        div.className = 'tx';
        div.innerHTML = <br>{$t.type} ₹$ {t.amount}</br>;
         <div class="muted">$new Date{(t.createdAt).toLocaleString()}</div>;
        <div>${t.note || ''} </div>
        container.appendChild(div);
      });
    } else {
      container.innerHTML = '<div class="muted">No transactions yet</div>';
    }
  }

  // try to auto-login if token present
  (async function(){
    const token = getToken();
    if (!token) return;
    // attempt to load history to validate token
    const resp = await fetch(API + '/wallet/history', { headers: { Authorization: 'Bearer ' + token }});
    if (resp.status === 200) {
      // fetch user profile via login token (we don't have profile endpoint) — just show wallet and load history
      walletCard.style.display = 'block';
      authCard.style.display = 'none';
      loadHistory();
      // update balance via the first transaction/ or call login endpoint was better; keep simple
      const hist = await resp.json();
      if (hist.transactions && hist.transactions.length) {
        // compute current known balance via backend isn't returned here — we should call login earlier.
      }
    } else {
      setToken(null);
    }
  })();