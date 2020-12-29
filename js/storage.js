function get(key) {
    return localStorage.getItem(key);
}

function set(key, value) {
    localStorage.setItem(key, value);
}

function remove(key) {
    localStorage.removeItem(key);
}

export default {
    get: get,
    set: set,
    remove: remove
};