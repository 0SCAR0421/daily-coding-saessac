var nums = [100, 200, 300, 400, 500];

// nums.pop()
// nums.pop()

// nums = nums.slice(0, 3)

nums = nums.filter(e => {
    if(e === 400 || e === 500) return false
    else return true
})

console.log(nums)