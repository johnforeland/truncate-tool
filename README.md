# truncate-tool

GitHub Action to reduce the length of a string by either lines or characters.

## Example Workflow

```yaml
name: Reduce PR Body Size
on:
  pull_request:
jobs:
  truncate:
    runs-on: ubuntu-latest
    steps:
      - uses: johnforeland/truncate-tool@v1
        id: truncate-lines
        with:
          text: 'my\nstring'
          max_lines: '1'
          string_to_append: ''

      - run: echo "${{ steps.truncate-lines.outputs.text }}" # should be 'my'

      - uses: johnforeland/truncate-tool@v1
        id: truncate-characters
        with:
          text: 'my\nstring'
          max_characters: '5'
          string_to_append: ''

      - run: echo "${{ steps.truncate-characters.outputs.text }}" # should be 'my\nstr' (because newline counts as one characters)

      - uses: johnforeland/truncate-tool@v1
        id: truncate-with-append
        with:
          text: 'my\nstring\nhas\multiple\nlines'
          max_characters: '4'
          string_to_append: '...'

      - run: echo "${{ steps.truncate-with-append.outputs.text }}" # should be 'my\nstring\n\n...' (because newline and ... counts as one row)
```

## Inputs

- `text` - The text to truncate. (Required)
- `max_lines` - The maximum number of lines to keep. (Optional)
- `max_characters` - The maximum number of characters to keep. (Optional)
- `string_to_append` - The "Read More" line to append to bottom of the output. (Optional)

Either `max_lines` or `max_chars` is required.

## Outputs

- `text` - The truncated text
