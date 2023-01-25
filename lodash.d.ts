// Type definitions for lodash module
// Project: https://github.com/lodash/lodash
// Definitions by: zxc88kr <https://github.com/zxc88kr>

declare module "lodash" {
    /**
     * Gets the first element of `array`.
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     */
    function head<T>(array: Array<T>): T | undefined;
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     * @param {Object} object The object to query.
     * @param {string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function hasIn(object: Object, key: string): boolean;
    /**
     * Checks if `value` is classified as a boolean primitive or object.
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     */
    function isBoolean(value: any): boolean;
    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function toString(value: any): string;
    /**
     * Splits `string` by `separator`.
     * @param {string} string The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} limit The length to truncate results to.
     * @returns {Array} Returns the string segments.
     */
    function split(string: string, separator?: RegExp | string, limit?: number): Array<string>;
    /**
     * Checks if `path` is a direct property of `object`.
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object: Object, path: Array<string> | string): boolean;
    /**
     * Iterates over elements of `array`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index, array).
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function filter<T>(array: Array<T>, predicate: Function): Array<T>;
    /**
     * Checks if `predicate` returns truthy for **all** elements of `array`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`.
     */
    function every<T>(array: Array<T>, predicate: Function): boolean;
    /**
     * Creates an array of values by running each element of `array` thru `iteratee`.
     * The iteratee is invoked with three arguments: (value, index, array).
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function map<T, TResult>(array: Array<T>, iteratee: Function): Array<TResult>;
}