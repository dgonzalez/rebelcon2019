let obviousMemoryLeak = ''


function consumeMemory() {
  console.log(`Total characters: ${obviousMemoryLeak.length}`)
  obviousMemoryLeak += new Array(1024*5).join('(╯°□°）╯︵ ┻━┻')
}

setInterval(consumeMemory, process.env.INTERVAL || 20)
