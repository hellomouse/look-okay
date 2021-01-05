# **Util** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Extra display and layout utility classes.</p>

---

## Display

Simply use the name of the `display:` variant to set that display property. More on the `display` property can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

<div class="demo white">
    <div class="inline-block bg-light-blue p-md border-radius">Hello</div>
    <div class="inline-block bg-light-blue p-md border-radius">We are inline block</div>
</div>

```html
<div class="inline-block ...">Hello</div>
<div class="inline-block ...">We are inline block</div>
```

<cssprops>
.inline | display: inline
.inline-block | display: inline-block
.block | display: block
.flow-root | display: flow-root
.contents | display: contents
.flex | display: flex
.grid | display: grid
.inline-flex | display: inline-flex
.inline-grid | display: inline-grid
.table | display: table
.inline-table | display: inline-table
.table-cell | display: table-cell
.table-caption | display: table-caption
.table-column-group | display: table-column-group
.table-header-group | display: table-header-group
.table-footer-group | display: table-footer-group
.table-row-group | display: table-row-group
.table-column | display: table-column
.table-row | display: table-row
</cssprops>


## Visibility

Use `.invisible`, `.visible` and `.collapse` to set `visibility` to those properties respectively.

|Class|Description|
|---|---|
|`.invisible`|Makes an element invisible without changing layout, and won't be able to receive focus.|
|`.visible`|Makes element visible.|
|`.collapse`|For table rows and columns, hides the row and column completely, but the row or column will still affect the size of other cells. Will hide flex elements and remove the space they occupy, otherwise is same as `visibility: hidden`|

<cssprops>
.invisible | visibility: hidden
.visible | visibility: visible
.collapse | visibility: collapse
</cssprops>


## Object Fit

Use the object fit classes to change 
the object fit property. The above order is the ordering of the example below.

<!-- tabs:start -->

#### ** Fit fill **

When using `.object-fit-fill`, content will be streched to fill the content box.

<div class="demo">
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 150px; height: 150px">
        <img class="object-fit-fill w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>

```html
<div class="..." style="width: 150px; height: 150px">
    <img class="object-fit-fill w-100 h-100" src="/img/mountain.jpeg">
</div>
```

#### ** Fit contain **

When using `.object-fit-contain`, content will fill the content box as much as it can while maintaining aspect ratio.

<div class="demo">
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 150px; height: 150px">
        <img class="object-fit-contain w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>

```html
<div class="..." style="width: 150px; height: 150px">
    <img class="object-fit-contain w-100 h-100" src="/img/mountain.jpeg">
</div>
```

#### ** Fit cover **

When using `.object-fit-cover`, content will fill the content box as much as it can. Aspect ratio is preserved but edges may be clipped.

<div class="demo">
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 150px; height: 150px">
        <img class="object-fit-cover w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>

```html
<div class="..." style="width: 150px; height: 150px">
    <img class="object-fit-cover w-100 h-100" src="/img/mountain.jpeg">
</div>
```

#### ** Fit none **

When using `.object-fit-none`, content is not resized.

<div class="demo">
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 150px; height: 150px">
        <img class="object-fit-none w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>

```html
<div class="..." style="width: 150px; height: 150px">
    <img class="object-fit-none w-100 h-100" src="/img/mountain.jpeg">
</div>
```

#### ** Fit scale down **

Using `.object-fit-scale-down` does nothing unless content is larger than content box, in which case it behaves the same as `contain`.

<div class="demo">
   <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 150px; height: 150px">
        <img class="object-fit-scale-down w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>


```html
<div class="..." style="width: 150px; height: 150px">
    <img class="object-fit-scale-down w-100 h-100" src="/img/mountain.jpeg">
</div>
```
<!-- tabs:end -->

<cssprops>
.object-fit-fill | object-fit: fill
.object-fit-contain | object-fit: contain
.object-fit-cover | object-fit: cover
.object-fit-none | object-fit: none
.object-fit-scale-down | object-fit: scale-down
</cssprops>



## Object Position

To change how the content is aligned within the content box, use `.object-[pos]`. Pos can be
of `left`, `right`, `top`, `bottom`, `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center`.

<div class="demo">
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-top-left w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-top w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-top-right w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <br>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-left w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-center w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-right w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <br>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-bottom-left w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-bottom w-100 h-100" src="/img/mountain.jpeg">
    </div>
    <div class="bg-lighter-blue-gray striped-bg inline-block m-sm border" style="width: 200px; height: 150px">
        <img class="object-fit-none object-bottom-right w-100 h-100" src="/img/mountain.jpeg">
    </div>
</div>

