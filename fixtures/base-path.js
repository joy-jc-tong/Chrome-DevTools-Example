/**
 * GitHub Pages Base Path 工具
 * 
 * 解決在 GitHub Pages 子路徑部署時，示範頁資源路徑錯誤的問題
 * 
 * 使用方式：
 * 1. 在 HTML 中引入此腳本：<script src="base-path.js"></script>
 * 2. 使用 getBasePath() 函式取得正確的基礎路徑
 * 3. 將所有靜態資源路徑改為相對路徑或使用此函式拼接
 */

(function() {
  'use strict';

  /**
   * 取得當前頁面的基礎路徑
   * @returns {string} 基礎路徑，例如 "/Chrome-DevTools-Example/"
   */
  function getBasePath() {
    const path = window.location.pathname;
    
    // 尋找 /fixtures/ 在路徑中的位置
    const fixturesIndex = path.indexOf('/fixtures/');
    
    if (fixturesIndex !== -1) {
      // 如果找到 fixtures，返回前面的路徑部分
      return path.substring(0, fixturesIndex + 1);
    }
    
    // 如果沒找到 fixtures，可能是根路徑或其他情況
    // 檢查是否在 GitHub Pages 子路徑
    if (path.startsWith('/Chrome-DevTools-Example/')) {
      return '/Chrome-DevTools-Example/';
    }
    
    // 預設返回根路徑
    return '/';
  }

  /**
   * 修正資源路徑，自動加上基礎路徑
   * @param {string} resourcePath - 資源路徑，例如 "fixtures/network/img-1.png"
   * @returns {string} 完整的資源路徑
   */
  function resolveResourcePath(resourcePath) {
    const basePath = getBasePath();
    
    // 如果路徑已經以 / 開頭，移除它
    if (resourcePath.startsWith('/')) {
      resourcePath = resourcePath.substring(1);
    }
    
    // 拼接基礎路徑和資源路徑
    return basePath + resourcePath;
  }

  /**
   * 修正 preload link 的 href 屬性
   * @param {HTMLLinkElement} linkElement - link 元素
   * @param {string} resourcePath - 資源路徑
   */
  function fixPreloadLink(linkElement, resourcePath) {
    if (linkElement && linkElement.rel === 'preload') {
      linkElement.href = resolveResourcePath(resourcePath);
      
      // 如果有 imagesrcset 屬性也要修正
      if (linkElement.hasAttribute('imagesrcset')) {
        const srcset = linkElement.getAttribute('imagesrcset');
        const fixedSrcset = srcset.replace(/\/fixtures\//g, getBasePath() + 'fixtures/');
        linkElement.setAttribute('imagesrcset', fixedSrcset);
      }
    }
  }

  /**
   * 修正圖片元素的 src 屬性
   * @param {HTMLImageElement} imgElement - 圖片元素
   * @param {string} resourcePath - 資源路徑
   */
  function fixImageSrc(imgElement, resourcePath) {
    if (imgElement) {
      imgElement.src = resolveResourcePath(resourcePath);
    }
  }

  // 將函式暴露到全域作用域
  window.getBasePath = getBasePath;
  window.resolveResourcePath = resolveResourcePath;
  window.fixPreloadLink = fixPreloadLink;
  window.fixImageSrc = fixImageSrc;

  // 自動修正頁面中現有的 preload link
  document.addEventListener('DOMContentLoaded', function() {
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href) {
        // 處理絕對路徑 /fixtures/...
        if (href.startsWith('/fixtures/')) {
          const resourcePath = href.substring(1); // 移除開頭的 /
          fixPreloadLink(link, resourcePath);
        }
        // 處理相對路徑（在同一目錄下）
        else if (!href.startsWith('http') && !href.startsWith('/')) {
          // 取得當前頁面的目錄路徑
          const currentPath = window.location.pathname;
          const lastSlash = currentPath.lastIndexOf('/');
          const currentDir = currentPath.substring(0, lastSlash + 1);
          const resourcePath = currentDir + href;
          fixPreloadLink(link, resourcePath);
        }
      }
    });
  });

})();
