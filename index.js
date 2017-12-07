day1 = requireUncached('./day1.js');

function requireUncached(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}

r = () => {
    requireUncached('./index.js');
}