```html
<img class="object-fit-none  object-top-left     w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-top          w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-top-right    w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-left         w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-center       w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-right        w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-bottom-left  w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-bottom       w-100 h-100" src="/img/mountain.jpeg">
<img class="object-fit-none  object-bottom-right w-100 h-100" src="/img/mountain.jpeg">
```

<cssprops>
.object-left | object-position: left
.object-right | object-position: right
.object-top | object-position: top
.object-bottom | object-position: bottom
.object-top-left | object-position: left top
.object-top-right | object-position: right top
.object-bottom-left | object-position: left bottom
.object-bottom-right | object-position: right bottom
.object-center | object-position: center
</cssprops>


## Overscroll

Use `.overscroll-contain`, `.overscroll-none` and `.overscroll-auto` to change overscroll behavior.

You can also target a specific axis by using `.overflow-x-` and `.overflow-y-` as a prefix instead (ie, `.overscroll-x-none`).

<!-- tabs:start -->

#### ** Auto **

Use `.overscroll-auto` for default scrolling behavior.

<div class="demo text-left">
    <div class="overflow-y-scroll overscroll-auto mw-100 m-lg" style="width: 400px; height: 100px">
        <b>.overscroll-auto</b><br>
        I recommend you don't fire until you're within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! I'm afraid I still don't understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you.
    </div>
</div>

```html
<div class="overflow-y-scroll overscroll-auto ...">
    ...
</div>
```


#### ** Contain **

When using `.overscroll-contain`, scrolling in a scrollable child will not scroll the parent when a scroll boundary is reached.

<div class="demo text-left">
    <div class="overflow-y-scroll overscroll-contain mw-100 m-lg" style="width: 400px; height: 100px">
        <b>.overscroll-contain</b><br>
        I recommend you don't fire until you're within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! I'm afraid I still don't understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you.
    </div>
</div>

```html
<div class="overflow-y-scroll overscroll-contain ...">
    ...
</div>
```

#### ** None **

Using `.overscroll-none` does the same as `.overscroll-contain`, but also prevents other overscroll effects (like pull down to refresh on mobile browsers)

<div class="demo text-left">
    <div class="overflow-y-scroll overscroll-none mw-100 m-lg" style="width: 400px; height: 100px">
        <b>.overscroll-none</b><br>
        I recommend you don't fire until you're within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! I'm afraid I still don't understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you.
    </div>
</div>

```html
<div class="overflow-y-scroll overscroll-none ...">
    ...
</div>
```

<!-- tabs:end -->

<cssprops>
.overscroll-contain | overscroll-behavior: contain
.overscroll-none | overscroll-behavior: none
.overscroll-auto | overscroll-behavior: auto
---
.overscroll-x-contain | overscroll-behavior-x: contain
.overscroll-x-none | overscroll-behavior-x: none
.overscroll-x-auto | overscroll-behavior-x: auto
---
.overscroll-y-contain | overscroll-behavior-y: contain
.overscroll-y-none | overscroll-behavior-y: none
.overscroll-y-auto | overscroll-behavior-y: auto
</cssprops>


## Overflow

Use `.overflow-hidden`, `.overflow-scroll`, `.overflow-auto` to change the overflow.

You can use the `overflow-x-` or `overflow-y` prefix to target only a specific axis, ie `.overflow-x-scroll` to make 
a scrollbar appear along the x-axis.

<!-- tabs:start -->

#### ** Hidden **

When using `.overflow-hidden` the overflow is always hidden.

<div class="demo text-left">
    <div style="width: 350px; height: 150px" class="overflow-hidden border border-1 border-light-gray p-md inline-block m-sm">
        <b>.overflow-hidden</b><br><br>
        The history of nuclear physics as a discipline distinct from atomic physics starts with the discovery of radioactivity by Henri Becquerel in 1896 a year later was an indication that the atom had internal structure. At the beginning of the 20th century the accepted model of the atom was J. J. Thomson's "plum pudding" model in which the atom was a positively charged ball with smaller negatively charged electrons embedded inside it.
        <br><br>
        The 1903 Nobel Prize in Physics was awarded jointly to Becquerel, for his discovery and to Marie and Pierre Curie for their subsequent research into radioactivity. Rutherford was awarded the Nobel Prize in Chemistry in 1908 for his "investigations into the disintegration of the elements and the chemistry of radioactive substances".
    </div>
</div>

```html
<div style="width: 350px; height: 150px" class="overflow-hidden ...">
    <b>.overflow-hidden</b><br><br>
    The history of nuclear physics as a discipline...
</div>
```

#### ** Scroll **

When using `.overflow-scroll` a scrollbar is always shown.

