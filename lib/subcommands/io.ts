import type { Simctl } from '../simctl';

/**
 * Gets base64 screenshot for device
 * It is required that Simulator is in _booted_ state.
 *
 * @since Xcode SDK 8.1
 * @return Base64-encoded Simulator screenshot.
 * @throws {Error} If the corresponding simctl subcommand command
 *                 returns non-zero return code.
 * @throws {Error} If the `udid` instance property is unset
 */
export async function getScreenshot (this: Simctl): Promise<string> {
  const screenshot = await this.lim.screenshot();
  return screenshot.base64.replace(/^data:image\/\w+;base64,/, '');
}

