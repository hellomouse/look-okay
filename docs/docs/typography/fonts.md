# **Fonts** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Text utility classes.</p>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Coda&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<style>
@font-face {
    font-family: "FiraSans";
    src: url("/assets/FiraSans-Regular.woff2") format("woff2");
}
@font-face {
    font-family: "Coda";
    src: url("/assets/Coda-Regular.ttf") format("ttf");
}

.inter {
    font-family: Inter, sans-serif !important;
}
.fira {
    font-family: FiraSans, sans-serif !important;
}
.coda {
    font-family: Coda !important;
}
</style>

---

## Font Size

Use the font size classes below to adjust the font size:

<div class="demo text-left">
    <span class="inline-block" style="width: 90px">
        <code>font-2xs</code></span><span class="font-2xs ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-xs</code></span><span class="font-xs ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-sm</code></span><span class="font-sm ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-md</code></span><span class="font-md ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-lg</code></span><span class="font-lg ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-xl</code></span><span class="font-xl ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-2xl</code></span><span class="font-2xl ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h1</code></span><span class="font-h1 ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h2</code></span><span class="font-h2 ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h3</code></span><span class="font-h3 ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h4</code></span><span class="font-h4 ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h5</code></span><span class="font-h5 ml-lg">This is sample text</span><br>
    <span class="inline-block" style="width: 90px">
        <code>font-h6</code></span><span class="font-h6 ml-lg">This is sample text</span>
</div>

```html
<span class="font-2xs">This is sample text</span>
<span class="font-xs">This is sample text</span>
<span class="font-sm">This is sample text</span>
...
```

<cssprops>
.font-2xs | font-size: 0.65rem
.font-xs | font-size: 0.75rem
.font-sm | font-size: 0.85rem
.font-md | font-size: 1rem
.font-lg | font-size: 1.2rem
.font-xl | font-size: 1.6rem
.font-2xl | font-size: 2rem
.font-h1 | font-size: 2.5rem
.font-h2 | font-size: 2rem
.font-h3 | font-size: 1.5rem
.font-h4 | font-size: 1rem
.font-h5 | font-size: 0.85rem
.font-h6 | font-size: 0.75rem
</cssprops>


<br>

---

### Inheriting font size

You can use `.font-size-inherit` to force the element to inherit the font-size from its parent.

<div class="demo">
    <div class="font-lg">
        <small class="font-size-inherit">Hello</small>
    </div>
</div>

```html
<div class="font-lg">
    <small class="font-size-inherit">Hello</small>
</div>
```

<cssprops>
.font-size-inherit | font-size: inherit
</cssprops>


## Font Family

Use `.font-family-inherit` to force an element to inherit its font-family, useful for elements like `button` that don't 
inherit this by default:

<div class="demo">
    <textarea cols="40" rows="5" class="p-sm font-family-inherit darker-gray" style="resize: none;">I have inherited my font family
Textareas usually don't do that</textarea>
</div>

```html
<textarea class="font-family-inherit" ...> ... </textarea>
```

<cssprops>
.font-family-inherit | font-family: inherit
</cssprops>



## Font Style

Use `.font-italic` and `.font-not-italic` to adjust italics:

<div class="demo text-left">
    <p class="font-italic m-sm">Italic text</p>
    <p class="font-not-italic m-sm">Not italic text</p>
</div>

```html
<p class="font-italic">Italic text</p>
<p class="font-not-italic">Not italic text</p>
```

<cssprops>
.font-italic | font-style: italic
.font-not-italic | font-style: none
</cssprops>


## Font Weights

Use `.font-[weight]` to change the font-weight. A list of weights can be found in the table below.

<div class="demo inter">
    <p class="font-thin m-sm">Font weights can change emphasis on your text</p>
    <p class="font-extra-light m-sm">Font weights can change emphasis on your text</p>
    <p class="font-light m-sm">Font weights can change emphasis on your text</p>
    <p class="font-normal m-sm">Font weights can change emphasis on your text</p>
    <p class="font-medium m-sm">Font weights can change emphasis on your text</p>
    <p class="font-semi-bold m-sm">Font weights can change emphasis on your text</p>
    <p class="font-bold m-sm">Font weights can change emphasis on your text</p>
    <p class="font-black m-sm">Font weights can change emphasis on your text</p>
    <p class="font-extra-black m-sm">Font weights can change emphasis on your text</p>
</div>

```html
<p class="font-thin">...</p>
<p class="font-extra-light">...</p>
<p class="font-light">...</p>
<p class="font-normal">...</p>
<p class="font-medium">...</p>
<p class="font-semi-bold">...</p>
<p class="font-bold">...</p>
<p class="font-black">...</p>
<p class="font-extra-black">...</p>
```

