import { parse } from '@plist/openstep.parse';
import type { Simctl } from '../simctl';
import type { AppInfo } from '../types';

/**
 * List all installed apps on the Simulator.
 *
 * @returns A promise that resolves to a dictionary of app information.
 */
export async function listApps (this: Simctl): Promise<Record<string, AppInfo>> {
    const {stdout} = await this.exec('listapps', {
        args: [this.requireUdid('listapps')],
    });
    const plistString = stdout.trim();
    try {
        return parse(plistString) as unknown as Record<string, AppInfo>;
    } catch (e) {
        throw new Error(`Unable to parse simctl listapps output: ${e.message}`);
    }
};
