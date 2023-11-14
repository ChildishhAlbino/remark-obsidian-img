import { visit } from 'unist-util-visit'
export default function remarkObsidianImg({ absolutePrefix, relativePathResolver }) {

    if (!absolutePrefix && !relativePathResolver) {
        throw Error("You must supply one path method.")
    }

    return (tree, file) => {
        visit(tree, "text", (node) => {
            const matches = node.value?.match(/!\[\[(.*\..*)\]\]/)
            if (!matches?.[0]) {
                return
            }
            const imageSrc = matches[1]
            node.type = "image"
            node.url = getPath(absolutePrefix, relativePathResolver, { filePath: file.history[0], cwd: file.cwd }, imageSrc)
            node.alt = imageSrc
        })
    }
}

function getPath(absolutePrefix, relativePathResolver, fileDetails, imageSrc) {
    if (absolutePrefix) {
        return `${absolutePrefix}/${imageSrc}`
    }
    return relativePathResolver({ fileDetails, imageSrc })
}