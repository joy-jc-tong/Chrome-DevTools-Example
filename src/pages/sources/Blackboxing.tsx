export default function Blackboxing() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Blackboxing</h1>
        <p className="text-gray-700 leading-relaxed">
          Blackboxing 可以把你不想看的檔案（例如第三方套件）標記起來。
          這樣在除錯時，Call Stack 會自動略過它們，直接帶你到自己程式碼的來源。
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>錯誤堆疊裡塞滿第三方庫，找不到自己的程式碼。</li>
          <li>想忽略像 vendor.js、react-dom.js 這種你不需要追的檔案。</li>
          <li>想讓除錯流程更乾淨，直接聚焦到專案核心程式。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources 面板左側找到要忽略的檔案（例：vendor-ui.js）。</li>
          <li>右鍵 → Blackbox script。</li>
          <li>再次觸發錯誤，Call Stack 會自動跳過該檔案，直接定位到你的程式碼（例：app.js）。</li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/blackbox.html`} target="_blank" rel="noreferrer">
            開啟示範頁（第三方包裝錯誤）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>Blackbox <code>vendor-ui.js</code> → 堆疊變乾淨。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
