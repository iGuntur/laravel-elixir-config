'use strict';

var fs = require('fs');
var _ = require('lodash');
var yaml = require('yamljs');
var Elixir = require('laravel-elixir');

/**
 * Allow for config overrides, via an elixir.json file.
 *
 * @param {string} file
 */
Elixir.configFile = function (file) {
	var overrides;

	if (pathExists.sync(file)) {
		overrides = JSON.parse(fs.readFileSync(file, 'utf8'));

		_.merge(Elixir.config, overrides);
	}
}('elixir.json');
