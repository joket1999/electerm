/**
 * system icon generator
 */

const {resolve} = require('path')
const {exec, echo} = require('shelljs')
const dir = resolve(__dirname, '../app/build')
const src = resolve(__dirname, '../app/imgs/heduo-grey-1024x1024.png')
const bin = './node_modules/.bin'


echo('start build')

const timeStart = + new Date()

echo('clean')

echo('building icons')
exec(`${bin}/png2icons ${src} ${dir}/icons -allp`)

const endTime = +new Date()
echo(`done in ${(endTime - timeStart)/1000} s`)
