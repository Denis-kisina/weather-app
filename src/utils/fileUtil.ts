import fs from 'fs'

const saveCordinates = (notes: any) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./node_modules/cordinates.json', dataJSON)
  }
  
  const loadCordinates = () => {
    try {
      const dataBuffer = fs.readFileSync('./node_modules/cordinates.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
    } catch (e) {
      return []
    }
  }

  export {saveCordinates, loadCordinates}