<cssprops>
.font-thin | font-weight: 100
.font-extra-light | font-weight: 200
.font-light | font-weight: 300
.font-normal | font-weight: 400
.font-medium | font-weight: 500
.font-semi-bold | font-weight: 600
.font-bold | font-weight: 700
.font-black | font-weight: 800
.font-extra-black | font-weight: 900
</cssprops>


## Font Variants

Use `.font-variant-normal` and `.font-small-caps` to change the font-variant:

<table>
    <tbody>
        <tr>
            <th>Class</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td><code>.font-variant-normal</code></td>
            <td>Default font variant.</td>
            <td class="font-variant-normal"><h1 class="fira font-xl">Hello World</h1></td>
        </tr>
        <tr>
            <td><code>.font-small-caps</code></td>
            <td>Lowercase letters look like small uppercase ones.</td>
            <td class="font-small-caps"><h1 class="fira font-xl">Hello World</h1></td>
        </tr>
    </tbody>
</table>

```html
<h1 class="font-variant-normal">Hello World</h1>
<h1 class="font-small-caps">Hello World</h1>
```

<cssprops>
.font-variant-normal | font-variant: normal
.font-variant-small-caps | font-variant: small-caps
</cssprops>


## Numeric Variants

Use the following classes to change the numeric variant for fonts that support them.

Text content will automatically be 
adjusted, for example if `.font-ordinal` is enabled and the font supports them then typing `1st` will 
automatically apply the "st" glyph.

<table>
    <tbody>
        <tr>
            <th>Class</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td><code>.font-normal-nums</code></td>
            <td>No variants are enabled.</td>
            <td><h1 class="font-normal-nums fira font-xl">1234567890</h1></td>
        </tr>
        <tr>
            <td><code>.font-ordinal</code></td>
            <td>Enables special glyphs for ordinal markers. Corresponds to OpenType <code>ordn</code>.<br><br>
            * Example uses superscripts to simulate appearance</td>
            <td><h1 class="font-ordinal fira font-xl">1<sup>st</sup>, 2<sup>nd</sup>, 3<sup>rd</sup>, 4<sup>th</sup></h1></td>
        </tr>
        <tr>
            <td><code>.font-slashed-zero</code></td>
            <td>Adds a slash through zeroes. Corresponds to OpenType <code>zero</code>.</td>
            <td><h1 class="font-slashed-zero fira font-xl">0</h1></td>
        </tr>
        <tr>
            <td><code>.font-lining-nums</code></td>
            <td>Aligns numbers to baseline. Corresponds to OpenType <code>lnum</code>.</td>
            <td><h1 class="font-lining-nums fira font-xl">1234567890</h1></td>
        </tr>
        <tr>
            <td><code>.font-oldstyle-nums</code></td>
            <td>Adds oldstyle numbers with extra descenders and ascenders. Corresponds to OpenType <code>onum</code>.</td>
            <td><h1 class="font-oldstyle-nums fira font-xl">1234567890</h1></td>
        </tr>
        <tr>
            <td><code>.font-proportional-nums</code></td>
            <td>Not all numbers are the same size. Corresponds to OpenType <code>pnum</code>.</td>
            <td><h1 class="font-proportional-nums fira font-xl">9999<br>1111</h1></td>
        </tr>
        <tr>
            <td><code>.font-tabular-nums</code></td>
            <td>All numbers are the same size and can be easily aligned. Corresponds to OpenType
            <code>tnum</code>.</td>
            <td><h1 class="font-tabular-nums fira font-xl">9999<br>1111</h1></td>
        </tr>
        <tr>
            <td><code>.font-diagonal-fractions</code></td>
            <td>Fractions have numerator and denominator smaller, separated by a diagonal line.
            Corresponds to OpenType <code>frac</code>.</td>
            <td><h1 class="font-diagonal-fractions fira font-xl">1/2 + 1/3</h1></td>
        </tr>
        <tr>
            <td><code>.font-stacked-fractions</code></td>
            <td>Fractions have numerator and denominator smaller, separated by a straight line.
            Corresponds to OpenType <code>afrc</code>.</td>
            <td><h1 class="font-stacked-fractions coda font-h2">1/2 + 1/4</td>
        </tr>
    </tbody>
</table>

<cssprops>
.font-normal-nums | font-variant-numeric: normal
.font-ordinal | font-variant-numeric: ordinal
.font-slashed-zero | font-variant-numeric: slashed-zero
.font-lining-nums | font-variant-numeric: lining-nums
.font-oldstyle-nums | font-variant-numeric: oldstyle-nums
.font-proportional-nums | font-variant-numeric: proportional-nums
.font-tabular-nums | font-variant-numeric: tabular-nums
.font-diagonal-fractions | font-variant-numeric: diagonal-fractions
.font-stacked-fractions | font-variant-numeric: stacked-fractions
</cssprops>


