const a = './test'
const getC = async (src) => {
    const component = await import(a)
    return component
}
export default getC