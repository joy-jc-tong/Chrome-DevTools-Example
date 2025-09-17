export default function HeapSnapshotPage() {
    return (
      <div className="space-y-8">
        <header>
          <h1 className="text-2xl font-bold">Heap Snapshot（Retainers / Distance）</h1>
          <p className="text-gray-700">
            透過 Heap Snapshot 可以拍下某一刻的堆記憶體，並用 <b>Retainers</b> 追出「誰在保留目標物件」，
            <b>Distance</b>（到 GC Root 的距離）則幫助判斷物件與根之間的參照深度。適合找出閉包/全域暫存導致的 DOM 洩漏。
          </p>
        </header>
  
        <section>
          <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>開啟下方示範頁 → 打開 <b>Memory</b> 面板。</li>
            <li>選擇 <b>Heap snapshot</b> → <b>Take snapshot</b>。</li>
            <li>在左側樹狀搜尋可疑類別（如 <code>Detached HTMLDivElement</code> 或自訂類別）。</li>
            <li>選取實例 → 右側切到 <b>Retainers</b>，追出是被哪個閉包/監聽器保住。</li>
            <li>觀察 <b>Distance</b> 與 <b>Retained Size</b>，確認保留鏈。</li>
          </ol>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">互動練習</h2>
          <div className="rounded-xl border p-4 bg-gray-50">
            <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
               href={`${import.meta.env.BASE_URL}fixtures/memory/heap-snapshot.html`} target="_blank" rel="noreferrer">
              開啟示範頁（事件閉包保住 DOM）
            </a>
            <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
              <li>按「新增卡片（附監聽）」10 次，再按「移除所有 DOM」。</li>
              <li>拍攝 Snapshot，搜尋「<code>Detached</code>」或直接找 <code>Card</code> 元素。</li>
              <li>在 Retainers 找到 <code>leakHandlers</code> 陣列或閉包把 DOM 保住的證據。</li>
              <li>點「修正版本」再重做一次流程，確認 Snapshot 裡 Detached 降低。</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  