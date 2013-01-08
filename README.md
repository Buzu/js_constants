js_constants
============

An implementation of PHP-like define functions for defining constants.

## How to use it?

Simply add the constants.js file to your project. Then define your constants:

    define('IMG_PATH', '/images/');

You can get the value of the Constant by using the get function.

    get('IMG_PATH');

IF the constant is not defined, you get an error log on the javascript console.

You can also check if a constant has been defined:

    define('IMG_PATH');//returns true
