# **Sizing** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Sizing utility classes.</p>

---

## Container

Use `.container` to make the element have a width equal to that of the current breakpoint. This can be helpful in 
designing layouts for fixed screen sizes.

Use `.mx-auto` to horizontally center the container and the padding utilities to add padding. For example:

```html
<div class="container mx-auto px-md"></div>
```

<br>


## Width and Height

Use `.w-[size]` and `.h-[size]` to set the size to the percentage, for example `.h-100` is `height: 100%`.

Size can be of `0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100`:

<div class="demo text-left white">
    <div class="w-10 bg-teal p-sm">.w-10</div>
    <div class="w-25 bg-light-teal p-sm">.w-25</div>
    <div class="w-50 bg-teal p-sm">.w-50</div>
    <div class="w-75 bg-light-teal p-sm">.w-75</div>
    <div class="w-100 bg-teal p-sm">.w-100</div>
</div>

```html
<div class="w-10 ...">.w-10</div>
<div class="w-25 ...">.w-25</div>
<div class="w-50 ...">.w-50</div>
<div class="w-75 ...">.w-75</div>
<div class="w-100 ...">.w-100</div>
```

<cssprops>
w-0 | width: 0%
w-10 | width: 10%
w-20 | width: 20%
w-25 | width: 25%
w-30 | width: 30%
w-40 | width: 40%
w-50 | width: 50%
w-60 | width: 60%
w-70 | width: 70%
w-75 | width: 75%
w-80 | width: 80%
w-90 | width: 90%
w-100 | width: 100%
---
h-0 | height: 0%
h-10 | height: 10%
h-20 | height: 20%
h-25 | height: 25%
h-30 | height: 30%
h-40 | height: 40%
h-50 | height: 50%
h-60 | height: 60%
h-70 | height: 70%
h-75 | height: 75%
h-80 | height: 80%
h-90 | height: 90%
h-100 | height: 100%
</cssprops>


## Auto size

Use `.w-auto` or `.h-auto` to let the browser automatically size the element.

<cssprops>
.w-auto | width: auto
.h-auto | height: auto
</cssprops>


## Viewport size

Use `.w-viewport` or `.h-viewport` to set the size to `100vw` and `100vh` respectively:

<div class="demo">
    <div class="bg-teal h-viewport flex justify-center align-items-center">
        <h1 class="white">.h-viewport</h1>
    </div>
</div>

```html
<div class="h-viewport ...">
    <h1>.h-viewport</h1>
</div>
```

<cssprops>
.w-viewport | width: 100vw
.h-viewport | height: 100vh
</cssprops>


## Max width and height

Replace the `w-` prefix with `mw-` and the `h-` prefix with `mh-` for all the classes above to set the `max-width` and `max-height` 
instead.

The exception is that `auto` is replaced with `none`, as there is no `auto` property for max sizing.

<cssprops>
mw-0 | max-width: 0%
mw-10 | max-width: 10%
mw-20 | max-width: 20%
mw-25 | max-width: 25%
mw-30 | max-width: 30%
mw-40 | max-width: 40%
mw-50 | max-width: 50%
mw-60 | max-width: 60%
mw-70 | max-width: 70%
mw-75 | max-width: 75%
mw-80 | max-width: 80%
mw-90 | max-width: 90%
mw-100 | max-width: 100%
mw-none | max-width: none
mw-viewport | max-width: 100vw
---
mh-0 | max-height: 0%
mh-10 | max-height: 10%
mh-20 | max-height: 20%
mh-25 | max-height: 25%
mh-30 | max-height: 30%
mh-40 | max-height: 40%
mh-50 | max-height: 50%
mh-60 | max-height: 60%
mh-70 | max-height: 70%
mh-75 | max-height: 75%
mh-80 | max-height: 80%
mh-90 | max-height: 90%
mh-100 | max-height: 100%
mh-none | max-height: none
mh-viewport | max-height: 100vh
</cssprops>



## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for layout will be generated, however you can 
add or remove variants from the `$layout-sizing-variants` array.

```scss
$layout-sizing-variants: ("responsive") !default;
```


### Width / height sizes

A map of size suffix to a value is stored in `$width-sizes` and `$height-sizes`. Add or remove keys to either 
of these maps to change size variants for width and height.

Note if you wish to keep the `auto` variant, it should be the last key to have higher specificity, as auto is often 
used to remove pre-existing width or height styles.

```scss
$width-sizes: (
    "0": 0, "10": 10%,
    "20": 20%, "25": 25%,
    "30": 30%, "40": 40%,
    "50": 50%, "60": 60%,
    "70": 70%, "75": 75%,
    "80": 80%, "90": 90%,
    "100": 100%,
    "viewport": 100vw,
    "auto": auto
) !default;

$height-sizes: (
    "0": 0, "10": 10%,
    "20": 20%, "25": 25%,
    "30": 30%, "40": 40%,
    "50": 50%, "60": 60%,
    "70": 70%, "75": 75%,
    "80": 80%, "90": 90%,
    "100": 100%,
    "viewport": 100vh,
    "auto": auto
) !default;
```


### Width / height prefixes

To change the `.w-`, `.h-`, `.mw-` and `.mh-` prefixes modify the corresponding value 
in `$dimension-prefixes`. The key should remain as follows:

```scss
$dimension-prefixes: (
    "width":  "w",
    "height": "h",
    "max-width":  "mw",
    "max-height": "mh"
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `layout-sizing` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("layout-sizing");
```
