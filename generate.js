const fs = require('fs')

const NUMBER_OF_ITEMS = 100

for (let i = 0; i <= NUMBER_OF_ITEMS; i++) {

  const json = {
    "name": "Unlocked Demo Token (Example)" + (i === 0 ? "" : ` ${i}/${NUMBER_OF_ITEMS}`),
    "image": "https://ipfs.legitimate.tech/ipfs/QmZxHi87WSABAC2Sh4HWckVgTwXrW4GuVHF7f6LnssG5GU",
    "description": `This NFT is for demo and testing purposes`
  }

  if (i === 0) {
    fs.writeFileSync(`./locked`, JSON.stringify(json), (err) => {
      console.log(err)
    })
  } else {
    fs.writeFileSync(`./${i}`, JSON.stringify(json), (err) => {
      console.log(err)
    })
  }
}
