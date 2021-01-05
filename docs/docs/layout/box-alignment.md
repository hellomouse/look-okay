# **Box Alignment** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Box alignment utility classes.</p>

---

## Justify Content

Use the `justify` classes to adjust how items are aligned and space within a container.

<!-- tabs:start -->

#### ** Start **

Use `.justify-start` to align items to the beginning of the container:

<div class="demo flex justify-start">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-start">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```


#### ** End **

Use `.justify-end` to align items to the end of the container:

<div class="demo flex justify-end">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-end">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```


#### ** Center **

Use `.justify-center` to align items to the center of the container:

<div class="demo flex justify-center">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-center">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```


#### ** Space around **

Use `.justify-space-around` to equalize space around each item:

<div class="demo flex justify-space-around">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-space-around">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Space between **

Use `.justify-space-between` to equalize space between each item, ignoring spaces on the sides of the container:

<div class="demo flex justify-space-between">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-space-between">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Space evenly **

Use `.justify-end` to equalize space between each item and the sides of the container. This avoids the double sized spaces 
when using `.justify-space-around`:

<div class="demo flex justify-space-evenly">
    <div class="bg-light-blue border-radius p-md m-sm white">1</div>
    <div class="bg-light-blue border-radius p-md m-sm white">2</div>
    <div class="bg-light-blue border-radius p-md m-sm white">3</div>
</div>

```html
<div class="flex justify-space-evenly">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.justify-start | justify-content: start
.justify-end | justify-content: end
.justify-center | justify-content: center
.justify-space-around | justify-content: space-around
.justify-space-between | justify-content: space-between
.justify-space-evenly | justify-content: space-evenly
</cssprops>



## Justify Items

Use the `justify-items` classes to justify items on their inline axis:

<!-- tabs:start -->

#### ** Auto **

When using `.justify-items-auto`, items will take the `justify-items` property of its parent, otherwise behaves like `stretch` or `start`. See [here](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) for the specifics.

<div class="demo grid grid-cols-3 gap-sm justify-items-auto">
    <div class="bg-light-pink border-radius p-md white">1</div>
    <div class="bg-light-pink border-radius p-md white">2</div>
    <div class="bg-light-pink border-radius p-md white">3</div>
    <div class="bg-light-pink border-radius p-md white">4</div>
    <div class="bg-light-pink border-radius p-md white">5</div>
    <div class="bg-light-pink border-radius p-md white">6</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-auto ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Start **

Use `.justify-items-start` to align items to the start of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-start">
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">1</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-start ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** End **

Use `.justify-items-end` to align items to the end of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-end">
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">1</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-end ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Center **

Use `.justify-items-center` to align items to the center of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-center">
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">1</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-light-pink border-radius p-md white" style="max-width: 100px">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-center ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Stretch **

Use `.justify-items-stretch` to stretch all auto-sized items to fill the alignment container while keeping restrictions on `max-width` and `max-length`.

<div class="demo grid grid-cols-3 gap-sm justify-items-stretch">
    <div class="bg-light-pink border-radius p-md white">1</div>
    <div class="bg-light-pink border-radius p-md white">2</div>
    <div class="bg-light-pink border-radius p-md white">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-stretch ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.justify-items-auto | justify-items: auto
.justify-items-start | justify-items: start
.justify-items-end | justify-items: end
.justify-items-center | justify-items: center
.justify-items-stretch | justify-items: stretch
</cssprops>


## Justify Self

Use the `justify-self` classes to justify individual items on their inline axis.
This behaves exactly as `justify-items`, just replace the prefix with `justify-self`.
Using `justify-self` on an individual item will override its container's `justify-items` property.

<!-- tabs:start -->

#### ** Auto **

Use `.justify-self-auto` to default to the `justify-items` property of the parent.

<div class="demo grid grid-cols-3 gap-sm justify-items-auto">
    <div class="bg-lightest-orange border-radius p-md transparent">1</div>
    <div class="justify-self-auto bg-orange border-radius p-md white">2</div>
    <div class="bg-lightest-orange border-radius p-md transparent">3</div>
    <div class="bg-lightest-orange border-radius p-md transparent">4</div>
    <div class="bg-lightest-orange border-radius p-md transparent">5</div>
    <div class="bg-lightest-orange border-radius p-md transparent">6</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-auto ...">
    <div class="...">1</div>
    <div class="justify-self-auto ...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Start **

Use `.justify-self-start` to align an item to the start of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-auto">
    <div class="bg-lightest-orange border-radius p-md transparent">1</div>
    <div class="justify-self-start bg-orange border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-lightest-orange border-radius p-md transparent">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-auto ...">
    <div class="...">1</div>
    <div class="justify-self-start ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** End **

Use `.justify-self-end` to align an item to the end of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-auto">
    <div class="bg-lightest-orange border-radius p-md transparent">1</div>
    <div class="justify-self-end bg-orange border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-lightest-orange border-radius p-md transparent">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-auto ...">
    <div class="...">1</div>
    <div class="justify-self-end ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Center **

Use `.justify-self-center` to align an item to the center of the inline-axis.

<div class="demo grid grid-cols-3 gap-sm justify-items-auto">
    <div class="bg-lightest-orange border-radius p-md transparent">1</div>
    <div class="justify-self-center bg-orange border-radius p-md white" style="max-width: 100px">2</div>
    <div class="bg-lightest-orange border-radius p-md transparent">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-auto ...">
    <div class="...">1</div>
    <div class="justify-self-center ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Stretch **

Use `.justify-self-stretch` to stretch all auto-sized items to fill the alignment container while keeping restrictions on `max-width` and `max-length`.

<div class="demo grid grid-cols-3 gap-sm justify-items-start">
    <div class="bg-lightest-orange border-radius p-md transparent">1</div>
    <div class="justify-self-stretch bg-orange border-radius p-md white">2</div>
    <div class="bg-lightest-orange border-radius p-md transparent">3</div>
</div>

```html
<div class="grid grid-cols-3 justify-items-start ...">
    <div class="...">1</div>
    <div class="justify-self-stretch ...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.justify-self-auto | justify-self: auto
