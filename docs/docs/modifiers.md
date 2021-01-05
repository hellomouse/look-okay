# **Modifiers** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Misc element modifiers</p>

---

## Hidden

Use `.hidden` or the `hidden` attribute to hide an element (`display: none`):

```html
<div class="hidden">Hidden</div>
<div hidden>Hidden</div>
```

<cssprops>
.hidden | display: none
</cssprops>


## Cursors

Use `.cursor-[cursor]` to set the cursor. 

Avaliable cursors are 
`auto`, `default`, `help`, `pointer`, `wait`, `crosshair`, `text`, `move`, `not-allowed`, `grab`, `grabbing`, `zoom-in`, `zoom-out`.

Use `.cursor-auto` to automatically set the pointer depending on the element, for example hovering text will use the `text` cursor.

<div class="demo grid grid-cols-1 sm:grid-cols-3 justify-items-stretch">
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-auto">.cursor-auto</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-default">.cursor-default</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-help">.cursor-help</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-pointer">.cursor-pointer</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-wait">.cursor-wait</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-crosshair">.cursor-crosshair</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-text">.cursor-text</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-move">.cursor-move</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-not-allowed">.cursor-not-allowed</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-grab">.cursor-grab</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-grabbing">.cursor-grabbing</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-zoom-in">.cursor-zoom-in</div>
    <div class="bg-lightest-secondary border-radius p-sm m-sm cursor-zoom-out">.cursor-zoom-out</div>
</div>

<br>
<cssprops>
.cursor-auto | cursor: auto
.cursor-default | cursor: default
.cursor-help | cursor: help
.cursor-pointer | cursor: pointer
.cursor-wait | cursor: wait
.cursor-crosshair | cursor: crosshair
.cursor-text | cursor: text
.cursor-move | cursor: move
.cursor-not-allowed | cursor: not-allowed
.cursor-grab | cursor: grab
.cursor-grabbing | cursor: grabbing
.cursor-zoom-in | cursor: zoom-in
.cursor-zoom-out | cursor: zoom-out
</cssprops>


## Pointer Events

Use `.pointer-events-auto` for default behavior (ie, hovering, clicking).

Use `.pointer-events-none` to make the element "pass-through" for pointer events, as in the element will 
ignore the click or hover, but the event will pass to any elements underneath.

<div class="demo">
    <div class="relative" style="height: 60px">
        <button class="center absolute cursor-pointer" onclick="alert('Hi')">Can't click me!</button>
        <div class="center striped-bg absolute bg-red pointer-events-auto opacity-50" style="width: 200px; height: 50px"></div>
    </div>
    <div class="relative" style="height: 60px">
        <button class="center absolute cursor-pointer" onclick="alert('Hi')">Now you can!</button>
        <div class="center striped-bg absolute bg-green pointer-events-none opacity-50" style="width: 200px; height: 50px"></div>
    </div>
</div>

```html
<div class="relative ...">
    <button class="center absolute" onclick="alert('Hi')">Can't click me!</button>
    <div class="pointer-events-auto ..."></div>
</div>

<div class="relative ...">
    <button class="center absolute" onclick="alert('Hi')">Now you can!</button>
    <div class="pointer-events-none ..."></div>
</div>
```

<cssprops>
.pointer-events-auto | pointer-events: auto;
.pointer-events-none | pointer-events: none;
</cssprops>


## Resize

Use the resize classes to allow an element to be resized.

<!-- tabs:start -->
#### ** None **

Use `.resize-none` to prevent an element from being resized.

<div class="demo">
    <textarea class="p-md mx-auto resize-none">Can't resize me</textarea>
</div>

```html
<textarea class="resize-none ...">Can't resize me</textarea>
```


#### ** x **

Use `.resize-x` to allow an element to be resized horizontally.

<div class="demo">
    <textarea class="p-md mx-auto resize-x">Resize horizontally</textarea>
</div>

```html
<textarea class="resize-x ...">Resize horizontally</textarea>
```


#### ** y **

Use `.resize-y` to allow an element to be resized vertically.

<div class="demo">
    <textarea class="p-md mx-auto resize-y">Resize vertically</textarea>
</div>

```html
<textarea class="resize-y ...">Resize vertically</textarea>
```


#### ** Both **

Use `.resize` to allow an element to be resized.

<div class="demo">
    <textarea class="p-md mx-auto resize">Resize me!</textarea>
</div>

```html
<textarea class="resize ...">Resize me!</textarea>
```

<!-- tabs:end -->

<cssprops>
resize-none	| resize: none
resize-x | resize: horizontal
resize-y | resize: vertical
resize | resize: both
</cssprops>


## Selection

Use the select classes to change selection behavior.

<!-- tabs:start -->

#### ** Auto **

Use `.select-auto` to default to browser behavior.

<div class="demo">
    <p class="select-auto">I default to browser selection rules</p>
</div>

```html
<p class="select-auto">
    I default to browser selection rules
</p>
```


#### ** Text **

Use `.select-text` to allow selection of text.

<div class="demo">
    <p class="select-text">I can be selected</p>
</div>

```html
<p class="select-text">
    I can be selected
</p>
```


#### ** All **

Use `.select-all` to select all the text when clicked.

<div class="demo">
    <p class="select-all">Click me to select everything.</p>
</div>

```html
<p class="select-all">
    Click me to select everything.
</p>
```


#### ** None **

Use `.select-none` to prevent users from selecting text.

<div class="demo">
    <p class="select-none">This paragraph uses .select-none to ensure you can't select this text by accident</p>
</div>

```html
<p class="select-none">
    This paragraph uses .select-none to ensure you can't select this text by accident
</p>
```

<!-- tabs:end -->


<cssprops>
.select-auto | user-select: auto
.select-text | user-select: text
.select-all | user-select: all
.select-none | user-select: none
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only the following variants for modifiers will be generated, however you can 
add or remove variants from the `$modifier-variants: ("responsive") ` array.

```scss
$modifier-variants: ("responsive") 
```


### Disabling the module

If you don't want anything in this module to be loaded, add `modifiers` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("modifiers");
```
