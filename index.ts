import path from 'path'
import { exec } from 'child_process'

const targetUrl = "https://www.youtube.com/@fanatic1514"

const config = {
  archiveFilePath: path.resolve(__dirname, 'data', 'archive.txt'),
  downloadDirPath: path.resolve(__dirname, 'data', 'videos')
}

const cmd = `yt-dlp --download-archive "${config.archiveFilePath}" -o "${path.join(config.downloadDirPath, '%(title)s', '%(title)s.%(ext)s')}" ${targetUrl}`

try {
  await new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err || stderr) {
        return reject(err || stderr)
      }
      resolve(stdout)
    })
  })
  console.log(`Syncing "${config.downloadDirPath}" with "${targetUrl}" DONE!`)
  process.exit(0)
} catch (e) {
  console.error(e)
  process.exit(1)
}
