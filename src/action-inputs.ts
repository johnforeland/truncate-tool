import * as core from '@actions/core'

export interface IActionInputs {
  TEXT: string
  MAX_LINES: number
  MAX_CHARACTERS: number
  STRING_TO_APPEND: string
}

export const getInputs = (): IActionInputs => {
  const TEXT: string = core.getInput('text', { required: false })
  const MAX_LINES: string = core.getInput('max_lines', { required: false })
  const MAX_CHARACTERS: string = core.getInput('max_characters', { required: false })
  const STRING_TO_APPEND: string = core.getInput('string_to_append', { required: false })
  return {
    TEXT,
    MAX_LINES: MAX_LINES ? parseInt(MAX_LINES) : 0,
    MAX_CHARACTERS: MAX_CHARACTERS ? parseInt(MAX_LINES) : 0,
    STRING_TO_APPEND
  }
}
