import { visit } from 'unist-util-visit'
export default function remarkObsidianImg({ basePath }) {
    return (tree) => {
        visit(tree, (node) => {
            console.log({ node })

            const matches = node.value?.match(/!\[\[(.*\..*)\]\]/)
            if (!matches?.[0]) {
                return
            }
            console.log({ matches });
            const imagePath = matches[1]
            node.type = "image"
            node.url = `${basePath}/${imagePath}`
            node.alt = imagePath
        })
    }
}