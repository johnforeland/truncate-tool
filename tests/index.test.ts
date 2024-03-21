import { describe } from 'jest-circus'
import { getInputs, IActionInputs } from '../src/action-inputs'
import { TruncateTool } from '../src/main'

jest.mock('../src/action-inputs')

describe('1 line in input', () => {
  describe('MAX_LINES', () => {
    it('truncates to 0 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_LINES: 0 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('truncates to max 5 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_LINES: 5 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet')
    })
  })

  describe('MAX_CHARACTERS', () => {
    it('truncates to max 0 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 0 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('truncates to max 3 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 3 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lor')
    })
    it('truncates to max 9 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 9 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ips')
    })
  })
})

describe('10 lines in input', () => {
  describe('MAX_LINES', () => {
    it('truncates to 0 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_LINES: 0 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('truncates to max 5 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_LINES: 5 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe(
        'Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet'
      )
    })
  })

  describe('MAX_CHARACTERS', () => {
    it('truncates to max 0 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_CHARACTERS: 0 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('truncates to max 3 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_CHARACTERS: 3 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lor')
    })
    it('truncates to max 9 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_CHARACTERS: 9 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ips')
    })
    it('truncates to max 30 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_CHARACTERS: 30 }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet\nLor')
    })
  })
})
describe('STRING_TO_APPEND', () => {
  describe('MAX_LINES', () => {
    it('1 line truncated to 0 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_LINES: 0, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('1 line truncated to max 5 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_LINES: 5, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet')
    })
    it('2 lines truncated to max 1 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(2), MAX_LINES: 1, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet\n\n...')
    })
    it('2 lines truncated to max 2 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(2), MAX_LINES: 2, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet')
    })
    it('2 lines truncated to max 3 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(2), MAX_LINES: 3, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet')
    })
    it('10 lines truncated to 0 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_LINES: 0, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('10 lines truncated to max 5 lines', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(10), MAX_LINES: 5, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\n\n...')
    })
  })

  describe('MAX_CHARACTERS', () => {
    it('26 characters truncated to max 0 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 0, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('')
    })
    it('26 characters truncated to max 3 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 3, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lor')
    })
    it('26 characters truncated to max 9 characters', async () => {
      const mock: Partial<IActionInputs> = { ...getMock(1), MAX_CHARACTERS: 9, STRING_TO_APPEND: '...' }
      ;(getInputs as any).mockImplementation(() => mock)
      const result = new TruncateTool().truncate()
      expect(result).toBe('Lorem ...')
    })
  })
})

function getMock(lines: number = 1): Partial<IActionInputs> {
  let text: string[] = []
  for (let i = 0; i < lines; i++) {
    text.push('Lorem ipsum dolor sit amet')
  }
  return {
    TEXT: text.join('\n')
  }
}
