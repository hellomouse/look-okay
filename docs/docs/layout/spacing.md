# **Spacing** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Margin and padding classes.</p>

---

## Margins and Paddings

Margins are prefixed using the `.m` prefix and paddings are prefixed with the 
`.p` prefix. Classes follow the following construction pattern:
 
```
.[p|m][|t|l|b|r|x|y]-(n-)-[0|sm|md|lg|xl|auto]
```

(Note: there are no auto 
padding or negative padding classes because paddings cannot be auto or negative)

---

|Shorthand|Meaning|
|---|---|
|m|Margin|
|p|Padding|
|t|Top|
|b|Bottom|
|l|Left|
|r|Right|
|x|Left and right|
|y|Top and bottom|
|n|Negative|

---

Some examples of valid classes:

```css
.m-0     /* Sets all margins to 0*/
.pt-xl   /* Extra large top padding */
.ml-sm   /* Small left margin */
.mx-auto /* Auto horizontal margins */
.mt-n-lg /* Large negative top margin */
```

Some examples of invalid classes:

```css
.p-n-sm  /* Padding cannot be negative */
.px-auto /* Padding cannot be auto */
```

<br>

---

### Uniform sizes

Margin and padding classes will override any defaults. You can combine directional classes with uniform size 
classes, for example `.ml-0 .m-lg` will have large padding except on the left side. Some examples of sizing:

<div class="demo">
    <div class="bg-lighter-blue white m-sm p-0 striped-bg"> <div class="bg-dark-blue white">.p-0</div></div>
    <div class="bg-lighter-blue m-sm p-sm striped-bg"><div class="bg-dark-blue white">.p-sm</div></div>
    <div class="bg-lighter-blue m-sm p-md striped-bg"><div class="bg-dark-blue white">.p-md</div></div>
    <div class="bg-lighter-blue m-sm p-lg striped-bg"><div class="bg-dark-blue white">.p-lg</div></div>
    <div class="bg-lighter-blue m-sm p-xl striped-bg"><div class="bg-dark-blue white">.p-xl</div></div>
    <div class="bg-lighter-blue pt-xl pb-sm pl-lg pr-md m-sm striped-bg">
        <div class="w-100 bg-dark-blue white p-md border-box">.pt-xl .pb-sm .pl-lg .pr-md</div>
    </div>
    <div class="bg-lighter-blue p-lg pl-0 m-sm striped-bg">
        <div class="w-100 bg-dark-blue white p-md border-box">.p-lg .pl-0</div>
    </div>
</div>



## Box Sizing

Use `.content-box` to include borders and padding in size calculation, and `.border-box` to exclude.

For example, with `.border-box` a 50px x 50px box will always be 50px x 50px (although content area may shrink when borders and paddings are added).

With `.content-box` if we add a 
1px border and 2px of padding on all sides the dimensions will become 56px x 56px, but the content area will remain the same (50px x 50px).

<div class="demo">
    <div class="border-box border border-4 p-lg inline-block bg-lighest-gray striped-bg" style="width: 100px; height: 100px">
        <div class="w-100 h-100 bg-red opacity-75"></div>
    </div>
    <div class="content-box border border-4 p-lg inline-block bg-lighest-gray striped-bg" style="width: 100px; height: 100px">
        <div class="w-100 h-100 bg-red opacity-75"></div>
    </div>
    <br>
    <p class="my-md"><i>Border-box (left) and content-box (right)<br>Both squares have width and height of 100px</i></p>
</div>

```html
<div class="border-box border border-4 p-lg ..." style="...">
    <div class="w-100 h-100 bg-red opacity-75"></div>
</div>

<div class="content-box border border-4 p-lg ..." style="...">
    <div class="w-100 h-100 bg-red opacity-75"></div>
</div>
```

<cssprops>
.border-box | box-sizing: border-box
.content-box | box-sizing: content-box
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for layout will be generated, however you can 
add or remove variants from the `$layout-spacing-variants` array.

```scss
$layout-spacing-variants: ("responsive") !default;
```

### Abbreviations

You can customize the names used to assemble the classes above using `$margin-padding-abbrev`. Only the values the keys 
point to should be changed:

```scss
$margin-padding-abbrev: (
    "margin":   "m",
    "padding":  "p",
    "top":      "t",
    "bottom":   "b",
    "left":     "l",
    "right":    "r",
    "x-axis":   "x",
    "y-axis":   "y",
    "negative": "n",
    "0":        "0"
) !default;
```


### Padding sizes

Add or remove keys to `$padding-map` to generate a padding variant with the key as its suffix. Padding values cannot be 
negative or `auto`:

```scss
$padding-map: (
    "0": 0,
    "sm": 6px,
    "md": 12px,
    "lg": 18px,
    "xl": 24px
) !default;
```


### Margin sizes

Add or remove keys to `$margin-map` to generate a margin variant with the key as its suffix. Margin values are allowed to be
negative or auto and by default extend `$padding-map`:

```scss
$margin-map: join(
    $padding-map,
    (
        "auto": auto,
        "n-sm": -6px,
        "n-md": -12px,
        "n-lg": -18px,
        "n-xl": -24px
    )
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `layout-spacing` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("layout-spacing");
```
