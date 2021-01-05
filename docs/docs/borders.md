# **Borders** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Border utility classes.</p>

<style>
    .border-demo {
        width: 60px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.02)
    }
</style>

---

## Default Borders

Use `.border` or `.border-[side]` to set a customizable default border style:

<div class="demo text-left">
    <div class="border p-md m-sm inline-block border-demo"></div>
    <div class="border-t p-md m-sm inline-block border-demo"></div>
    <div class="border-l p-md m-sm inline-block border-demo"></div>
    <div class="border-b p-md m-sm inline-block border-demo"></div>
    <div class="border-r p-md m-sm inline-block border-demo"></div>
</div>


```html
<div class="border"></div>
<div class="border-t"></div>
<div class="border-l"></div>
<div class="border-b"></div>
<div class="border-r"></div>
```

<cssprops>
.border | border: 1px solid #ddd
.border-t | border-top: 1px solid #ddd
.border-l | border-left: 1px solid #ddd
.border-b | border-bottom: 1px solid #ddd
.border-r | border-right: 1px solid #ddd
</cssprops>


## Removing borders

Remove a border using `.border-none` or `.border-[side]-none`:

<div class="demo text-left">
    <div class="border border-none p-md m-sm inline-block border-demo"></div>
    <div class="border border-t-none p-md m-sm inline-block border-demo"></div>
    <div class="border border-l-none p-md m-sm inline-block border-demo"></div>
    <div class="border border-b-none p-md m-sm inline-block border-demo"></div>
    <div class="border border-r-none p-md m-sm inline-block border-demo"></div>
</div>

```html
<div class="border border-none"></div>
<div class="border border-t-none"></div>
<div class="border border-l-none"></div>
<div class="border border-b-none"></div>
<div class="border border-r-none"></div>
```

<cssprops>
.border-none | border: none
.border-t-none | border-top: none
.border-l-none | border-left: none
.border-b-none | border-bottom: none
.border-r-none | border-right: none
</cssprops>


## Border width

Use `.border-1`, `.border-2`, `.border-3`, `.border-4`, `.border-8`, and `.border-16` to change the width of a border:

<div class="demo text-left">
    <div class="border border-1 p-md m-sm inline-block border-demo"></div>
    <div class="border border-2 p-md m-sm inline-block border-demo"></div>
    <div class="border border-3 p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 p-md m-sm inline-block border-demo"></div>
    <div class="border border-8 p-md m-sm inline-block border-demo"></div>
    <div class="border border-16 p-md m-sm inline-block border-demo"></div>
</div>

```html
<div class="border border-1"></div>
<div class="border border-2"></div>
<div class="border border-3"></div>
<div class="border border-4"></div>
<div class="border border-8"></div>
<div class="border border-16"></div>
```

<cssprops>
.border-1 | border-width: 1px
.border-2 | border-width: 2px
.border-3 | border-width: 3px
.border-4 | border-width: 4px
.border-8 | border-width: 8px
.border-16 | border-width: 16px
</cssprops>

<br>

---

Use `.border-[side]-[size]` to target a specific side:

<div class="demo text-left">
    <div class="border border-l-8 p-md m-sm inline-block border-demo"></div>
    <div class="border border-t-8 p-md m-sm inline-block border-demo"></div>
    <div class="border border-r-8 p-md m-sm inline-block border-demo"></div>
    <div class="border border-b-8 p-md m-sm inline-block border-demo"></div>
</div>

```html
<div class="border border-l-8"></div>
<div class="border border-t-8"></div>
<div class="border border-r-8"></div>
<div class="border border-b-8"></div>
```


## Border style

Use `.border-[style]` to set the border style.

<div class="demo text-left">
    <div class="border border-4 border-dotted p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-dashed p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-solid p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-double p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-groove p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-ridge p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-inset p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-outset p-md m-sm inline-block border-demo"></div>
    <div class="border border-4 border-hidden p-md m-sm inline-block border-demo"></div>
</div>

```html
<div class="[ border border-4 ] border-dotted"></div>
<div class="[ border border-4 ] border-dashed"></div>
<div class="[ border border-4 ] border-solid"></div>
<div class="[ border border-4 ] border-double"></div>

<div class="[ border border-4 ] border-groove"></div>
<div class="[ border border-4 ] border-ridge"></div>
<div class="[ border border-4 ] border-inset"></div>
<div class="[ border border-4 ] border-outset"></div>

<div class="[ border border-4 ] border-hidden"></div>
```

<cssprops>
.border-dotted | border-style: dotted
.border-dashed | border-style: dashed
.border-solid | border-style: solid
.border-double | border-style: double
.border-groove | border-style: groove
.border-ridge | border-style: ridge
.border-inset | border-style: inset
.border-outset | border-style: outset
.border-hidden | border-style: hidden
</cssprops>


## Border color

Border colors can be set using the `border-` prefix followed by optionally a side and a color. See the [/colors](colors) page for more info.

<div class="demo">
    <div class="border-solid border-8 [ border-darker-gray border-t-red border-b-dark-blue ] [ p-lg mx-auto ]" style="width: 150px"></div>
