# **Opacity** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Opacity utility classes.</p>

---

## Opacity

Use `.opacity-[value]` to set opacity.

Value can be any of `0, 25, 50, 75, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90`:

<div class="demo">
    <div class="opacity-100 bg-lighter-blue [ inline-block m-sm black ]" style="line-height: 70px; width: 100px; height: 70px">100</div>
    <div class="opacity-75 bg-lighter-blue [ inline-block m-sm black ]" style="line-height: 70px; width: 100px; height: 70px">75</div>
    <div class="opacity-50 bg-lighter-blue [ inline-block m-sm black ]" style="line-height: 70px; width: 100px; height: 70px">50</div>
    <div class="opacity-25 bg-lighter-blue [ inline-block m-sm black ]" style="line-height: 70px; width: 100px; height: 70px">25</div>
</div>

```html
<div class="opacity-100 ..." ...></div>
<div class="opacity-75 ..."  ...></div>
<div class="opacity-50 ..."  ...></div>
<div class="opacity-25 ..."  ...></div>
```

<cssprops>
.opacity-0 | opacity: 0
.opacity-25 | opacity: 25%
.opacity-50 | opacity: 50%
.opacity-75 | opacity: 75%
.opacity-100 | opacity: 100%
.opacity-10 | opacity: 10%
.opacity-20 | opacity: 20%
.opacity-30 | opacity: 30%
.opacity-40 | opacity: 40%
.opacity-60 | opacity: 60%
.opacity-70 | opacity: 70%
.opacity-80 | opacity: 80%
.opacity-90 | opacity: 90%
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for opacity will be generated, however you can 
add or remove variants from the `$opacity-variants` array.

```scss
$opacity-variants: ("responsive") !default;
```


### Opacity prefix

The `opacity-` prefix for all the class names above can be changed using `$opacity-prefix`:

```scss
$opacity-prefix: "opacity-" !default;
```


### Opacity variants

All generated opacity variants are done using `$opacity`, which maps 
the suffix (in `.shadow-[suffix]`) to a valid opacity value:

```scss
$opacity: (
    "0":   "0",
    "25":  ".25",
    "50":  ".5",
    "75":  ".75",
    "100": "1",
    "10":  ".1",
    "20":  ".2",
    "30":  ".3",
    "40":  ".4",
    "60":  ".6",
    "70":  ".7",
    "80":  ".8",
    "90":  ".9",
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `opacity` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("opacity");
```
