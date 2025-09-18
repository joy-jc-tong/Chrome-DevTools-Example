export default function PerfFlamegraphs() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Main / Bottom-Up / Call Tree 讀法</h1>
        <p className="text-gray-700">
          Performance 錄製後會有三種常用視角：
          <br />
          <b>Main</b>：主執行緒的時間軸，顯示程式執行的先後順序。
          <br />
          <b>Bottom-Up</b>：依照「最耗時的函式」排序，讓你快速找到效能熱點。
          <br />
          <b>Call Tree</b>：顯示函式的呼叫鏈，幫助追蹤熱點的來源。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想快速找出整體效能瓶頸 → 先看 Bottom-Up。</li>
          <li>想知道瓶頸是誰呼叫的 → 看 Call Tree 回溯來源。</li>
          <li>想對照長任務（&gt;50ms）出現在頁面什麼時候 → 用 Main 對齊時間軸。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>錄製一段 Performance 分析資料。</li>
          <li>切到 Bottom-Up，按 Total Time 排序，找到最耗時的函式。</li>
          <li>切到 Call Tree，查看這些熱點是從哪裡被呼叫的。</li>
          <li>回到 Main 時間軸，點擊長任務（50ms 以上），評估是否能切分、延後，或改用 idle callback。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/performance/cpu-hot.html`} target="_blank" rel="noreferrer">
            開啟示範頁（CPU 熱點）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>鎖定一個 ≥50ms 的長任務，截圖註記。</li>
            <li>把計算拆成多段（修改示範頁 script），再錄一次，對比 TBT/長任務次數。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
