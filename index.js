#!/usr/bin/env node
const { Ulid } = require('id128')

const value = process.argv[2]

if (!value) {
  console.error('Please pass in a ULID')
  process.exit(1)
}

const hex = Buffer.from(Ulid.fromCanonical(value).bytes).toString('hex')

console.log(`0x${hex.toUpperCase()}`)
