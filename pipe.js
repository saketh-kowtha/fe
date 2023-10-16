const pipe = (fns) => (...args) => fns.slice(1).reduce((acc, curr) => curr(acc), fns[0](...args))
