const modulesFiles = require.context('./options', true, /index.js$/)
const modules = modulesFiles.keys().reduce((pre, next) => Object.assign(pre, modulesFiles(next).default), {})

export default modules