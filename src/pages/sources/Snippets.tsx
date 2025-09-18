export default function Snippets() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Snippets</h1>
        <p className="text-gray-700 leading-relaxed">
          Snippets 就像 DevTools 裡的小型程式碼庫。
          你可以把常用的工具腳本存起來，需要時一鍵執行，任何頁面都能用。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>有些小工具（像收集所有 fetch 請求的網址）常常會用到。</li>
          <li>不想每次都重新貼程式碼 → 存成 Snippet，一鍵執行即可。</li>
          <li>不管在哪個網頁，只要 DevTools 開著就能跑。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources → Snippets 新增一個片段。</li>
          <li>貼上要用的程式碼（例：收集所有 fetch URL）。</li>
          <li>右鍵 → Run 執行。</li>
          <li>換頁面互動後，再次回到 Snippet → Run → 觀察結果。</li>
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
