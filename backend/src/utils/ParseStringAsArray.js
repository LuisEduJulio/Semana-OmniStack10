module.exports = function ParseStringAsArray(ArrayAsString) {
    return ArrayAsString.split(',').map(techs => techs.trim());
}