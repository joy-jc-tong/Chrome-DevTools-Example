export default function PerfCls() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Web Vitals Lane & Layout Shift Regions（CLS）</h1>
        <p className="text-gray-700">
          Performance 面板在錄製時可以勾選 Layout Shift Regions，畫面上會標示出造成 CLS 的元素。
          同時時間軸上的 Web Vitals Lane 也會標出每一次位移，幫助你找到 CLS 的主要來源。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想知道 哪個元素 造成了版面跳動。</li>
          <li>想確認 CLS 是來自橫幅、圖片還是延遲載入的內容。</li>
          <li>想釐清哪一次位移對 CLS 貢獻最大。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Performance 面板並勾選 Layout Shift Regions。</li>
          <li>開始錄製，觸發會造成位移的操作（例：插入 banner、圖片延遲載入）。</li>
          <li>停止錄製後，在 Web Vitals Lane 觀察 CLS 標記。</li>
          <li>點擊某個 shift，畫面會高亮造成位移的元素。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/performance/cls.html`} target="_blank" rel="noreferrer">
            開啟示範頁（製造 CLS）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>找出「最大一次 CLS」的責任元素。</li>
            <li>修改示範頁（在 DevTools 加 `min-height` 或預留空間）再錄一次，比較 CLS 下降。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
