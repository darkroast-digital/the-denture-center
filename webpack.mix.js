/*
 |--------------------------------------------------------------------------
 | #ASSET MANAGEMENT
 |--------------------------------------------------------------------------
 */

 const { mix } = require('laravel-mix')
 const config = require('./config')



 // ========================================================================

 mix.js(config.js.in, config.js.out)
    .sass(config.sass.in, config.sass.out)
        .sourceMaps()
    	.options({
    		postCss: [
    			require('autoprefixer')
    		],
            processCssUrls: false
    	})
        .browserSync({
        	proxy: '127.0.0.1:8000',
        	files: config.watch 	
        })
