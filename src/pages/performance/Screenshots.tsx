export default function PerfScreenshots() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Screenshots / Filmstrip（對齊感知延遲）</h1>
        <p className="text-gray-700">
          Performance 面板在錄製時可以勾選 Screenshots，生成逐幀的 Filmstrip。
          這能讓你把效能指標（像 LCP）對齊到實際畫面，檢查「數字」和「體感」是否一致。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>數據顯示 LCP 已完成，但使用者卻覺得畫面還沒出來 → 用 Filmstrip 對齊關鍵幀來驗證。</li>
          <li>想知道首屏元素到底「什麼時候真的畫出來」。</li>
          <li>想用畫面逐幀比對，釐清效能數據和真實體驗的落差。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Performance 面板並勾選 Screenshots。</li>
          <li>點 Start recording → 在頁面觸發載入動作（例：載入大型圖片）。</li>
          <li>停止錄製後，檢查 Web Vitals 區塊中的 LCP。</li>
          <li>用 Filmstrip 對齊該幀，確認 LCP 元素出現的實際畫面時間。</li>
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
