import { session, Extension } from 'electron'
import * as path from 'path'
import os from 'os'

// load local vue dev tools
const vueDevToolsPath = path.join(
  os.homedir(),
  '/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/olofadcdnkkjdfgjcmjaadnlehnnihnl/6.4.5_0'
)

function installDevTools (): Promise<Extension> {
  return session.defaultSession.loadExtension(vueDevToolsPath)
}

export default installDevTools
