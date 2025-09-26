#!/usr/bin/env node

import { defineCommand, runMain } from 'citty'
import { name, version, description } from '../package.json'

const run = defineCommand({
  meta: {
    description: "Run script",
  },
  args: {
    name: {
      type: "positional",
      description: "Script name",
      required: true,
    }
  },
  run: async ({ args }) => {
    console.log(`Running script: ${args.name}`);
  },
});

const main = defineCommand({
  meta: {
    name,
    version,
    description,
  },
  subCommands: {
    run
  }
})

runMain(main)