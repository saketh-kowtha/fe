function debounce(fn, delay){
    let idx
    return function(...args){
        clearTimeout(idx)
        idx = setTimeout(fn.bind(null, ...args), delay)
    }
}
