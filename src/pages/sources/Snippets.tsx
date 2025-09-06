export default function Snippets() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Snippets（常用腳本片段）</h1>
        <p className="text-gray-700">把常用工具腳本存起來，一鍵執行（跨網域皆可，依 DevTools 權限）。</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Sources → <b>Snippets</b> → 新增。</li>
          <li>貼上「收集 fetch URL」程式碼 → 右鍵 Run。</li>
          <li>切換頁面互動 → 回到 Snippet 再次 Run 觀察結果。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">練習 Snippet：收集所有 fetch / XHR URL</h2>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-3 overflow-auto text-sm">
{`// 收集期間的所有 fetch/XHR URL
(() => {
  window.__urls = window.__urls || [];
  // fetch
  if (!window.__wrapFetch) {
    const _fetch = window.fetch;
    window.fetch = function(url, init){ window.__urls.push(url.toString()); return _fetch.apply(this, arguments); };
    window.__wrapFetch = true;
  }
  // XHR
  if (!window.__wrapXHR) {
    const open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url){ window.__urls.push(url.toString()); return open.apply(this, arguments); };
    window.__wrapXHR = true;
  }
  console.table(Array.from(new Set(window.__urls)).map((u,i)=>({i,u})));
})();`}
        </pre>
        <p className="text-gray-700">在 Network-heavy 的頁面執行，回到 Console 看 <code>console.table</code>。</p>
      </section>
    </div>
  );
}
