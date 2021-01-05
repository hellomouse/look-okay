# **Colors** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Customize the colors used in your project.</p>

---

## Setting Colors

To set a foreground color, simply use the name of the color as a class (For example, `.red`). 

Similarly, to set a background color, use `bg-` followed by the name of the color:

<div class="demo">
    <div class="bg-darkest-gray light-green [ p-md border-radius w-50 mx-auto ]">Hello World!</div>
</div>

```html
<div class="bg-darkest-gray light-green [ ... ]">Hello World!</div>
```


## Border Colors

Border colors can be set using the `border-` prefix followed by optionally a side and a color.

<div class="demo">
    <div class="border-solid border-8 [ border-darker-gray border-t-red border-b-dark-blue ] [ p-lg mx-auto ]" style="width: 150px"></div>
</div>

```html
<div class=" [ border-darker-gray border-t-red border-b-dark-blue ]
               border-solid border-8 ..." style="..."></div>
```




## Default Palette

A customizable default color palette is provided:

<!-- Must be on same line -->
<div id="color-palette"><div class="inline-block m-sm align-top">
        <div class="bg-black js-palette p-sm" style="width: 150px">Black</div>
        <div class="bg-white js-palette p-sm" style="width: 150px">White</div>
        <div class="bg-transparent js-palette p-sm" style="width: 150px">Transparent</div>
    </div>
</div>
<style>
    .js-palette {
        font-size: 11pt;
    }
</style>
<script>
    // Generate the color palette
    const color_modifiers = ['lightest-', 'lighter-', 'light-', '', 'dark-', 'darker-', 'darkest-'];
    const colors = 'red orange yellow pink purple green blue gray teal brown blue-gray primary secondary'.split(' ').reverse();
    const palette = document.getElementById('color-palette');
    for (let color of colors) {
        const parent = document.createElement('div');
        parent.classList.add('inline-block', 'm-sm', 'align-top');
        for (let modifier of color_modifiers) {
            if ('black white transparent'.includes(color) && modifier !== '')
                continue;
            const element = document.createElement('div');
            element.innerText = modifier + color;
            element.style.width = '150px';
            element.classList.add('bg-' + modifier + color, 'js-palette', 'p-sm');
            parent.append(element);
        }
        palette.prepend(parent);
    }
    function rgba2hex(hex) {
        hex = hex.replace('rgba(', '').replace('rgb(', '').replace(')', '');
        hex = hex.split(', ');
        let result = '';
        for (let i = 0; i < hex.length; i++) {
            let chunk = (+hex[i]).toString(16);
            result += chunk.length == 1 ? '0' + chunk : chunk;
        }
        return result;
    }
    const palettes = [...document.getElementsByClassName('js-palette')];
    for (let palette of palettes) {
        const hex = rgba2hex(getComputedStyle(palette).backgroundColor);
        const brightness = (
                    (parseInt(hex.substring(0, 2), 16) * 299) +
                    (parseInt(hex.substring(2, 4), 16) * 587) +
                    (parseInt(hex.substring(4, 6), 16) * 114)) / 1000;
        palette.classList.add(brightness > 125 ? 'black' : 'white');
        palette.innerHTML += `<small class="block">#${hex.toUpperCase()}</small`;
    }
</script>


## Additional Colors

In addition to the colors above, there are several special color classes built in:

### Dark & Light

A quick and dirty class to change the color scheme of an element. `.dark` makes a dark background with a light text color,
`.light` makes a light background with a dark text color.

<div class="demo">
    <div class="dark  p-md text-left">Dark mode</div>
    <div class="light p-md text-left">Light mode</div>
</div>

```html
<div class="dark  p-md">Dark mode</div>
<div class="light p-md">Light mode</div>
```


### Information

There are also color classes for alerts:

<div class="demo">
    <div class="success p-md text-left">
        <b>Success!</b><br>
        Whatever you did, it worked!
    </div>
    <div class="info p-md text-left">
        <b>Information:</b><br>
        You can access websites using a web browser.
    </div>
    <div class="warning p-md text-left">
        <b>Warning:</b><br>
        Reactor is overdue for maintenance.
    </div>
    <div class="error p-md text-left">
        <b>Error!</b><br>
        Reactor temperature is critical!
    </div>
</div>

```html
<div class="success p-md">...</div>
<div class="info    p-md">...</div>
<div class="warning p-md">...</div>
<div class="error   p-md">...</div>
```

### Muted

To slightly mute the text, you can use `.muted` or `.muted-light` for light or dark backgrounds, respectively. 

