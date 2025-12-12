

const commands = {};

/**
 * List all open files on the Simulator.
 *
 * @this {import('../simctl').Simctl}
 * @return {Promise<Array<{ kind: string, path: string }>>} List of open files.
 * @throws {Error} If the corresponding simctl subcommand command
 *                 returns non-zero return code.
 * @throws {Error} If the `udid` instance property is unset
 */
commands.lsof = async function lsof() {
  const lim = await this.getLimClient();
  const result = await lim.lsof();
  return result;
};

export default commands;