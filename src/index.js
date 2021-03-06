import getInfo from './info'
import filterMedia from './filter-media'
import { fromURL, fromMediaObj } from './download'

import isValidURL from './is-url'

import STREAMING_PROTOCOLS from './protocols'
import FORMATS from './formats'

const scdl = {}
const download = async (url, clientID) => {
  const info = await getInfo(url, clientID)
  return await fromMediaObj(info.media.transcodings[0], clientID)
}

scdl.filterMedia = filterMedia
scdl.STREAMING_PROTOCOLS = STREAMING_PROTOCOLS
scdl.FORMATS = FORMATS
scdl.download = download
scdl.downloadMedia = fromMediaObj
scdl.downloadFromURL = fromURL
scdl.getInfo = getInfo
scdl.isValidURL = isValidURL

export default scdl
