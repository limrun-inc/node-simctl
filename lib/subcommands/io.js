import { rimraf } from 'rimraf';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { uuidV4 } from '../helpers';
//replace with screenshot
const commands = {};

/**
 * Gets base64 screenshot for device
 * It is required that Simulator is in _booted_ state.
 *
 * @this {import('../simctl').Simctl}
 * @since Xcode SDK 8.1
 * @return {Promise<string>} Base64-encoded Simulator screenshot.
 * @throws {Error} If the corresponding simctl subcommand command
 *                 returns non-zero return code.
 * @throws {Error} If the `udid` instance property is unset
 */
commands.getScreenshot = async function getScreenshot () {
  const lim = await this.getLimClient();
  const dataUri = (await lim.screenshot()).dataUri;
  return dataUri.replace(/^data:image\/\w+;base64,/, '');
};

export default commands;
