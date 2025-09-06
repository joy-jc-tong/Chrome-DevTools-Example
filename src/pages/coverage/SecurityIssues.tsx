const SecurityIssues = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Security Issues</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Security Issues 面板幫助您識別和修復網站中的安全問題，包括混合內容、憑證問題、CSP 違規等安全相關問題。
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">常見安全問題：</h3>
            <ul className="list-disc list-inside space-y-1 text-red-700">
              <li><strong>Mixed Content:</strong> HTTPS 頁面載入 HTTP 資源</li>
              <li><strong>Certificate Issues:</strong> SSL/TLS 憑證問題</li>
              <li><strong>CSP Violations:</strong> 內容安全政策違規</li>
              <li><strong>Insecure Forms:</strong> 不安全的表單提交</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">安全檢查項目：</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li>HTTPS 使用情況</li>
              <li>憑證有效性</li>
              <li>內容安全政策</li>
              <li>跨域資源共享 (CORS)</li>
              <li>安全標頭設定</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">修復建議：</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700">
              <li>將所有資源升級為 HTTPS</li>
              <li>更新過期的 SSL 憑證</li>
              <li>實施適當的 CSP 政策</li>
              <li>使用安全的表單提交方式</li>
              <li>設定適當的安全標頭</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityIssues;
