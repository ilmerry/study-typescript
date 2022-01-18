const map = f => a => a.map(f)
const square = value => value * value
export const squareMap = map(square)