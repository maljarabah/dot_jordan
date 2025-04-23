export default (fullName) => {
    return fullName
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((name) => name[0].toUpperCase())
        .join("")
}
