import * as core from '@actions/core'

export interface IActionInputs {
  TEXT: string
  MAX_LINES: number
  MAX_CHARACTERS: number
  STRING_TO_APPEND: string
}

export function getText(): string {
  return core.getInput('text', { required: false })
}

export function getMaxLines(): number {
  const value = core.getInput('max_lines', { required: false })
  return value ? parseInt(value, 10) : 0
}

export function getMaxCharacters(): number {
  const value = core.getInput('max_characters', { required: false })
  return value ? parseInt(value, 10) : 0
}

export function getStringToAppend(): string {
  return core.getInput('string_to_append', { required: false })
}

export const getInputs = (): IActionInputs => ({
  TEXT: getText(),
  MAX_LINES: getMaxLines(),
  MAX_CHARACTERS: getMaxCharacters(),
  STRING_TO_APPEND: getStringToAppend()
})