.justify-self-start | justify-self: start
.justify-self-end | justify-self: end
.justify-self-center | justify-self: center
.justify-self-stretch | justify-self: stretch
</cssprops>



## Align Content

Use the `align-content` classes to align rows to the container's cross axis.

<!-- tabs:start -->

#### ** Start **

Use `.align-content-start` to align row items to start of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-content-start bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-start ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** End **

Use `.align-content-end` to align row items to end of cross axis:

<div class="demo">
    <div class="striped-bg grid grid-cols-3 gap-sm align-content-end bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-end ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Center **

Use `.align-content-center` to align row items to center of cross axis:

<div class="demo">
    <div class="striped-bg grid grid-cols-3 gap-sm align-content-center bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-center ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Space around **

Use `.align-content-space-around` to put an equal amount of space around each line:

<div class="demo">
    <div class="striped-bg grid grid-cols-3 gap-sm align-content-space-around bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-space-around ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Space between **

Use `.align-content-space-between` to put an equal amount of space between each line (the top and bottom edges are not lines, so rows will be flush with those edges):

<div class="demo">
    <div class="striped-bg grid grid-cols-3 gap-sm align-content-space-between bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-space-between ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```


#### ** Space evenly **

Use `.align-content-space-evenly` to put an equal amount of space between each line and the top and bottom edges. This avoids 
the double-sized gap with `.align-content-space-around`:

<div class="demo">
    <div class="striped-bg grid grid-cols-3 gap-sm align-content-space-evenly bg-lightest-red" style="height: 200px">
        <div class="bg-light-red border-radius p-md white">1</div>
        <div class="bg-light-red border-radius p-md white">2</div>
        <div class="bg-light-red border-radius p-md white">3</div>
        <div class="bg-light-red border-radius p-md white">4</div>
        <div class="bg-light-red border-radius p-md white">5</div>
        <div class="bg-light-red border-radius p-md white">6</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-content-space-evenly ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.align-content-start | align-content: start
.align-content-end | align-content: end
.align-content-center | align-content: center
.align-content-space-around | align-content: space-around
.align-content-space-between | align-content: space-between
.align-content-space-evenly | align-content: space-evenly
</cssprops>



## Align Items

Use the `align-items` classes to align items to the container's cross axis.

<!-- tabs:start -->

#### ** Start **

