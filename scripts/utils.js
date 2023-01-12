module.exports.terminal = {
   /**
    * Outputs green text to the terminal.
    * @param {string} text
    */
   green(text) {
      console.log("\033[32m" + text + "\033[0m");
   },
   /**
    * Outputs red text to the terminal.
    * @param {string} text
    */
   red(text) {
      console.log("\033[31m" + text + "\033[0m");
   },
   /**
    * Outputs yellow text to the terminal.
    * @param {string} text
    */
   yellow(text) {
      console.log("\033[33m" + text + "\033[0m");
   },
};
