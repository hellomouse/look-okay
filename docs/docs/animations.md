# **Animations**

<p class="m-0 mt-md">CSS Animation utility classes.</p>

---

## Spin

Use `.animate-spin` to add a linear spin, useful for loading indicators:

<div class="demo">
<div style="border: 0.15rem solid gray; border-top: 0.15rem solid red;
            border-radius: 50%; height: 2.5rem; width: 2.5rem"
    class="[ animate-spin ] [ mx-auto ] [ border-darker-gray border-t-blue ]">
</div>
<p class="mb-0 mt-md">Fetching new content...</p>
</div>

```html
<div style="..." class="animate-spin ... "></div>
<p class="...">Fetching new content...</p>
```

<cssprops>
.animate-spin | animation: animation-spin 1.2s linear infinite
animation-spin | @keyframes animation-spin {\n&nbsp; from { transform: rotate(0deg); }\n&nbsp; to { transform: rotate(360deg); }\n}
</cssprops>


## Bounce

Use `.animate-bounce` to add a bouncing animation, useful for directing the user's attention:

<div class="demo">
    <div style="width: 170px" class="animate-bounce [ bg-teal white ] [ p-md rounded mx-auto ]">
        Look at me!
    </div>
</div>

```html
<div class="animate-bounce ...">
    Look at me!
</div>
```

<cssprops>
.animate-bounce | animation: animation-bounce 1.2s infinite;
animation-bounce | @keyframes animation-bounce {\n&nbsp; 0%, 100% {\n&nbsp; &nbsp; transform: translateY(0%);\n&nbsp; &nbsp; animation-timing-function: cubic-bezier(.26,.64,.61,1.09);\n&nbsp; }\n&nbsp; 50% {\n&nbsp; &nbsp; transform: translateY(-20%);\n&nbsp; &nbsp; animation-timing-function: cubic-bezier(.57,-0.08,.96,.61);\n&nbsp; }\n}
</cssprops>


## Fade-in

Use `.animate-fade-in` to make the element fade in on page load (refresh the page to see):

<div class="demo">
    <div style="width: 150px; height: 60px;" class="border-1 border-dotted border-light-gray mx-auto">
        <div class="animate-fade-in [ t-left p-md border-radius bg-dark-green h-100 ]"></div>
    </div>
</div>

```html
<div class="animate-fade-in ..."></div>
```

<cssprops>
.animate-fade-in | animation: animation-fade-in 1.2s ease-in;
animation-fade-in | @keyframes animation-fade-in {\n&nbsp; 0%   { opacity: 0; }\n&nbsp; 100% { opacity: 1; }\n}
</cssprops>


## Fade-out

Use `.animate-fade-out` to make the element fade out on page load (refresh the page to see):

<div class="demo">
    <div style="width: 150px; height: 60px;" class="border-1 border-dotted border-light-gray mx-auto">
        <div class="animate-fade-out [ t-left p-md border-radius bg-red h-100 ]"></div>
    </div>
</div>

```html
<div class="animate-fade-out ..."></div>
```

<cssprops>
.animate-fade-out | animation: animation-fade-in 1.2s ease-in forwards reverse;
</cssprops>


## Pulse

Use `.animate-pulse` to add a fade-in-out, useful for skeleton loaders:

<div class="demo">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="187px" height="100px" viewBox="0 0 187 100" enable-background="new 0 0 187 100" xml:space="preserve"
    class="mx-auto animate-pulse">
        <rect x="0" y="16" fill="#dae1eb" width="72" height="72"/>
        <rect x="80" y="16" fill="#dae1eb" width="107" height="49"/>
        <rect x="80" y="72" fill="#dae1eb" width="107" height="16"/>
    </svg>
</div>

```html
<svg ... class="animate-pulse mx-auto ">
    ...
</svg>
```

<cssprops>
.animate-pulse | animation: animation-pulse 1.2s alternate-reverse infinite;
animation-pulse | @keyframes animation-pulse {\n&nbsp; 0% {\n&nbsp; &nbsp; animation-timing-function: cubic-bezier(.38,-0.09,.61,1.09);\n&nbsp; &nbsp; opacity: 1;\n&nbsp; }\n&nbsp; 100% {\n&nbsp; &nbsp; animation-timing-function: cubic-bezier(.38,-0.09,.61,1.09);\n&nbsp; &nbsp; opacity: 0.5;\n&nbsp; }\n}
</cssprops>


## Ripple

Use `.animate-ripple` to add a scale and fade-out, useful for a "ripple" effect, for example, when 
buttons are clicked or pulsing a notification badge:

<div class="demo">
    <div class="relative mx-auto [ border-1 border-solid border-dark-gray ] p-sm select-none" style="width: 150px">
        Messages
        <div class="rounded bg-red absolute r-0 t-0" style="height: 20px; width: 20px; transform: translate(50%, -50%);"></div>
        <div class="rounded bg-red animate-ripple absolute" style="right: -10px; top: -10px; height: 20px; width: 20px;"></div>
    </div>
</div>

```html
<div class="relative mx-auto ..." ...>
    Messages
    <div class="rounded bg-red absolute r-0 t-0"  style="..."></div>
    <div class="rounded bg-red animate-ripple absolute" style="right: -10px; top: -10px; ..."></div>
</div>
```

<cssprops>
.animate-ripple | animation: animation-ripple 1.2s linear infinite;
animation-ripple | @keyframes animation-ripple {\n&nbsp; 0% {\n&nbsp; &nbsp; opacity: 1;\n&nbsp; &nbsp; transform: scale(1);\n&nbsp; }\n&nbsp; 75%, 100% {\n&nbsp; &nbsp; opacity: 0;\n&nbsp; &nbsp; transform: scale(2);\n&nbsp; }\n}
</cssprops>


## Remove Animations <span class="important-badge">!important</span>

Use `.animate-none` to remove all animations from an object.

<div class="demo">
    <p class="animate-pulse animate-none">No animation</p>
</div>

```html
<p class="animate-pulse animate-none">No animation</p>
```

<cssprops>
.animate-none | animation: none
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Disabling animations

If you don't want any css animations to be generated, you can set
`$enable-animations` to false. By default this value is true:


```scss
$enable-animations: true !default;
```

<div class="warn">This is different than disabling the module entirely as it only disables
classes that create CSS animations (not animation modifiers like <code>.animate-none</code>)</div>


### Variants

By default only responsive variants of animations will be generated (for example, `.md:animate-pulse`), however you can 
add or remove variants from the `$animation-variants` array.

```scss
$animation-variants: ("responsive") !default;
```

<br>

---

<br>

The `reduce-motion:` variant runs when the user has `prefers-reduced-motion` set, allowing you to tone down or remove
animations to respect user motion preferences.

Similarly, the  `default-motion:` variants run only when the user has motion preferences set to `no-preference`.

Neither of these are enabled by default, you can add them to `$animation-variants` to enable them:

```scss
$animation-variants: ("responsive", "reduce-motion", "default-motion") !default;
```


### Default duration

The animation duration for the default animations can be configured as shown:

```scss
$default-animation-duration: 1.2s !default;
```

### Disabling the module

If you don't want anything in this module to be loaded, add `animations` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("animations");
```
