export default function PerfScreenshots() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Screenshots / Filmstrip（對齊感知延遲）</h1>
        <p className="text-gray-700">
          在 Performance 錄製時勾選 <b>Screenshots</b>，即可生成 Filmstrip 逐幀畫面，對齊 LCP/首屏時機。
          當你覺得「數字看起來對，但畫面體感不對」時，用 Filmstrip 對齊關鍵幀即可釐清落差。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁 → 打開 Performance → 勾 <b>Screenshots</b> → <b>Start recording</b>。</li>
          <li>點示範頁的「載入大型圖片」→ 等畫面穩定後 <b>Stop</b>。</li>
          <li>在 Web Vitals 區找 LCP，並用 Filmstrip 對齊該幀，確認 LCP 元素畫面出現的實際時點。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/performance/filmstrip.html`} target="_blank" rel="noreferrer">
            開啟示範頁（延遲載入 LCP）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>指出 LCP 對應的 Filmstrip 畫面幀（截圖加註）。</li>
            <li>觀察「骨架屏 → 大圖出現」的時間差，解釋體感落差來源。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
