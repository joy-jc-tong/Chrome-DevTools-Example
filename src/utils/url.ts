/**
 * 生成示範頁面的 URL，自動處理 GitHub Pages 子路徑
 * @param path - fixtures 下的相對路徑
 * @returns 完整的 URL
 */
export const demoUrl = (path: string): string => {
  // 去掉前導 ./、/、fixtures/
  const clean = path.replace(/^(\.\/|\/)?fixtures\/?/, '');
  return `${import.meta.env.BASE_URL}fixtures/${clean}`;
};
