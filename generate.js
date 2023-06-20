const fs = require('fs')

const NUMBER_OF_ITEMS = 100

for (let i = 0; i <= NUMBER_OF_ITEMS; i++) {

  const json = {
    "name": "Demo Token (Example)" + (i === 0 ? "" : ` ${i}/${NUMBER_OF_ITEMS}`),
    "image": "https://ipfs.legitimate.tech/ipfs/QmcBt413vhuETPgaXpKpU6X8puA1oLsr8mu426gdEUtHKG",
    "description": `This NFT is for demo and testing purposes`,
    "animation_url": "https://ipfs.legitimate.tech/ipfs/QmZXHCJJjZHfjVZbudmix8v1oLX7J3ARzSATAwcQeLp8wk",
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
