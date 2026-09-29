/**
 * YACHO - 検索キーワード正規化（クライアント用 ES Module）
 *
 * server/core/searchNormalizer.js と同一のロジック。
 * サーバー側とクライアント側で同じ正規化ルールを適用し、
 * キーワードの不一致を防止する。
 */

/**
 * 入力文字列を正規化する
 * - NFKC正規化（全角英数→半角、互換文字の統一）
 * - 前後の空白を除去
 * - 連続する空白・タブ・全角スペースを1つの半角スペースに正規化
 * @param {string} raw
 * @returns {string}
 */
export function normalizeInput(raw) {
  if (typeof raw !== 'string') return '';
  return raw.normalize('NFKC').trim().replace(/[\s\u3000]+/g, ' ');
}

/**
 * 正規化済み文字列からファイル名用キーを生成する
 * スペースをすべて除去し、NFD正規化を適用する
 * @param {string} normalized
 * @returns {string}
 */
export function toFileKey(normalized) {
  return normalized.replace(/\s+/g, '').normalize('NFD');
}
