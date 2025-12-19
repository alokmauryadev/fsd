// options.js
class OptionsUI {
  constructor() {
    this.input = document.getElementById("optBlockInput");
    this.addBtn = document.getElementById("optAddBlock");
    this.list = document.getElementById("optBlockedList");
    this.resetBtn = document.getElementById("optResetUsage");

    this._bind();
    this.refresh();
  }

  _bind(){
    this.addBtn.addEventListener("click", ()=> this.addSite());
    this.resetBtn.addEventListener("click", ()=> this.resetUsage());
  }

  async addSite() {
    const v = this.input.value.trim();
    if (!v) return;
    await this._send({ cmd: "BLOCK_ADD", domain: v });
    this.input.value = "";
    await this.refresh();
  }

  async resetUsage() {
    if (!confirm("Reset all tracked usage data? This cannot be undone.")) return;
    await this._send({ cmd: "USAGE_RESET" });
    await this.refresh();
  }

  async refresh() {
    const res = await this._send({ cmd: "GET_BLOCKED" });
    if (res && res.success) {
      this._render(res.sites || []);
    }
  }

  _render(list) {
    this.list.innerHTML = "";
    if (!list.length) this.list.innerHTML = "<div class='item'>No blocked sites</div>";
    for (const s of list) {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `<div>${s}</div><div><button class="btn unblock" data-site="${s}">Unblock</button></div>`;
      this.list.appendChild(div);
    }
    Array.from(this.list.querySelectorAll(".unblock")).forEach(btn=>{
      btn.addEventListener("click", async e=>{
        const site = e.target.dataset.site;
        await this._send({ cmd: "BLOCK_REMOVE", domain: site });
        await this.refresh();
      });
    });
  }

  _send(msg) {
    return new Promise(resolve => {
      chrome.runtime.sendMessage(msg, res => resolve(res));
    });
  }
}

document.addEventListener("DOMContentLoaded", ()=> new OptionsUI());
