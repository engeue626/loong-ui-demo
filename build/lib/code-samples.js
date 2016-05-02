//http://stackoverflow.com/a/12034334/2044039
const ENTITY_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

var escapeHtml = string => String(string).replace(/[&<>"'\/]/g, (s) => ENTITY_MAP[s]);
var showHtml = stuff => `<div class="rtl-ltr-switch live-code">${stuff}</div>`;
var wrapIntoCodeTags = (stuff, inline) => (!inline ? '<pre>' : '') +
                    `<code class="language-markup" syntax-highlight>${stuff}</code>` + (!inline ? '</pre>' : '');
var repeatString = (repeat, times) => new Array(times + 1).join(repeat);

function handleFileContents(strig){
    // this regex has a deep, deep meaning
    // well, first of all it matches both so-like code ``code``
    // and code format proposed by Egor ```code``` - in this case it'd also render it
    // it also removed the first empty line (but not indents!)
    return String(strig).replace(/([`]+)(?:\s*\n)?([\s\S]+?)\s*`+/g, (all, codeType, ourPart) => {
        var showUnescaped = codeType.length === 3;
        var isInline = codeType.length === 1;
        // remove tabs if any
        ourPart = ourPart.replace(/\t/g, repeatString(' ', 4));
        // Now remove big common indent
        var minimalIndentWeCanDrop = Math.min.apply(null, ourPart.match(/^\s*/).map(l => l.length));
        ourPart = ourPart.replace(new RegExp('(^|\n)' + repeatString(' ', minimalIndentWeCanDrop), 'g'), '$1');
        return (showUnescaped ? showHtml(ourPart) : "") +  wrapIntoCodeTags(escapeHtml(ourPart), isInline);
    });
}

/**
 * http://stackoverflow.com/a/22843512/2044039
 * @returns {*}
 */
module.exports = function transformQuotesToShit() {
    // you're going to receive Vinyl files as chunks
    function transform(file, cb) {
        file.contents = new Buffer(handleFileContents(file.contents));
        cb(null, file);
    }

    // returning the map will cause your transform function to be called
    // for each one of the chunks (files) you receive. And when this stream
    // receives a 'end' signal, it will end as well.
    //
    // Additionally, you want to require the `event-stream` somewhere else.
    return require('event-stream').map(transform);
};
