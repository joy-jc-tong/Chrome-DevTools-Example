export default function AllocationSamplingPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Allocation Sampling（熱點配置）</h1>
        <p className="text-gray-700">
          Allocation Sampling 會在一段期間內「取樣」記憶體配置，按 函式/呼叫堆疊 聚合，找出哪些程式在大量建立物件。
          比起 Heap Snapshot 的「定格」，它更適合觀察「過程中的配置行為」。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想知道「是哪個函式在瘋狂 new 物件」。</li>
          <li>想比較開關優化（快取/物件重用）前後的配置差異。</li>
          <li>想鎖定導致 GC 頻繁、TBT 升高的配置熱點。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Memory 面板，選 Allocation sampling → Start。</li>
          <li>進行操作（例：連點「產生垃圾」或「產生快取物件」）。</li>
          <li>Stop 後，在報表以 Total 排序，查看最大配置的熱點函式與堆疊。</li>
          <li>開啟「優化模式」（物件重用/快取），重做一次並比較差異。</li>
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
