# remark-obsidian-img

*Work in Progress: I wouldn't use this in production if I were you.*

Turns obsidian image attachments/embeds i.e. `![[Example.img]]`, into a valid image tag.

You can either prefix them with an absolute path OR determine a relative path at runtime.

## Installation

```shell
// npm  
npm install remark-obsidian-img

// yarn
yarn add remark-obsidian-img

// pnpm  
pnpm install remark-obsidian-img

// bun  
bun install remark-obsidian-img
```
## Config

This plugin takes the following config options. You must supply one of the below.

`absolutePrefix`: A string that will be prefixed to the image file name and used as the src for the image node.

`relativePathResolver`: An anonymous function that accepts ({ fileDetails: {filePath, cwd}, imageSrc }) as input and returns a string. This allows you to determine a relative path based on the file.
