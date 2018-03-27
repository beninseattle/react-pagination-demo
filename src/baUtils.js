
// Split a camel case string into title spaced words
// TODO: Might be useful to enhance this to make common acronyms caps?
// https://stackoverflow.com/a/6475125
if( typeof(String.prototype.camelToTitleSpaced) === 'undefined' ){
  // eslint-disable-next-line
  String.prototype.camelToTitleSpaced = function() {
    return this.split(/(?=[A-Z])/).map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(" ");
  }
}