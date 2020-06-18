const { src, dest, series, watch } = require("gulp");
const less = require("gulp-less");
var uglify = require('gulp-uglify');
const path = require("path");

function compileLess() {
    return src("./less/**/*.less")
      .pipe(
        less({
          paths: [path.join(__dirname, "less")],
        })
      )
      .pipe(dest("./css"));
  }

  
  exports.build = series(compileLess);
  exports.default = function() {
  watch("./less/**/*.less", compileLess);
}
  