</div>

```html
<div class=" [ border-darker-gray border-t-red border-b-dark-blue ]
               border-solid border-4 ..." style="..."></div>
```


## Border radius

### Default size

Use `.border-radius` or `.border-[corner]-radius` for a quick way to set the default border radius (`$default-border-radius`):

<div class="demo">
    <div class="border-radius    bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-tl-radius bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-tr-radius bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-bl-radius bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-br-radius bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
</div>

```html
<div class="border-radius"></div>
<div class="border-tl-radius"></div>
<div class="border-tr-radius"></div>
<div class="border-bl-radius"></div>
<div class="border-br-radius"></div>
```

<cssprops>
.border-radius | border-radius: 2px
.border-tl-radius | border-top-left-radius: 2px
.border-tr-radius | border-top-right-radius: 2px
.border-bl-radius | border-bottom-left-radius: 2px
.border-br-radius | border-bottom-right-radius: 2px
</cssprops>


### Other sizes
Use `.border-radius-[size]` to set a custom border radius size. Size can be of `none, 1, 2, 4, 8, 16`.

<div class="demo">
    <div class="border-radius-1  bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-radius-2  bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-radius-4  bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-radius-8  bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
</div>

```html
<div class="border-radius-1"></div>
<div class="border-radius-2"></div>
<div class="border-radius-4"></div>
<div class="border-radius-8"></div>
<div class="border-radius-16"></div>
```

<cssprops>
.border-radius-1 | border-radius: 1px
.border-radius-2 | border-radius: 2px
.border-radius-4 | border-radius: 4px
.border-radius-8 | border-radius: 8px
.border-radius-16 | border-radius: 16px
</cssprops>


### Setting individual corners

Use `.border-[corner]-radius-[size]` to target a specific corner:

<div class="demo">
    <div class="border-radius-16 border-tl-radius-none bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-tl-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-tr-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-bl-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-br-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
</div>

```html
<div class="border-radius-16 border-tl-radius-none"></div>

<div class="border-tl-radius-16"></div>
<div class="border-tr-radius-16"></div>
<div class="border-bl-radius-16"></div>
<div class="border-br-radius-16"></div>
```

### Setting individual sides

Use `.border-[side]-radius-[size]` to target a specific side:

<div class="demo">
    <div class="border-radius-16 border-l-radius-none bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-t-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-l-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-b-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="border-r-radius-16 bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
</div>

```html
<div class="border-radius-16 border-l-radius-none"></div>

<div class="border-t-radius-16"></div>
<div class="border-l-radius-16"></div>
<div class="border-b-radius-16"></div>
<div class="border-r-radius-16"></div>
```


### Rounded

Use `.rounded` to make pills and circles:

<div class="demo">
    <div class="rounded bg-teal inline-block m-sm" style="width: 50px; height: 50px"></div>
    <div class="rounded bg-teal inline-block m-sm" style="width: 150px; height: 50px"></div>
</div>

```html
<div class="rounded bg-teal ..." style="width: 50px; height: 50px"></div>
<div class="rounded bg-teal ..." style="width: 150px; height: 50px"></div>
```

<cssprops>
.rounded | border-radius: 9999px
</cssprops>



## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default all variants for borders will be generated, however you can 
add or remove variants from the `$border-variants` array.

```scss
$border-variants: ("all") !default;
```

<div class="warn">
Note border color classes use <code>$color-variants</code> instead of <code>$border-variants</code>. See the <a href="/#/docs/colors">colors</a> page for more info.
</div>



### Default border

The default border styles (Used in `.border` and variants) can be changed with `$default-border-style`:

```scss
$default-border-style: 1px solid #777 !default;
```


### Default border radius

The default border radius (Used in `.border-radius` and variants) can be changed with `$default-border-radius`:

```scss
$default-border-radius: 2px !default;
```


### Border prefixes

The prefixes for border and different border sides can be customized with the `$border-names` map. The keys 
must remain as shown below, but the value can be customized to your needs:

```scss
$border-names: (
    "all"   : "border",
    "top"   : "border-t",
    "bottom": "border-b",
    "left"  : "border-l",
    "right" : "border-r",

    "top-left"    : "border-tl",
    "top-right"   : "border-tr",
    "bottom-left" : "border-bl",
    "bottom-right": "border-br",
) !default;
```


### Border width sizes

The `$border-sizes` map stores the suffix for the width, followed by the value. Add or remove keys to customize 
what border width variants are generated:

```scss
$border-sizes: (
    "1" : 1px,
    "2" : 2px,
    "3" : 3px,
    "4" : 4px,
    "8" : 8px,
    "16": 16px,
) !default;
```


### Border radius sizes

The `$border-radius-sizes` map stores the suffix for the border-radius, followed by the value. Add or remove keys to customize 
what border radius variants are generated:

```scss
$border-radius-sizes: (
    "none": 0,
    "1"   : 1px,
    "2"   : 2px,
    "4"   : 4px,
    "8"   : 8px,
    "16"  : 16px
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `borders` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("borders");
```
