const getC = async (src) => {
    const {default:component} = await import(src)
    return component
}
export default getC