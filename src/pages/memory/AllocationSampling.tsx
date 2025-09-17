export default function AllocationSamplingPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Allocation Sampling（熱點配置）</h1>
        <p className="text-gray-700">
          <b>Sampling</b> 會以取樣方式記錄在一段期間內的記憶體分配熱點（按函式/堆疊聚合）。
          用於找出「哪個函式在瘋狂建立物件」。比 Heap Snapshot 更適合觀察「過程中的配置行為」。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → Memory 面板 → 選 <b>Allocation sampling</b> → <b>Start</b>。</li>
          <li>在示範頁連點「產生垃圾」與「產生快取物件」。</li>
          <li>按 <b>Stop</b> → 在報表中按 <b>Total</b> 排序，找出最大分配的熱點函式。</li>
          <li>切換「優化模式」後重做，驗證過度建立的暫存物件被重用。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/memory/allocation-sampling.html`} target="_blank" rel="noreferrer">
            開啟示範頁（過度配置 vs 物件重用）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Sampling 報表中鎖定最大熱點（如 <code>makeTempObjects</code>）。</li>
            <li>開啟「優化模式」後重測，總分配量應下降。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
