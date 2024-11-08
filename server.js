import Nullstack from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application)

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
}

context.worker.enabled = false

export default context
