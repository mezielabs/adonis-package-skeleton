import * as sinkStatic from '@adonisjs/sink'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { join } from 'path'

type InstructionsState = {}

function getStub(...relativePaths: string[]) {
  return join(__dirname, 'templates', ...relativePaths)
}

export default async function instructions(
  projectRoot: string,
  app: ApplicationContract,
  sink: typeof sinkStatic
) {
  const state: InstructionsState = {}

  // Your implementation goes here
}
