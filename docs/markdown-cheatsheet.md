# Markdown Cheatsheet

A comprehensive guide to Markdown syntax and formatting.

## Table of Contents

- [Basic Syntax](#basic-syntax)
- [Headers](#headers)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Code](#code)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Horizontal Rules](#horizontal-rules)
- [Escaping Characters](#escaping-characters)
- [Task Lists](#task-lists)
- [Footnotes](#footnotes)
- [Definition Lists](#definition-lists)
- [Strikethrough](#strikethrough)
- [Emojis](#emojis)
- [Best Practices](#best-practices)

## Basic Syntax

### Headers

```markdown
# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header
```

**Alternative syntax (H1 and H2 only):**

```markdown
# H1 Header

## H2 Header
```

### Text Formatting

```markdown
_italic text_ or _italic text_
**bold text** or **bold text**
**_bold italic text_** or **_bold italic text_**
~~strikethrough text~~
`inline code`
```

### Lists

#### Unordered Lists

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

* Alternative bullet

- Another alternative
```

#### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
   1. Subitem 3.1
   2. Subitem 3.2
4. Fourth item
```

**Note:** You can use any number for ordered lists - Markdown will automatically number them correctly.

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title text")
[Relative link](../path/to/file.md)
[Anchor link](#section-name)
```

**Reference-style links:**

```markdown
[Link text][reference-id]

[reference-id]: https://example.com "Optional title"
```

### Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
![Alt text](../path/to/image.png)
```

**Reference-style images:**

```markdown
![Alt text][image-ref]

[image-ref]: image.jpg "Image title"
```

### Code

#### Inline Code

```markdown
Use `code` for inline code snippets.
```

#### Code Blocks

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```

```python
def hello():
    print("Hello, world!")
```

```bash
echo "Hello, world!"
```
````

**Indented code blocks:**

```markdown
    This is a code block
    with 4 spaces indentation
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Alignment:**

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Content      |    Content     |       Content |
```

**Simplified syntax:**

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
```

### Blockquotes

```markdown
> This is a blockquote.
>
> It can span multiple lines.
>
> > Nested blockquotes are also supported.
```

### Horizontal Rules

```markdown
---

---

---
```

## Advanced Features

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2
```

### Strikethrough

```markdown
~~This text is strikethrough~~
```

### Escaping Characters

```markdown
\*This text is not italic\*
\[This is not a link\]
\`This is not code\`
```

### Emojis

```markdown
:smile: :heart: :rocket: :star:
```

**Common emojis:**

- `:smile:` 😄
- `:heart:` ❤️
- `:rocket:` 🚀
- `:star:` ⭐
- `:check:` ✅
- `:warning:` ⚠️
- `:info:` ℹ️

## Best Practices

### 1. Consistent Spacing

```markdown
# Good

This is a paragraph.

This is another paragraph.

# Bad

This is a paragraph.
This is another paragraph.
```

### 2. Meaningful Link Text

```markdown
# Good

[Read our documentation](docs/guide.md)

# Bad

[Click here](docs/guide.md)
```

### 3. Descriptive Alt Text

```markdown
# Good

![Lagrange Network Architecture](img/architecture.png)

# Bad

![Image](img/architecture.png)
```

### 4. Use Headers for Structure

```markdown
# Main Topic

## Subsection

### Sub-subsection
```

### 5. Keep Line Length Reasonable

```markdown
# Good - readable line length

This is a reasonably long line that doesn't exceed 80-100 characters for better readability.

# Bad - very long line

This is a very long line that goes on and on and on and makes it difficult to read and edit in most text editors and markdown viewers.
```

### 6. Use Lists for Related Items

```markdown
# Good

- Feature 1
- Feature 2
- Feature 3

# Bad

Feature 1. Feature 2. Feature 3.
```

### 7. Consistent List Markers

```markdown
# Good - consistent

- Item 1
- Item 2
- Item 3

# Bad - mixed

- Item 1

* Item 2

- Item 3
```

## Common Patterns

### Collapsible Sections (GitHub)

```markdown
<details>
<summary>Click to expand</summary>

Content goes here.

</details>
```

### Admonitions (GitHub)

```markdown
> **Note:** This is a note.

> **Warning:** This is a warning.

> **Tip:** This is a tip.
```

### Mathematical Expressions (GitHub)

```markdown
Inline math: $E = mc^2$

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Syntax Highlighting

````markdown
```javascript
// JavaScript
function example() {
  return "Hello, world!";
}
```
````

```python
# Python
def example():
    return "Hello, world!"
```

```bash
# Bash
echo "Hello, world!"
```

```

## Tools and Extensions

### Popular Markdown Editors
- **VS Code** - Built-in support + extensions
- **Typora** - WYSIWYG editor
- **Obsidian** - Knowledge management
- **Notion** - Collaborative editing
- **GitHub** - Web-based editing

### Useful Extensions
- **Markdown All in One** - VS Code extension
- **Markdown Preview Enhanced** - VS Code extension
- **Paste Image** - VS Code extension for images

### Online Tools
- **StackEdit** - Online markdown editor
- **Dillinger** - Real-time preview
- **Markdown Tables Generator** - Table creation

---

*This cheatsheet covers the most common Markdown syntax. For more advanced features, check the specific documentation of your Markdown processor.*
```
