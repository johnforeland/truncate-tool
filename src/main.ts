import * as core from '@actions/core'
import { TruncateTool } from './truncate.js'

export async function run(): Promise<void> {
  const tool = new TruncateTool()
  core.setOutput('text', tool.truncate())
}
