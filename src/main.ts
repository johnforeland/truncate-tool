import * as core from '@actions/core'
import { TruncateTool } from './truncate'

export function run(): void {
  const tool = new TruncateTool()
  core.setOutput('text', tool.truncate())
}
