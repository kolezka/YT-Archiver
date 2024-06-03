module.exports = {
  apps: [
    {
      name: 'fanaticsync',
      script: 'index.ts',
      interpreter: "~/.bun/bin/bun", // Path to the Bun interpreter
      cron_restart: '0 * * * *', // This means every hour at the 0th minute
      watch: false, // Set to true if you want to watch for file changes
      autorestart: false, // Set to true if you want the process to be restarted on failure
      time: true,
      error_file: "./logs/error.log",
      out_file: "./logs/runtime.log"
    }
  ]
};
