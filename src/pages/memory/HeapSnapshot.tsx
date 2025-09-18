export default function HeapSnapshotPage() {
    return (
      <div className="space-y-8">
        <header>
          <h1 className="text-2xl font-bold">Heap Snapshot（Retainers / Distance）</h1>
          <p className="text-gray-700">
            Heap Snapshot 可以拍下某一刻的記憶體狀態，幫助分析有哪些物件還被保留。
            透過 Retainers 可以查出「是誰在留住這個物件」，Distance 則顯示它離 GC Root（垃圾回收根）的參照深度。
          </p>
        </header>
  
        <section>
          <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>想找出 DOM 沒有被正確釋放，卻還留在記憶體。</li>
            <li>想檢查閉包或全域變數是不是保住了不該存在的物件。</li>
            <li>想知道物件的參照鏈有多深，為什麼沒被回收。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>打開 Memory 面板，選擇 Heap snapshot → 點 Take snapshot。</li>
            <li>在左側搜尋可疑類別（例如 Detached HTMLDivElement 或自訂類別）。</li>
            <li>選取一個實例 → 右側切到 Retainers，查看是被哪個閉包或監聽器保住。</li>
            <li>檢查 Distance 與 Retained Size，確認保留鏈與影響大小。</li>
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
  