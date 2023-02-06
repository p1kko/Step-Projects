import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import browserSync from "browser-sync";
import htmlmin from "gulp-htmlmin";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";
import clean from "gulp-clean";
import imagemin from "gulp-imagemin";
import autoprefixer from "gulp-autoprefixer";
import purgecss from "gulp-purgecss";

const sass = gulpSass(dartSass);
const browsSync = browserSync.create();

const html = () =>
  gulp
    .src("./*html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));

    const buildStyles = () => gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe((autoprefixer()))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'));



const purge = () =>
  gulp
    .src("src/**/*.css")
    .pipe(purgecss({ content: ["src/**/*.html"] }))
    .pipe(gulp.dest("build/css"));

const js = () =>
  gulp
    .src("./src/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest("./dist"));

const cleanDist = () => gulp.src("./dist/*", { read: false }).pipe(clean());

const img = () =>
  gulp.src("./src/img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));

export const build = gulp.series(
  cleanDist,
  gulp.parallel(html, js, img, purge, buildStyles)
);

export const dev = () => {
  browsSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch(
    ["./src/**/*.scss", "./src/**/*js"],
    gulp.series(gulp.parallel(buildStyles, js), (done) => {
      browsSync.reload();
      done();
    })
  );

  gulp.watch(
    ["./index.html"],
    gulp.series(build, (done) => {
      browsSync.reload();
      done();
    })
  );
};

