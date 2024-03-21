# truncate-tool

GitHub Action to reduce the length of a string by either lines or characters.

## Usage

### Inputs

- `text` - The text to truncate. (Required)
- `max_lines` - The maximum number of lines to keep. (Optional)
- `max_characters` - The maximum number of characters to keep. (Optional)
- `string_to_append` - The "Read More" line to append to bottom of the output. (Optional)

Either `max_lines` or `max_chars` is required.

### Outputs

- `text` - The truncated text
