# DevTools 練功房 by 童
網站: https://joy-jc-tong.github.io/Chrome-DevTools-Example/

## 📑 功能目錄
- [DOM Breakpoints](#1-dom-breakpoints)
- [Event Listeners](#2-event-listeners)
- [Layout Pane](#3-layout-pane)
- [CSS Overview](#4-css-overview)
- [Changes](#5-changes)
- [Accessibility](#6-accessibility)



## 📘 Elements 功能說明
---
### 1. DOM Breakpoints
- **功能簡介**：在指定 DOM 節點發生變動時中斷程式，協助追蹤來源程式碼。  
- **應用場景**：  
  - 偵測 UI 突然消失或被修改時，找出是哪段 JavaScript 造成。  
  - 偵測元素屬性（如 `class`、`style`）被更改。
- **範例畫面**：
  - 子樹修改(<ul>設定"Subtree"，移除子項<li>會觸發)
  - <img width="1156" height="598" alt="image" src="https://github.com/user-attachments/assets/f5e4b0b0-c63a-456e-8137-3bc5f98fc768" />

      
---

### 2. Event Listeners
- **功能簡介**：檢視 DOM 元素綁定的事件監聽器，並可跳轉至對應程式碼。  
- **應用場景**：  
  - 偵測按鈕點擊無效或觸發多次。  
  - 確認是哪個 JS 檔案綁定了事件。  
---

### 3. Layout Pane
- **功能簡介**：可視化檢查元素的排版結構與 box model。  
- **應用場景**：  
  - 偵錯元素對齊錯位或 overflow 問題。  
  - 檢查 Flexbox 或 Grid 排版情況。  
---

### 4. CSS Overview
- **功能簡介**：產生整體頁面的 CSS 使用統計，協助檢查設計一致性。  
- **應用場景**：  
  - 確認是否混用了過多顏色或字型。  
  - 找出未使用的 CSS 選擇器。  
---

### 5. Changes
- **功能簡介**：顯示在 DevTools 所做的修改，方便同步回程式碼。  
- **應用場景**：  
  - 快速複製 CSS 調整回專案檔案。  
  - 避免忘記修改了哪些地方。  
---

### 6. Accessibility
- **功能簡介**：檢查元素的無障礙（a11y）屬性與可讀性。  
- **應用場景**：  
  - 驗證 ARIA 屬性是否正確。  
  - 確保螢幕閱讀器能正確解析內容。  

