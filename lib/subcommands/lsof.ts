import type { Simctl } from '../simctl';

/**
 * List all open files on the Simulator. This is equivalent of
 * running `lsof` command against the launchd_sim process.
 *
 * @returns A promise that resolves to a list of open files.
 */
export async function lsof(this: Simctl): Promise<Array<{ kind: string, path: string }>> {
    const lim = await this.requireLimClient();
    return lim.lsof();;
}
