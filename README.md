<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# minmaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the minimum and maximum absolute values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-minmaxabs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var minmaxabs = require( '@stdlib/math-base-special-minmaxabs' );
```

#### minmaxabs( x, y )

Returns the minimum and maximum absolute values in a single pass.

```javascript
var v = minmaxabs( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxabs( +0.0, -0.0 );
// returns [ 0.0, 0.0 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxabs( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxabs( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxabs.assign( x, y, out, stride, offset )

Returns the minimum and maximum absolute values in a single pass and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = minmaxabs.assign( 5.0, -1.0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEachMap = require( '@stdlib/console-log-each-map' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var minmaxabs = require( '@stdlib/math-base-special-minmaxabs' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -100, 100, opts );
var y = discreteUniform( 100, -100, 100, opts );

logEachMap( 'minmaxabs(%d, %d) = [%s]', x, y, minmaxabs );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/minmaxabs.h"
```

#### stdlib_base_minmaxabs( x, y, &min, &max )

Evaluates the minimum and maximum absolute values in a single pass.

```c
double x = -3.14;
double y = 2.71;

double min;
double max;
stdlib_base_minmaxabs( x, y, &min, &max );
```

The function accepts the following arguments:

-   **x**: `[in] double` first number.
-   **y**: `[in] double` second number.
-   **min**: `[out] double` destination for the minimum absolute value.
-   **max**: `[out] double` destination for the maximum absolute value.

```c
void stdlib_base_minmaxabs( const double x, const double y, double* min, double* max );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/minmaxabs.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 0.45, -0.89, 0.0 / 0.0, -0.78, -0.22, 0.66, 0.11, -0.55, 0.0 };
    const double y[] = { -0.22, 0.66, 0.0, -0.55, 0.33, 1.0, 0.0 / 0.0, 0.11, 0.45, -0.78 };

    double min;
    double max;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_minmaxabs( x[ i ], y[ i ], &min, &max );
        printf( "x: %lf, y: %lf => min: %lf, max: %lf\n", x[ i ], y[ i ], min, max );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/maxabs`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minmax`][@stdlib/math/base/special/minmax]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-minmaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-minmaxabs

[test-image]: https://github.com/stdlib-js/math-base-special-minmaxabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-minmaxabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-minmaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-minmaxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-minmaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-minmaxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-minmaxabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-minmaxabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-minmaxabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-minmaxabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-minmaxabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-minmaxabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-minmaxabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-minmaxabs/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math-base-special-maxabs

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math-base-special-minabs

[@stdlib/math/base/special/minmax]: https://github.com/stdlib-js/math-base-special-minmax

<!-- </related-links> -->

</section>

<!-- /.links -->