## Line Height

Use `.line-[size]` to change the line-height.

Size can be of `1, 1.15, 1.5, 1.75, 2, 2.5`:

<div class="demo text-left">
    <p class="line-1" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
    <p class="line-1.15" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
    <p class="line-1.5" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
    <p class="line-1.75" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
    <p class="line-2" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
    <p class="line-2.5" style="max-width: 800px">Lorem ipsum pellentesque eu tellus blandit enim phasellus, porttitor adipiscing odio pellentesque placerat pretium primis, arcu at egestas mollis consectetur etiam tellus ac faucibus convallis eget proin tempus primis iaculis.</p>
</div>

```html
<p class="line-1">...</p>
<p class="line-1.15">...</p>
<p class="line-1.5">...</p>
<p class="line-1.75">...</p>
<p class="line-2">...</p>
<p class="line-2.5">...</p>
```

<cssprops>
.line-1 | line-height: 1
.line-1.15 | line-height: 1.15
.line-1.5 | line-height: 1.5
.line-1.75 | line-height: 1.75
.line-2 | line-height: 2
.line-2.5 | line-height: 2.5
</cssprops>


## Letter Spacing

Use `.letter-spacing-[size]` to change the letter spacing.

Size can be of `tightest, tighter, tight, normal, wide, wider, widest`:

<div class="demo text-left">
    <p class="letter-spacing-tightest">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-tighter">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-tight">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-normal">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-wide">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-wider">Lorem ipsum pellentesque eu tellus blandit enim</p>
    <p class="letter-spacing-widest">Lorem ipsum pellentesque eu tellus blandit enim</p>
</div>

```html
<p class="letter-spacing-tightest">...</p>
<p class="letter-spacing-tighter">...</p>
<p class="letter-spacing-tight">...</p>
<p class="letter-spacing-normal">...</p>
<p class="letter-spacing-wide">...</p>
<p class="letter-spacing-wider">...</p>
<p class="letter-spacing-widest">...</p>
```

<cssprops>
.letter-spacing-tightest | letter-spacing: -0.075em
.letter-spacing-tighter | letter-spacing: -0.05em
.letter-spacing-tight | letter-spacing: -0.025em
.letter-spacing-normal | letter-spacing: 0em
.letter-spacing-wide | letter-spacing: 0.025em
.letter-spacing-wider | letter-spacing: 0.05em
.letter-spacing-widest | letter-spacing: 0.075em
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Prefix

The default font prefix (used by some of the classes above) is `font-`, which can be customized 
with the `$font-prefix` variable:

```scss
$font-prefix: "font-" !default;
```

When changing this prefix, any class above that starts with `font-` will now use the new prefix.


### Font sizes

A font size map for suffix to size is in `$font-sizes`. Add or remove keys from this map to add or remove size variants:

```scss
$font-sizes: (
    "2xs": 0.65rem,
    "xs": 0.75rem,
    "sm": 0.85rem,
    "md": 1rem,
    "lg": 1.2rem,
    "xl": 1.6rem,
    "2xl": 2rem,
    
    "h1": 2.5rem,
    "h2": 2rem,
    "h3": 1.5rem,
    "h4": 1rem,
    "h5": 0.85rem,
    "h6": 0.75rem
) !default;
```

### Font weights

A font weight map for suffix to weight is in `$font-weights`. Add or remove keys from this map to add or remove weights variants:

```scss
$font-weights: (
    "thin"       : 100,
    "extra-light": 200,
    "light"      : 300,
    "normal"     : 400,
    "medium"     : 500,
    "semi-bold"  : 600,
    "bold"       : 700,
    "black"      : 800,
    "extra-black": 900
) !default;
```

### Line heights

A map of a suffix to line height is in `$line-heights`. Add or remove keys to add or remove line height variants:

```scss
$line-heights: (
    "1"     : 1,
    "1\\.15": 1.15,
    "1\\.5" : 1.5,
    "1\\.75": 1.75,
    "2"     : 2,
    "2\\.5" : 2.5
) !default;
```

### Letter spacing

A map of a suffix to a letter-spacing value is in `$letter-spacing`. Add or remove keys to add or remove letter spacing variants:

```scss
$letter-spacing: (
    "tightest": -0.075em,
    "tighter" : -0.05em,
    "tight"   : -0.025em,
    "normal"  : 0em,
    "wide"    : 0.025em,
    "wider"   : 0.05em,
    "widest"  : 0.075em
) !default;
```

### Variants

By default no variants for font will be generated, however you can 
add or remove variants from the `$font-variants` array.

```scss
$font-variants: () !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `fonts` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("fonts");
```
