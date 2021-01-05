# **Positioning** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Positioning utility classes.</p>

---


## Clearfix

Use `.clearfix` to clear floats from elements. This way the parent container will have a proper height when 
containing floated elements:

<div class="demo text-left">
    <p class="my-sm">With clearfix:</p>
    <div class="clearfix bg-lighter-green border">
        <div class="float-left p-sm white bg-green">left</div>
        <div class="float-right p-sm white bg-green">right</div>
    </div>
    <br>
    <p class="my-sm">Without clearfix:</p>
    <div class="clearfix">
        <div class="border-t border bg-lighter-red">
            <div class="float-left p-sm bg-red white">left</div>
            <div class="float-right p-sm bg-red white">right</div>
        </div>
    </div>
</div>

```html
<div class="clearfix ...">
    <div class="float-left ...">left</div>
    <div class="float-right ...">right</div>
</div>
```

<cssprops>
.clearfix | content: " ";\ndisplay: table;\noverflow: hidden;\nclear: both;
</cssprops>


## Floats

Use `.float-left`, `.float-right` and `.float-none` to add or remove floats from an element:

<div class="demo">
    <div class="clearfix bg-ligher-orange white">
        <div class="float-left p-sm bg-green">Left</div>
        <div class="float-left p-sm bg-blue">Left</div>
        <div class="float-left p-sm bg-blue-gray">Left</div>
        <div class="float-right p-sm bg-green">Right</div>
        <div class="float-right p-sm bg-blue">Right</div>
        <div class="float-right p-sm bg-blue-gray">Right</div>
        <div class="float-none p-sm bg-light-blue-gray">None</div>
    </div>
</div>

```html
<div class="float-left ...">Left</div>
<div class="float-left ...">Left</div>
<div class="float-left ...">Left</div>
<div class="float-right ...">Right</div>
<div class="float-right ...">Right</div>
<div class="float-right ...">Right</div>
<div class="float-none ...">None</div>
```

<cssprops>
.float-left | float: left
.float-right | float: right
.float-none | float: none
</cssprops>


## Centering Elements

For a quick and dirty transform based method for centering an individual element, use `.vertical-center`, `.horizontal-center` or `.center`.

This makes the element `position: relative`, then sets `top` and / or `left` to `50%`, and `translateX` and / or `translateY` to `-50%`.

However, we recommend the use of flexboxes whenever possible for centering.

<div class="demo">
    <div class="white bg-lightest-blue-gray striped-bg m-sm" style="height: 80px">
        <div class="bg-dark-blue-gray vertical-center" style="width: 200px; height: 50px; line-height: 50px;">
        .vertical-center
        </div>
    </div>
    <div class="white bg-lightest-blue-gray striped-bg m-sm" style="height: 80px">
        <div class="bg-dark-blue-gray horizontal-center" style="width: 200px; height: 50px; line-height: 50px;">
        .horizontal-center
        </div>
    </div>
    <div class="white bg-lightest-blue-gray striped-bg m-sm" style="height: 80px">
        <div class="bg-dark-blue-gray center" style="width: 200px; height: 50px; line-height: 50px;">
        .center
        </div>
    </div>
</div>

```html
<div class="...">
    <div class="vertical-center ...">
        .vertical-center
    </div>
</div>

<div class="...">
    <div class="horizontal-center ...">
        .horizontal-center
    </div>
</div>

<div class="...">
    <div class="center ...">
        .center
    </div>
</div>
```

<cssprops>
.vertical-center | position: relative;\ntop: 50%;\ntransform: translateY(-50%);
.horizontal-center | position: relative;\nleft: 50%;\ntransform: translateX(-50%);
.center | position: relative;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);
</cssprops>


## Position

Change an object's `position` property with the property name, ie `.sticky`. 

<cssprops>
.relative | position: relative
.absolute | position: absolute
.fixed | position: fixed
.sticky | position: sticky
.static | position: static
</cssprops>


## Positioning

Use `.t-0`, `.b-0`, `.l-0` and `.r-0` to align elements to the top, bottom, left and right respectively. You may need to set 
a valid `position` property such as `absolute`.

<div class="demo white">
    <div class="bg-lightest-teal striped-bg relative inline-block m-sm" style="width: 100px; height: 100px">
        <div class="bg-teal absolute t-0 flex justify-center align-items-center" style="width: 70px; height: 70px">.t-0</div>
    </div>
    <div class="bg-lightest-teal striped-bg relative inline-block m-sm" style="width: 100px; height: 100px">
        <div class="bg-teal absolute b-0 flex justify-center align-items-center" style="width: 70px; height: 70px">.b-0</div>
    </div>
    <div class="bg-lightest-teal striped-bg relative inline-block m-sm" style="width: 100px; height: 100px">
        <div class="bg-teal absolute l-0 flex justify-center align-items-center" style="width: 70px; height: 70px">.l-0</div>
    </div>
    <div class="bg-lightest-teal striped-bg relative inline-block m-sm" style="width: 100px; height: 100px">
        <div class="bg-teal absolute r-0 flex justify-center align-items-center" style="width: 70px; height: 70px">.r-0</div>
    </div>
</div>

```html
<div class="relative ...">
    <div class="absolute t-0 ...">.t-0</div>
</div>
<div class="relative ...">
    <div class="absolute b-0 ...">.b-0</div>
</div>
<div class="relative ...">
    <div class="absolute l-0 ...">.l-0</div>
</div>
<div class="relative ...">
    <div class="absolute r-0 ...">.r-0</div>
</div>
```

<cssprops>
.t-0 | top: 0
.b-0 | bottom: 0
.l-0 | left: 0
.r-0 | right: 0
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for layout will be generated, however you can 
add or remove variants from the `$layout-positioning-variants` array.

```scss
$layout-positioning-variants: ("responsive") !default;
```


### Positioning sizes

A map of size suffix and size values for position classes like `.t-0` is stored in `$positioning-sizes`. Add or 
remove keys and values to this map to add or remove size variants.

```scss
$positioning-sizes: (
    "0": 0
) !default;
```

### Positioning prefixes

The prefixes used for position classes like `.t-0` are stored in `$positioning-prefixes`. The keys must remain 
the same, but values can be freely modified.

```scss
$positioning-prefixes: (
    "top":    "t",
    "bottom": "b",
    "left":   "l",
    "right":  "r"
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `layout-positioning` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("layout-positioning");
```
