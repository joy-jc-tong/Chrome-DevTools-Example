export default function PerfCls() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Web Vitals Lane & Layout Shift Regions（CLS）</h1>
        <p className="text-gray-700">
          在 Performance 錄製時，勾選 <b>Layout Shift Regions</b>，即可在畫面上標示造成 CLS 的元素區域；
          時間軸的 Web Vitals Lane 也會標出每次 shift，幫你定位最大貢獻者。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → Performance → 勾 <b>Layout Shift Regions</b> → 錄製。</li>
          <li>點「插入上方 banner」與「圖片晚到」造成位移。</li>
          <li>停止錄製 → 在 Web Vitals Lane 觀察 CLS 標記；點擊某個 shift 以高亮責任元素。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href="/fixtures/performance/cls.html" target="_blank" rel="noreferrer">
          開啟示範頁（製造 CLS）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>找出「最大一次 CLS」的責任元素。</li>
          <li>修改示範頁（在 DevTools 加 `min-height` 或預留空間）再錄一次，比較 CLS 下降。</li>
        </ul>
      </section>
    </div>
  );
}
