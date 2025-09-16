const PYRAMID_HEIGHT = 20; // define height of pyramid
const SYMBOL = "*"; // define a "brick" sybmold

// define list of strategies to build different pyramids
const PYRAMID_STRATEGIES = [
  buildPyramidLevel_hill,
  buildPyramidLevel_hillWide,
  buildPyramidLevel_reversedHill,
  buildPyramidLevel_reversedHillWide,
  buildPyramidLevel_christmasTree,
  buildPyramidLevel_christmasTreeSpaced
];

/**
 * logs pyramid to console
 * @param {number} height number of pyramid levels
 * @param {function} builderStrategy algorithm of pyramid building
 */
function createPyramid(height, builderStrategy) {
  for (let level = 1; level <= PYRAMID_HEIGHT; level++) {
    builderStrategy(level, height);
  }
}

/**
 * performs application logic: creates and outputs different pyramids
 */
function main() {
  for (strategy of PYRAMID_STRATEGIES) {
    createPyramid(PYRAMID_HEIGHT, strategy);
    console.log("\n");
  }
}

main();

//===== define different strategies =====

/**
 * creates a level of <hill> pyramid
 * @param {number} level a level position from top
 */
function buildPyramidLevel_hill(level) {
  const bricksCount = level;
  console.log(SYMBOL.repeat(bricksCount));
}

/**
 * creates a level of <wide hill> pyramid
 * @param {number} level a level position from top
 */
function buildPyramidLevel_hillWide(level) {
  const bricksCount = level * 2 - 1;
  console.log(SYMBOL.repeat(bricksCount));
}

/**
 * creates a level of <reversed hill> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_reversedHill(level, height) {
  const bricksCount = level;
  const offset = height - bricksCount;
  const offsetString = " ".repeat(offset);
  const pyramidLineString = SYMBOL.repeat(bricksCount);
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <reversed wide hill> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_reversedHillWide(level, height) {
  const bricksCount = level * 2 - 1;
  const offset = height * 2 - 1 - bricksCount;
  const offsetString = " ".repeat(offset);
  const pyramidLineString = SYMBOL.repeat(bricksCount);
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <christmas tree> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_christmasTree(level, height) {
  const bricksCount = level * 2 - 1;
  const offset = height - level;
  const offsetString = " ".repeat(offset);
  const pyramidLineString = SYMBOL.repeat(bricksCount);
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <spaced christmas tree> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_christmasTreeSpaced(level, height) {
  const bricksCount = level;
  const offset = height - bricksCount;
  const offsetString = " ".repeat(offset);
  const pyramidLineString = `${SYMBOL} `.repeat(bricksCount).trimEnd();
  console.log(offsetString + pyramidLineString);
}
