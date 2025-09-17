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
  // for each level starting from top build and output pyramid level line
  for (let level = 1; level <= height; level++) {
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
  const bricksCount = level; // calculate bricks count
  const pyramidLineString = SYMBOL.repeat(bricksCount); // create string repeating symbol <brickCount> times
  console.log(pyramidLineString);
}

/**
 * creates a level of <wide hill> pyramid
 * @param {number} level a level position from top
 */
function buildPyramidLevel_hillWide(level) {
  const bricksCount = level * 2 - 1; // calculate bricks count
  const pyramidLineString = SYMBOL.repeat(bricksCount); // create pyramid level string repeating symbol <brickCount> times
  console.log(SYMBOL.repeat(pyramidLineString));
}

/**
 * creates a level of <reversed hill> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_reversedHill(level, height) {
  const bricksCount = level; // calculate bricks count
  const offset = height - bricksCount; // calculate start offset (spaces count before first brick)
  const offsetString = " ".repeat(offset); // create offset string
  const pyramidLineString = SYMBOL.repeat(bricksCount); // create pyramid level string
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <reversed wide hill> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_reversedHillWide(level, height) {
  const bricksCount = level * 2 - 1; // calculate bricks count
  const offset = height * 2 - 1 - bricksCount;  // calculate start offset
  const offsetString = " ".repeat(offset); // create offset string
  const pyramidLineString = SYMBOL.repeat(bricksCount); // create pyramid level string
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <christmas tree> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_christmasTree(level, height) {
  const bricksCount = level * 2 - 1; // calculate bricks count
  const offset = height - level; // calculate start offset
  const offsetString = " ".repeat(offset); // create offset string
  const pyramidLineString = SYMBOL.repeat(bricksCount); // create pyramid level string
  console.log(offsetString + pyramidLineString);
}

/**
 * creates a level of <spaced christmas tree> pyramid
 * @param {number} level a level position from top
 * @param {number} height total levels count (equal to last level)
 */
function buildPyramidLevel_christmasTreeSpaced(level, height) {
  const bricksCount = level; // calculate bricks count
  const offset = height - bricksCount; // calculate start offset
  const offsetString = " ".repeat(offset); // create offset string
  const pyramidLineString = `${SYMBOL} `.repeat(bricksCount).trimEnd(); // repeat <SYMBOL + space> and cut last space
  console.log(offsetString + pyramidLineString);
}