<div class="demo">
    <div class="light muted p-md text-left">
        This text is slightly muted: <b>.muted</b>
    </div>
    <div class="dark muted-light p-md text-left">
        This text is slightly muted: <b>.muted-light</b>
    </div>
</div>

```html
<div class="light muted ...">
    This text is slightly muted: <b>.muted</b>
</div>
<div class="dark muted-light ...">
    This text is slightly muted: <b>.muted-light</b>
</div>
```


## Customizing

### Prefixes

The background color prefix (for example, `.bg-red`) is determined by `$background-color-prefix`:

```scss
$background-color-prefix: "bg-" !default;
```

Border prefixes (for example, `.border-left-red`), are determined by the global setting `$border-prefix`:

```scss
$border-prefix: (
    "all"   : "border-",
    "top"   : "border-top-",
    "bottom": "border-bottom-",
    "left"  : "border-left-",
    "right" : "border-right-"
) !default;
```

Color modifier prefixes are determined by `$color-modifiers` (See custom colors below):

```scss
$color-modifiers: ("lightest-": 70%, "lighter-": 50%, "light-": 20%, "": 0%, "dark-":-20%, "darker-":-50%, "darkest-": -70%) !default;
```

### Custom colors

`$colors` maps color names to a CSS color value. Adding or removing keys from 
this map will add or remove color classes:

```scss
$colors: (
    "red"   : #f44336, "orange": #ff9800,
    "yellow": #ffeb3b, "purple": #9c27b0,
    "pink"  : #e91e63, "green" : #1bd133,
    "blue"  : #2196f3, "gray"  : #bbb,
    "teal"  : #009688, "brown" : #785125,
    "blue-gray": #607d8b,
    
    "primary": #263238, "secondary": #53a688,
    "black"  : black,   "white"    : white,
    "transparent": transparent) !default;
```

<br>

---
<br>

By default this map does not contain 
any modifiers (ie, `.dark-red`), rather those are automatically generated from the `$color-modifiers` map.

The format of the map is `prefix: (relative) brightness`. For example, `0%` means keep the brightness the same, `-50%`
means make the color 50% darker, and `30%` means make the color 30% brighter.

Note `-100%` means the color will be black, `100%` means 
the color will be white.

```scss
$color-modifiers: ("lightest-": 70%, "lighter-": 50%, "light-": 20%, "": 0%, "dark-":-20%, "darker-":-50%, "darkest-": -70%) !default;
```

Of course, not all color modifiers make sense (for example, `dark-black` or `lighter-transparent`), so you can exclude colors from 
having auto-generated shades / tints by adding its name to `$no-variant-colors`:

```scss
$no-variant-colors: ("black", "white", "transparent") !default;
```

<br>

---
<br>

If you don't wish for shades and tints to be auto-generated, you can set `$color-modifiers` to only be the default, 
then add all the shades and tints manually in `$colors`, for example:

```scss
$color-modifiers: ("": 0%);
$colors: (
    "red": #ff0000, "dark-red": #cc0000, ...
```


### Additional colors

The colors used in `.dark`, `.light`, the information classes and the muted classes are defined by the following variables:

```scss
// .dark and .light colors
$dark-background-color : #222 !default;
$dark-color            : #ddd !default;
$light-background-color: #f7f7f7 !default;
$light-color           : #333 !default;

// .success, .info, .warning, .error colors
$background-color-success: #1bd133 !default;
$background-color-info   : #2196f3 !default;
$background-color-warning: #ffad33 !default;
$background-color-error  : #f44336 !default;

$color-success: white !default;
$color-info   : white !default;
$color-warning: white !default;
$color-error  : white !default;

// .muted and .muted-light colors
$muted-text-color      : transparentize(black, 0.45) !default;
$light-muted-text-color: transparentize(white, 0.45) !default;
```


### Border transparency

The default border color transparency can be adjusted with `$border-color-transparency`, where 0 means 
no transparency (opaque), and 1 means invisible. This only affects the color alpha and does not affected the opacity property.


```scss
$border-color-transparency: 0 !default;
```


### Variants

By default, the following variants are generated for color classes:

```scss
$color-variants: ("responsive", "hover", "focus", "active") !default;
```

These defaults let you change color on, for example, focus or hover:

<div class="demo">
    <div class="bg-transparent orange border-orange [ hover:bg-orange hover:black ] [ border-solid border-2 p-sm mx-auto ]" style="width: 200px">Hover me!</div>
</div>

```html
<div class="bg-transparent orange border-orange
          [ hover:bg-orange hover:black ]
          [ ... ]" style="...">Hover me!</div>
```


### Disabling the module

If you don't want anything in this module to be loaded, add `colors` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("colors");
```
