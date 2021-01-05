
/**
 * build.js
 *
 * Builds look-good
 * 
 * Help: node build.js -h
 *
 * Options:
 * -d, --directory     Directory to build, default `./scss`
 * -o, --output        Output directory, defaults to `./build`
 *
 * --dont-auto-prefix  Don't add vendor specific prefixes
 * --dont-minify       Don't minify compiled CSS
 * --source-map        Generate source map
 * -q, --quiet         Dont output anything
 */

const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');
const child_process = require('child_process');

const BUILD_VERSION = 'v1.0.0';
const COPYRIGHT = 'Copyright Hellomouse 2021';

const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 [options]')
    .help('h')
    .version(BUILD_VERSION)
    .alias('d', 'directory')
    .alias('o', 'output')
    .alias('h', 'help')
    .alias('v', 'version')
    .alias('q', 'quiet')
    .describe('d', 'Directory to build, default `./scss`')
    .describe('o', 'Output directory, defaults to `./build`')
    .describe('dont-auto-prefix', 'Don\'t add vendor specific prefixes')
    .describe('dont-minify', 'Don\'t minify compiled CSS')
    .describe('source-map', 'Generate source map')
    .describe('q', 'Supress console output')
    .epilog(COPYRIGHT)
    .boolean(['dont-auto-prefix', 'dont-minify', 'source-map', 'q'])
    .argv;

const input_dir  = argv.directory || './scss';
const output_dir = argv.output || './build';

function log(x) {
    if (!argv.quiet)
        console.log(x);
}

function postCSS(args, dir) {
    child_process.execSync(`npx postcss "${dir}/*.scss" --replace --syntax postcss-scss ${args} --no-map`, {stdio: 'inherit'});
    child_process.execSync(`npx postcss "${dir}/*/**.scss" --replace --syntax postcss-scss ${args} --no-map`, {stdio: 'inherit'});
}


/** -- FS config -- */
const tmp_subdir = '/tmp';
const output_name = 'index.css';
const output_min_name = 'index.min.css';


/** -- Stage 0: Copy input to tmp build folder -- */

log(chalk.blue.bold('Directory Settings:'));
log(chalk.white.bold('Input directory: ') + input_dir);
log(chalk.white.bold('Build directory: ') + output_dir);

let tmp = path.join(output_dir, tmp_subdir);
log(chalk.yellow(`\nCopying input to tmp folder ${tmp}...`));

fs.copySync(input_dir, tmp);

log(chalk.green('Finished copying!'));


/** -- Stage 1: POSTCSS-SCSS auto-prefixing --  **/

if (argv.dontAutoPrefix) {
    log(chalk.yellow('\nSkipping auto vendor prefixing...'));
} else {
    log(chalk.yellow('\nAdding auto vendor prefixes...'));
    postCSS('--use autoprefixer', tmp);
    log(chalk.green('Done!'));
}


/** -- Stage 2: Use shorthand properties -- **/

log(chalk.yellow('\nCompiling postcss-short shorthand properties...'));
postCSS('--use postcss-short', tmp);
log(chalk.green('Done!'));


/** -- Stage 3: Compile SASS to CSS -- */

log(chalk.yellow('\nCompiling SCSS to CSS...'));

let sass_args = '';

// SASS minification moved to nanoCSS
// sass_args += '--style ' + (argv.dontMinify ? 'expanded' : 'compressed');
sass_args += argv.sourceMap ? '' : '--no-source-map';

let compiled_out = path.join(output_dir, output_name);
let cmd = `sass ${path.join(tmp, 'index.scss')} ${compiled_out} ${sass_args}`;

log(cmd);
child_process.execSync(cmd, {stdio: 'inherit'});
log(chalk.green(`Done, generated output in ${compiled_out}\n`));

log(chalk.yellow(`Deleting tmp build folder ${tmp}`));
fs.remove(tmp);
log(chalk.green(`${tmp} deleted.`));


/** -- Stage 4: Nano -- */

if (argv.dontMinify) {
    log(chalk.yellow('\nSkipping nanoCSS...'));
} else {
    log(chalk.yellow('\nGenerating minified CSS...'));
    child_process.execSync(
        `npx postcss ${compiled_out} --use cssnano --no-map > ${path.join(output_dir, output_min_name)}`, 
        {
            stdio: 'inherit'
        }
    );
    log(chalk.green('Minifying done!'));
}

console.log(chalk.green.bold(`\nDone, compiled outputs in ${output_dir}`));