<div class="demo text-left">
    <div style="width: 350px; height: 150px" class="overflow-scroll border border-1 border-light-gray p-md inline-block m-sm">
        <b>.overflow-scroll</b><br><br>
        The history of nuclear physics as a discipline distinct from atomic physics starts with the discovery of radioactivity by Henri Becquerel in 1896 a year later was an indication that the atom had internal structure. At the beginning of the 20th century the accepted model of the atom was J. J. Thomson's "plum pudding" model in which the atom was a positively charged ball with smaller negatively charged electrons embedded inside it.
        <br><br>
        The 1903 Nobel Prize in Physics was awarded jointly to Becquerel, for his discovery and to Marie and Pierre Curie for their subsequent research into radioactivity. Rutherford was awarded the Nobel Prize in Chemistry in 1908 for his "investigations into the disintegration of the elements and the chemistry of radioactive substances".
    </div>
</div>

```html
<div style="width: 350px; height: 150px" class="overflow-scroll ...">
    <b>.overflow-scroll</b><br><br>
    The history of nuclear physics as a discipline...
</div>
```

#### ** Auto **

When using `.overflow-auto` a scrollbar is only shown when needed.

<div class="demo text-left">
    <div style="width: 350px; height: 150px" class="overflow-auto border border-1 border-light-gray p-md inline-block m-sm">
        <b>.overflow-auto</b><br><br>
        The history of nuclear physics as a discipline distinct from atomic physics starts with the discovery of radioactivity by Henri Becquerel in 1896 a year later was an indication that the atom had internal structure. At the beginning of the 20th century the accepted model of the atom was J. J. Thomson's "plum pudding" model in which the atom was a positively charged ball with smaller negatively charged electrons embedded inside it.
        <br><br>
        The 1903 Nobel Prize in Physics was awarded jointly to Becquerel, for his discovery and to Marie and Pierre Curie for their subsequent research into radioactivity. Rutherford was awarded the Nobel Prize in Chemistry in 1908 for his "investigations into the disintegration of the elements and the chemistry of radioactive substances".
    </div>
</div>

```html
<div style="width: 350px; height: 150px" class="overflow-auto ...">
    <b>.overflow-auto</b><br><br>
    The history of nuclear physics as a discipline...
</div>
```

<!-- tabs:end -->

<cssprops>
.overflow-hidden | overflow: hidden
.overflow-scroll | overflow: scroll
.overflow-auto | overflow: auto
---
.overflow-x-hidden | overflow-x: hidden
.overflow-x-scroll | overflow-x: scroll
.overflow-x-auto | overflow-x: auto
---
.overflow-hidden-y | overflow-y: hidden
.overflow-scroll-y | overflow-y: scroll
.overflow-auto-y | overflow-y: auto
</cssprops>



## Z-index

Use `.z-0` through `.z-4` (including `.z-4`) and `.z-auto` to set the z-index:

<div class="demo relative">
    <div class="invisible" style="height: 90px"></div>
    <div class="bg-light-red white shadow-md border-radius absolute z-4" style="top: 17px; width: 80px; height: 80px; line-height: 80px">
        .z-4
    </div>
    <div class="bg-light-red white shadow-md border-radius absolute z-3" style="top: 20px; left: 85px; width: 80px; height: 80px; line-height: 80px">
        .z-3
    </div>
    <div class="bg-light-red white shadow-md border-radius absolute z-2" style="top: 23px; left: 150px; width: 80px; height: 80px; line-height: 80px">
        .z-2
    </div>
    <div class="bg-light-red white shadow-md border-radius absolute z-1" style="top: 26px; left: 215px; width: 80px; height: 80px; line-height: 80px">
        .z-1
    </div>
    <div class="bg-light-red white shadow-md border-radius absolute z-0" style="top: 29px; left: 280px; width: 80px; height: 80px; line-height: 80px">
        .z-0
    </div>
</div>

```html
<div class="z-0 ...">.z-0</div>
<div class="z-1 ...">.z-1</div>
<div class="z-2 ...">.z-2</div>
<div class="z-3 ...">.z-3</div>
<div class="z-4 ...">.z-4</div>
```

<cssprops>
.z-0 | z-index: 0
.z-1 | z-index: 1
.z-2 | z-index: 2
.z-3 | z-index: 3
.z-4 | z-index: 4
.z-auto | z-index: auto
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for layout will be generated, however you can 
add or remove variants from the `$layout-util-variants` array.

```scss
$layout-util-variants: ("responsive") !default;
```

### Z-index prefix

To change the z-index prefix, change `$z-index-prefix`:

```scss
$z-index-prefix: "z-" !default;
```

### Z-index values

To change what z-index variants are generated, add or remove keys to `$z-index-map`.

The map maps a suffix to a z-index value.

```scss
$z-index-map: (
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "auto": auto
) !default;
```

### Disabling the module

If you don't want anything in this module to be loaded, add `layout-util` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("layout-util");
```
