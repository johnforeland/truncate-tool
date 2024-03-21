import * as core from '@actions/core'
import { TruncateTool } from './main'

const tool = new TruncateTool()
core.setOutput('text', tool.truncate())
