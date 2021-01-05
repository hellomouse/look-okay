# Contributing

---

\o/ Thanks for deciding to contribute! Or if you're just reading this page.


## Reporting Bugs

See the [bugs page](/report-a-bug).


## Enchancements

Read the "how to make an enchancement suggestion" below, then open an issue here --> [Github issues link](https://github.com/hellomouse/look-okay/issues)


### How to make an enhancement suggestion

Follow this list before making a suggestion

- Check if your enhancement fits into this lib. This lib is meant to provide minimalistic CSS utils, and not any default styles or UI components.
- Check that the enhancement doesn't already exist.
- Check that the ehancement isn't already suggested

Next, follow this template for suggestions. Use a clear title that summarizes the 
suggestion.

```md
## What it is

Describe clearly what the enhancement is, and how it would behave. 
Mockups, screenshots, code / pseudocode is welcome.

## How would it be used?

Describe some use cases for the enhancement that can't be replicated
using current features, or would be more convinent than current features.

## What settings should it have?

Describe all SCSS customizations the enhancement would have (if applicible)
```


## Language

Prefer American spellings, ie (`color` over `colour`, `gray` over `grey`).

Normal etiquiette applying to language applies.


## Contributing Code

Open a pull request to contribute! If you want to help, feel free to browse the issues page on our github.

Make sure your PR follows the guidelines below:


## Commit Messages

Guidelines for commit messages:

- Keep first line to ~70 characters or less.
- Reference issues and PRs after the first line
- Must be descriptive to the issue (ie, no "Fixed bug")


## SCSS Styleguide

#### Quick general guidelines:

- 4 spaces (not tabs) for indentation
- Space between the selector and brace (`.class {`)
- One selector and one rule per line
- List related properties together
- Don't use ids (`#id`)
- Use lowercase and shorthand hex values (ie, `#333` over `#333333`, and `#aba` over `#ABA`)
- Use unitless `0` except for times (seconds, ms) and degrees (ie, `margin: 0` over `margin: 0px`)
- Use single quotes (`'`)
- Don't use vendor prefixes like `-webkit`.
- Lines should be ~70-80 chars long at most.
- Arrays should use parentheses (`(1, 2, 3)`)

#### The general file structure is 

```scss
//// ----------------------------------------------------------
/// [MODULE DESC]
/// @group [MODULE NAME]
//// ----------------------------------------------------------

@charset "utf-8"; // Use charset utf-8

// Default imports, you'll probably need these
@use "./util/variants" as *; // Don't put the .scss suffix and underscore
@use "./util/util";
@use "./settings" as *;
@use "./settings-post" as *; 

@use "..."; // Anything more you need

@if (not util.contains($blacklisted-modules, "[module name]")) {
    // Space
    .class {
        ...
    }
}
```

Files should be named with an underscore `_file.scss` unless it's `index.scss`.


#### Variants & Settings

Auto-generate variants for a class as follows. Suppose I wanted to make a class called `.bold`, and variants are 
stored in array `$font-variants`:

```scss
@include variants("bold", $font-variants) {
    font-weight: bold #{$important};
}
```

Use this to generate your class unless the class is special enough that you cannot use it (for example, `.container`, because 
of all its breakpoint behavior does not use this and does not have any variants)

Note that if you do not use this, you will need to append `$global-prefix` to the classname, ie

```scss
.#{$global-prefix}my-class {
    ...
}
```


#### Class layout guidelines

```scss
.my-class {
    @extend %thing; // Extends first
    @include my-mixin(); // Includes second

    color: red; // Styles next
    font-weight: bold #{$important}; // Use this in place of !important

    &:hover { // Pseudoclasses first
        color: blue;
    }

    > p { // Nested classes last
        content: "Don't go over 3 nest levels when possible not including the main @if";
    }
}

```



## Docs Styleguide


### Headers

H1 and H2 headers (`#header` and `##header`) should have the key words capitalized (ie, `Hello World` over `Hello world`).

H3 and below should have only the first word capitalized (ie `Hello world`).


### New page template

Docs pages should follow this format:

```md
# Begin with a header <span class="important-badge">!important</span>

// Use only !important above if entire module is !important

<p class="m-0 mt-md">Optional caption.</p>

---

## Subgroup 1

Use 2 newlines between subgroups

<div class="demo">
    Put your HTML demo here
</div>

``html    <-- Replace w/ 3 backticks
Put your HTML example code here. Remove any classes that don't
help demonstrate the concept (ie, colors, paddings, etc..., unless
you of course, are demonstrating colors & paddings).
``        <-- Replace w/ 3 backticks

<cssprops>
.class1 | my-prop: put-your-classes-and-props-here
.class2 | prop2: seperate-classes-&-prop-with " | "
---
.class3 | use --- for table newline
.class4 | use\nfor\nmulti-line text
</cssprops>


## Subgroup 2 <span class="important-badge">!important</span>

Use !important badge in subgroup only if it uses !important and 
the !important badge is NOT used in the main header.

<div class="warn">Info box. docsify calls it ".warn" for some reason</div>


## Customizing

The following variables can be found in `_settings.scss`.

---


### Variants

By default only [VARIANTS] variants of [MODULE NAME] will be generated, however you can 
add or remove variants from the `$[MODULE VARIANTS VARIABLE]` array.

``scss
$[MODULE VARIANTS VARIABLE]: ([DEFAULT VARIANTS]) !default;
``


### Disabling the module

If you don't want anything in this module to be loaded, add `[MODULE NAME]` to `$blacklisted-modules`:

``scss
$blacklisted-modules: ("[MODULE NAME]");
``

```


## Tests

After you make your change, you should do linting, then build it.

Stylelint is installed with `dev-dependencies`, so you can for example, do

```
npx stylelint "{scss/*,scss/*/**}.scss" --fix
```

to auto-fix autofixable errors, and list the non-autofixable ones. Make sure you fix all stylelint errors, or if you have a good
reason to, use comments to temporarily disable stylelint check (check stylelint docs).

---

Once there are no style problems, run `node build.js` to run the build script. Output will be in `./build` by default. Use `node build.js -h` for a list of all commands and options. You'll need this compiled CSS file for updating the docs (see below).


## Updating Docs

Of course, no code is complete without documentation. Here are the steps you should follow:


### First steps

Replace `docs/index.css` with the compiled `index.min.css` file from `build`. 


### Adding docs page

Add new CSS component docs under `docs/docs`, otherwise add under the appropriate section. Also update 
the file tree on this page if necessary (below).

The file structure for docs is as follows:

```
.
+-- assets
|   +-- Various fonts
+-- concepts
|   +-- Documentation for responsive design
+-- dist
|   +-- Plugins for docsify
+-- docs
|   +-- Documentation for CSS classes
+-- getting-started
|   +-- Getting started docs
+-- img
|   +-- Images used in examples
+-- scss
|   +-- SCSS documentation (mixins and such)

+-- .nojerkll
+-- _cover.md
+-- _sidebar.md
+-- contributing.md
+-- index.css
+-- index.html
+-- README.md
+-- report-a-bug.md
```

See writing docs above for docs template and structure.


#### Additional pages to update

In addition to adding your page, you need to update the following:

- `_sidebar.md` - Add your page link there where approporiate
- `getting-started/customization.md` - Update folder structure (if applicable)


### Updating `_settings.scss`

Add variables as needed for `_settings.scss`, and make a new section if needed. Follow the format 
in the file for titling sections.


### Running docs server

We use [docsify](https://docsify.js.org/#/quickstart) for docs. Install using

```
npm i docsify-cli -g
```

then run

```
docsify serve ./docs
```
