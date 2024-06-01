
await Bun.build({
  entrypoints: ['index.ts'],
  outdir: 'build',
  target: 'node'
}).then(console.log).catch(console.log)

console.log('Hello')