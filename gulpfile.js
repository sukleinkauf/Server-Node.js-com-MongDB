//requerições de funções gulps 
var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	nodemon = require('gulp-nodemon');

gulp.task('less', function () {//transpilação de less para css
	return gulp.src('less/*.less')//origem
	.pipe(less())//transpilação
	.pipe(gulp.dest('public/stylesheets'));//destino
	console.log("less")
});

gulp.task('materialize',function(){ //copiando da pasta de origim e colando no destino

	gulp.src('bower_components/materialize/dist/css/materialize.min.css')//origem
		.pipe(gulp.dest('public/stylesheets'))//destino
	gulp.src('bower_components/materialize/dist/js/materialize.min.js')
		.pipe(gulp.dest('public/javascripts'))
	gulp.src('bower_components/materialize/dist/fonts/**/*')
		.pipe(gulp.dest('public/fonts'))
	console.log("materialize")
});

gulp.task('jquery',function(){ //copiando da pasta de origim e colando no destino
	gulp.src('bower_components/jquery/dist/jquery.min.js')//origem
		.pipe(gulp.dest('public/javascripts'));//destino
	console.log("jquery")
});

gulp.task('nodemon', function () {//função nodemon que reenicia o servidor quando erros ou mudanças
	nodemon({
		script: './bin/www',
		ext: 'js html'
	})
});

gulp.task('default', ['nodemon','less','open'], function(){
	gulp.watch("./less/**/*.less", ['less']);
});
