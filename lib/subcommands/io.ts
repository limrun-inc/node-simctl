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
  const lim = await this.requireLimClient();
  const screenshot = await lim.screenshot();
  return screenshot.dataUri.replace(/^data:image\/\w+;base64,/, '');
}

