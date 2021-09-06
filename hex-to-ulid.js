#!/usr/bin/env node
const { Ulid } = require('id128')

const value = process.argv[2]

if (!value) {
  console.error('Please pass in a HEX value')
  process.exit(1)
}

const ulid = Ulid.fromRaw(value.replace(/^0x|-/g, '')).toCanonical()

console.log(ulid)