Use `.align-items-start` to align row items to start of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-items-start bg-lightest-purple">
        <div class="bg-light-purple border-radius p-md white">1</div>
        <div class="bg-light-purple border-radius p-md white flex justify-center align-items-center" style="height: 70px">2</div>
        <div class="bg-light-purple border-radius p-md white">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-start ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** End **

Use `.align-items-end` to align items to end of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-items-end bg-lightest-purple">
        <div class="bg-light-purple border-radius p-md white">1</div>
        <div class="bg-light-purple border-radius p-md white flex justify-center align-items-center" style="height: 70px">2</div>
        <div class="bg-light-purple border-radius p-md white">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-end ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Center **

Use `.align-items-center` to align items to center of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-items-center bg-lightest-purple">
        <div class="bg-light-purple border-radius p-md white">1</div>
        <div class="bg-light-purple border-radius p-md white flex justify-center align-items-center" style="height: 70px">2</div>
        <div class="bg-light-purple border-radius p-md white">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-center ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Baseline **

Use `.align-items-baseline` to align the baselines of each item:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-items-baseline bg-lightest-purple">
        <div class="bg-light-purple border-radius p-md white text-underline">&nbsp; 1 &nbsp;</div>
        <div class="bg-light-purple border-radius p-md white flex justify-center align-items-center text-underline" style="height: 70px">&nbsp; 2 &nbsp;</div>
        <div class="bg-light-purple border-radius p-md white text-underline" style="height: 70px">&nbsp; 3 &nbsp;</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-baseline ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Stretch **

Use `.align-items-stretch` to stretch each item to fill the container cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-items-stretch bg-lightest-purple" style="height: 60px">
        <div class="bg-light-purple border-radius p-md white">1</div>
        <div class="bg-light-purple border-radius p-md white">2</div>
        <div class="bg-light-purple border-radius p-md white">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-stretch ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.align-items-start | align-items: flex-start
.align-items-end | align-items: flex-end
.align-items-center | align-items: center
.align-items-baseline | align-items: baseline
.align-items-stretch | align-items: stretch
</cssprops>


## Align Self

Use the `align-self` classes to align an individual item to the container's cross axis, overriding `align-items`:

<!-- tabs:start -->

#### ** Auto **

Use `.align-self-auto` to default to the `align-items` property of the container:

<div class="demo">
    <div class="grid striped-bg align-items-start grid-cols-3 gap-sm bg-lightest-green">
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">1</div>
        <div class="bg-green border-radius p-md align-self-auto white">2</div>
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 align-items-start ...">
    <div class="...">1</div>
    <div class="align-self-auto ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Start **

Use `.align-self-start` to align a row item to start of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm bg-lightest-green">
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">1</div>
        <div class="bg-green border-radius p-md white align-self-start">2</div>
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 ...">
    <div class="...">1</div>
    <div class="align-self-start ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** End **

Use `.align-self-end` to align a row item to end of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm bg-lightest-green">
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">1</div>
        <div class="bg-green border-radius p-md white align-self-end">2</div>
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 ...">
    <div class="...">1</div>
    <div class="align-self-end ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Center **

Use `.align-self-center` to align an item to center of cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm bg-lightest-green">
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">1</div>
        <div class="bg-green border-radius p-md white align-self-center">2</div>
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 ...">
    <div class="...">1</div>
    <div class="align-self-center ...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Stretch **

Use `.align-self-stretch` to stretch an item to fill the container cross axis:

<div class="demo">
    <div class="grid striped-bg grid-cols-3 gap-sm align-self-stretch bg-lightest-green" style="height: 60px">
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">1</div>
        <div class="bg-green border-radius p-md white align-self-stretch">2</div>
        <div class="bg-lighter-green border-radius p-md transparent flex align-items-center justify-center" style="height: 70px">3</div>
    </div>
</div>

```html
<div class="grid grid-cols-3 ...">
    <div class="...">1</div>
    <div class="align-self-stretch ...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.align-self-auto | align-self: auto
.align-self-start | align-self: flex-start
.align-self-end | align-self: flex-end
.align-self-center | align-self: center
.align-self-stretch  | align-self: stretch
</cssprops>



## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for box-alignment will be generated, however you can 
add or remove variants from the `$box-alignment-variants` array.

```scss
$box-alignment-variants: ("responsive") !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `box-alignment` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("box-alignment");
```
