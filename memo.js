const memo = (fn) => {
    const cache = new Map()
    return (...args) => {
        const key = args.join(',')
        if(!cache.has(key)) {
            cache.set(key, fn(...args))
        }
        return cache.get(key)
    }
}
