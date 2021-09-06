#!/usr/bin/env node
const { Ulid } = require('id128')

const value = process.argv[2]

if (!value) {
  console.error('Please pass in a ULID')
  process.exit(1)
}

const hex = Ulid.fromCanonical(value).toRaw()

console.log(`0x${hex}`)
