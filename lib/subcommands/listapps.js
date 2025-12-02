import { parse as parseOpenStepPlist } from '@plist/openstep.parse';

const commands = {};

/**
 * @typedef {'System' | 'User'} ApplicationType
 */

/**
 * @typedef {Object} AppInfo
 * @property {ApplicationType} ApplicationType - Whether the app is a system or user-installed app
 * @property {string} Bundle - File URL to the app bundle
 * @property {string} [BundleContainer] - File URL to the bundle container (User apps only)
 * @property {string} CFBundleDisplayName - Display name of the app
 * @property {string} CFBundleExecutable - Executable name
 * @property {string} CFBundleIdentifier - Bundle identifier (e.g., 'com.apple.mobilesafari')
 * @property {string} CFBundleName - Bundle name
 * @property {string} CFBundleVersion - Version string
 * @property {string} [DataContainer] - File URL to the data container
 * @property {Object<string, string>} GroupContainers - Map of group IDs to container URLs
 * @property {string} Path - Filesystem path to the app
 * @property {string[]} SBAppTags - Array of app tags
 */

/**
 * Get the list of installed applications on the simulator.
 *
 * @this {import('../simctl').Simctl}
 * @return {Promise<Object<string, AppInfo>>} Object mapping bundle identifiers to app info.
 * @throws {Error} If the corresponding simctl command fails or output cannot be parsed
 */
commands.listApps = async function listApps () {
  const {stdout} = await this.exec('listapps', {
    args: [this.requireUdid('listapps')],
  });
  const plistString = stdout.toString('utf-8').trim();
  try {
    return /** @type {Object<string, AppInfo>} */ (parseOpenStepPlist(plistString));
  } catch (e) {
    throw new Error(`Unable to parse simctl listapps output: ${e.message}`);
  }
};

export default commands;
