export default (text, max = 15) => {
    return text.length > max ? text.slice(0, max - 2).trim() + "..." : text
}
