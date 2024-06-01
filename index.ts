

import path from 'path'
import { exec } from 'child_process'
import { CronJob } from 'cron'

const targetUrl = ""

const config = {
  archiveFilePath: path.resolve(__dirname, 'data', 'archive.txt'),
  downloadDirPath: path.resolve(__dirname, 'data', 'videos')
}

const cmd = `yt-dlp --quiet -f best --download-archive "${config.archiveFilePath}" -o "${path.join(config.downloadDirPath, '%(title)s', '%(title)s.%(ext)s')}" ${targetUrl}`

function runCMD() {
  exec(cmd, (err, stdout, stderr) => {
    if (err || stderr) {
      throw new Error(String(err || stderr))
    }
    process.exit(1)
  })
}

new CronJob(
  "0 */3 * * *",
  runCMD,
  null,
  true
)

console.info('Cron starts')