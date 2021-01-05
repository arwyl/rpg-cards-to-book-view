import DOMPurify from "dompurify";

function purify(str) {
    return DOMPurify.sanitize(str, { ALLOWED_TAGS: ["b"] });
}

function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function purifyUrl(url) {
    return isValidURL(url) ? url : undefined;
}

export default {
    purify,
    purifyUrl
}