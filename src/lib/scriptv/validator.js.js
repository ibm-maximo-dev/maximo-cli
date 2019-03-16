const fs = require('fs');
const log = require("../logger");

var scriptv_js = module.exports = Object.create({});

/**
 * Validate JavaScript code
 * @param {*} codeScript JavaScript code
 */
scriptv_js.validate = function (codeScript) {
  codeScript = codeScript.replace(/[\r\n]+/g, '\r\n');
    // var flags = 'gim';
    // var removeComments = /(\/\*.*?\*\/|\/\/[^\r\n]*$)/gmi;
    // var strFilterRegEx = new RegExp(removeComments, flags);
    // removeComments = '[' + removeComments + ']';
    // //Show pattern
    // //log.info('strFilterRegEx: ' + strFilterRegEx);
    // //Replace commands 
    // codeScript = codeScript.replace(strFilterRegEx, '');
    // //TODO Implement new validation ad-hoc
    // //log.info("Validating JavaScript:" + codeScript);
    return codeScript;
}
