import { getInputs, IActionInputs } from './action-inputs'

export class TruncateTool {
  inputs: IActionInputs
  text: string
  lines: string[]

  constructor() {
    this.inputs = getInputs()
    this.text = this.inputs.TEXT
    this.lines = this.inputs.TEXT.split(/\n/)
  }

  private truncateByCharacters(): string {
    const appendLength = this.inputs.STRING_TO_APPEND ? this.inputs.STRING_TO_APPEND.length + 1 : 0
    const maxCharacters = this.inputs.MAX_CHARACTERS
    const max = maxCharacters - appendLength

    if (maxCharacters == 0) return ''
    if (maxCharacters >= this.text.length) return this.text
    if (maxCharacters < appendLength) return this.text.substring(0, maxCharacters)

    let truncated_text = this.text.substring(0, max)

    if (this.inputs.STRING_TO_APPEND) {
      truncated_text += ' ' + this.inputs.STRING_TO_APPEND
    }

    return truncated_text
  }

  private truncateByLines(): string {
    const appendLength = this.inputs.STRING_TO_APPEND ? 2 : 0
    const maxLines = this.inputs.MAX_LINES
    const max = maxLines - appendLength

    if (maxLines == 0) return ''
    else if (maxLines >= this.lines.length) return this.text

    const truncated_lines = this.lines.slice(0, max)

    if (this.inputs.STRING_TO_APPEND) {
      truncated_lines.push('')
      truncated_lines.push(this.inputs.STRING_TO_APPEND)
    }

    return truncated_lines.join('\n')
  }

  truncate(): string {
    if (this.inputs.MAX_LINES != undefined) {
      return this.truncateByLines()
    } else if (this.inputs.MAX_CHARACTERS != undefined) {
      return this.truncateByCharacters()
    }

    return ''
  }
}
