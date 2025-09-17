export default function PerfFlamegraphs() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Main / Bottom-Up / Call Tree 讀法</h1>
        <p className="text-gray-700">
          Performance 錄製後，<b>Main</b> 顯示主執行緒的時間軸；<b>Bottom-Up</b> 以「最耗時的函式」排序；<b>Call Tree</b> 以「呼叫關係」呈現。
          先在 Bottom-Up 找 Top 熱點，再用 Call Tree 回溯來源，最後在 Main 上對齊長任務（50ms以上）。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → Performance 錄製。</li>
          <li>點「重計算」幾次，停止錄製。</li>
          <li>切 <b>Bottom-Up</b>，按 <b>Total Time</b> 排序 → 找最熱函式。</li>
          <li>切 <b>Call Tree</b>，查看熱點的上游呼叫鏈。</li>
          <li>在 <b>Main</b> 軸上點長任務（50ms以上），評估切分/延後/Idle callback 的方案。</li>
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
