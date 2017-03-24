import ratioToAngle from '../ratio-to-angle'

test(`calculates 90 degrees correctly`, () => {
    expect(ratioToAngle(0, -1)).toBe(90)
})

test(`calculates 0 degrees correctly`, () => {
    expect(ratioToAngle(-1, 0)).toBe(0)
})

test(`calculates 45 degrees correctly`, () => {
    expect(ratioToAngle(-.5, -.5)).toBe(45)
})
