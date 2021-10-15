#!/usr/bin/env node
const {Ulid, Uuid} = require('id128')

const error = (message, code = 1) => {
  console.error(message)
  process.exit(code)
}

const {value, mode} = process.argv.slice(2).reduce((acc, arg) => {
  if (arg.startsWith('-')) {
    return {
      ...acc,
      mode: (() => {
        switch (arg.replace(/^--?/, '')) {
          case 'ulid':
            return 'ulid'

          case 'uuid':
            return 'uuid'

          default:
            error(`Unknown argument ${arg}`)
        }
      })(),
    }
  }

  if (acc.value) {
    error('Too many arguments')
  }

  return {
    ...acc,
    value: arg.replace(/^0x/, ''),
  }
}, {})

if (!value) {
  error('Please pass in a ULID')
}

(() => {
  // ULID to HEX/UUID
  if (Ulid.isCanonical(value)) {
    const hex = Ulid.fromCanonical(value).toRaw()

    if (mode !== 'uuid') {
      console.log(`0x${hex}`)
    }

    if (mode !== 'ulid') {
      console.log(Uuid.fromRaw(hex).toCanonical().toLowerCase())
    }

    return
  }

  // HEX to ULID/UUID
  if (Ulid.isRaw(value)) {
    const ulid = Ulid.fromRaw(value).toCanonical()

    if (mode !== 'uuid') {
      console.log(ulid)
    }

    if (mode !== 'ulid') {
      console.log(Uuid.fromRaw(value).toCanonical().toLowerCase())
    }

    return
  }

  // UUID to ULID/HEX
  if (Uuid.isCanonical(value)) {
    const hex = Uuid.fromCanonical(value).toRaw()

    if (mode !== 'ulid') {
      console.log(`0x${hex}`)
    }

    if (mode !== 'uuid') {
      console.log(Ulid.fromRaw(hex).toCanonical())
    }

    return
  }

  console.error('Not sure what to do with this value')
})();
