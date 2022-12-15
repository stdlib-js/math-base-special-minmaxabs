/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import minmaxabs = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	minmaxabs(); // $ExpectType number[]
	minmaxabs( -0.2 ); // $ExpectType number[]
	minmaxabs( 3.0, -0.2 ); // $ExpectType number[]
	minmaxabs( 3.0, -0.2, -1.2 ); // $ExpectType number[]
	minmaxabs( 3.0, -0.2, -1.2, -4.0 ); // $ExpectType number[]
	minmaxabs( 3.0, -0.2, -1.2, -4.0, 5.0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	minmaxabs( true ); // $ExpectError
	minmaxabs( false ); // $ExpectError
	minmaxabs( [] ); // $ExpectError
	minmaxabs( {} ); // $ExpectError
	minmaxabs( 'abc' ); // $ExpectError
	minmaxabs( ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, true ); // $ExpectError
	minmaxabs( 1.2, false ); // $ExpectError
	minmaxabs( 1.2, [] ); // $ExpectError
	minmaxabs( 1.2, {} ); // $ExpectError
	minmaxabs( 1.2, 'abc' ); // $ExpectError
	minmaxabs( 1.2, ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, 3.0, true ); // $ExpectError
	minmaxabs( 1.2, 3.0, false ); // $ExpectError
	minmaxabs( 1.2, 3.0, [] ); // $ExpectError
	minmaxabs( 1.2, 3.0, {} ); // $ExpectError
	minmaxabs( 1.2, 3.0, 'abc' ); // $ExpectError
	minmaxabs( 1.2, 3.0, ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, 3.0, 4.0, true ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, false ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, [] ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, {} ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 'abc' ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, 3.0, 4.0, 5.0, true ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, false ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, [] ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, {} ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 'abc' ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, true ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, false ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, [] ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, {} ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 'abc' ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, ( x: number ): number => x ); // $ExpectError

	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, true ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, false ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, [] ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, {} ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, 'abc' ); // $ExpectError
	minmaxabs( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, ( x: number ): number => x ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, -0.2, out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, -0.2, 1.0, out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, -0.2, -1.2, -4.0, out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectType Collection
	minmaxabs.assign( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectType Collection
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( true, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( '5', -0.2, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( [], -0.2, -1.2, -4.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( ( x: number ): number => x, -0.2, -1.2, -4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( 1.0, false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, '5', -0.2, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, [], -0.2, -1.2, -4.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, ( x: number ): number => x, -0.2, -1.2, -4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid third argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( 1.0, 2.0, false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fourth argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( 1.0, 2.0, 3.0, false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fifth argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid sixth argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, 5.0, false, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, 5.0, null, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxabs.assign( 1.0, 2.0, 3.0, 4.0, 5.0, {}, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
}
