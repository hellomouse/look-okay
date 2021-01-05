# **Text** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Text utility classes.</p>

<style>
    .word {
        color: transparent;
        background-color: #80CBC4;
        border-radius: 2px;

        display: inline-block;
        font-size: 8pt;
    }
</style>

---

## Text Transforms

Use `.text-uppercase`, `.text-lowercase`, `.text-capitalize` and `.text-no-transform` to transform the text accordingly:

<div class="demo text-left">
    <p class="text-uppercase m-0">I am uppercased</p>
    <p class="text-lowercase m-0">I AM LOWERCASE</p>
    <p class="text-capitalize m-0">i am capitalized</p>
    <p class="text-no-transform m-0">No special transform</p>
</div>

```html
<p class="text-uppercase">I am uppercased</p>
<p class="text-lowercase">I AM LOWERCASE</p>
<p class="text-capitalize">i am capitalized</p>
<p class="text-no-transform">No special transform</p>
```

<cssprops>
.text-uppercase | text-transform: uppercase
.text-lowercase | text-transform: lowercase
.text-capitalize | text-transform: capitalize
.text-no-transform | text-transform: none
</cssprops>


## Text Decoration

Use the following classes to apply text decoration.

These classes can't be combined, ie 
`class="text-underline text-overline"` will only display an overline (the overline overrides the underline).

<div class="demo">
    <span class="text-no-decoration m-sm">.text-no-decoration</span>
    <span class="text-underline m-sm">.text-underline</span>
    <span class="text-overline m-sm">.text-overline</span>
    <span class="text-underoverline m-sm">.text-underoverline</span>
    <span class="text-strike m-sm">.text-strike</span>
</div>

```html
<span class="text-no-decoration">.text-no-decoration</span>
<span class="text-underline">.text-underline</span>
<span class="text-overline">.text-overline</span>
<span class="text-underoverline">.text-underoverline</span>
<span class="text-strike">.text-strike</span>
```

<cssprops>
.text-no-decoration | text-decoration: none
.text-underline | text-decoration: underline
.text-overline | text-decoration: overline
.text-underoverline | text-decoration: underline overline
.text-strike | text-decoration: line-through
</cssprops>


## Text Decoration Styles

Use the following classes to apply text decoration styles:

<div class="demo">
    <span class="text-decoration-solid text-underline m-sm">.text-decoration-solid</span>
    <span class="text-decoration-double text-underline m-sm">.text-decoration-double</span>
    <span class="text-decoration-dotted text-underline m-sm">.text-decoration-dotted</span>
    <span class="text-decoration-dashed text-underline m-sm">.text-decoration-dashed</span>
    <span class="text-decoration-wavy text-underline m-sm">.text-decoration-wavy</span>
</div>

```html
<span class="text-decoration-solid text-underline">.text-decoration-solid</span>
<span class="text-decoration-double text-underline">.text-decoration-double</span>
<span class="text-decoration-dotted text-underline">.text-decoration-dotted</span>
<span class="text-decoration-dashed text-underline">.text-decoration-dashed</span>
<span class="text-decoration-wavy text-underline">.text-decoration-wavy</span>
```

<cssprops>
.text-decoration-solid | text-decoration-style: solid
.text-decoration-double | text-decoration-style: double
.text-decoration-dotted | text-decoration-style: dotted
.text-decoration-dashed | text-decoration-style: dashed
.text-decoration-wavy | text-decoration-style: wavy
</cssprops>


## Indent

Use `.text-indent` to apply a default indent to the first line:

<div class="demo text-left">
    <p class="text-indent" style="width: 300px">
    Bits of moving fluff ship of the imagination Rig Veda light years descended from astronomers extraplanetary. Two ghostly white figures in coveralls and helmets are softly dancing Vangelis take root and flourish the only home we've ever known a very small stage in a vast cosmic arena vanquish the impossible.
    </p>
</div>

```html
<p class="text-indent">...</p>
```

<cssprops>
.text-indent | text-indent: 1.5em
</cssprops>


## Text Alignment

Use `.text-left`, `.text-right`, `.text-center` and `.text-justify` to align text:

<div class="demo">
    <p class="text-left inline-block m-md" style="width: 300px">
    Bits of moving fluff ship of the imagination Rig Veda light years descended from astronomers extraplanetary. Two ghostly white figures in coveralls and helmets are softly dancing Vangelis take root and flourish the only home we've ever known a very small stage in a vast cosmic arena vanquish the impossible.
    </p>
    <p class="text-center inline-block m-md" style="width: 300px">
    Bits of moving fluff ship of the imagination Rig Veda light years descended from astronomers extraplanetary. Two ghostly white figures in coveralls and helmets are softly dancing Vangelis take root and flourish the only home we've ever known a very small stage in a vast cosmic arena vanquish the impossible.
    </p>
    <p class="text-right inline-block m-md" style="width: 300px">
    Bits of moving fluff ship of the imagination Rig Veda light years descended from astronomers extraplanetary. Two ghostly white figures in coveralls and helmets are softly dancing Vangelis take root and flourish the only home we've ever known a very small stage in a vast cosmic arena vanquish the impossible.
    </p>
    <p class="text-justify inline-block m-md" style="width: 300px">
    Bits of moving fluff ship of the imagination Rig Veda light years descended from astronomers extraplanetary. Two ghostly white figures in coveralls and helmets are softly dancing Vangelis take root and flourish the only home we've ever known a very small stage in a vast cosmic arena vanquish the impossible.
    </p>
</div>

```html
<p class="text-left ..."    style="width: 300px">...</p>
<p class="text-center ..."  style="width: 300px">...</p>
<p class="text-right ..."   style="width: 300px">...</p>
<p class="text-justify ..." style="width: 300px">...</p>
```

<cssprops>
.text-left | text-align: left
.text-center | text-align: center
.text-right | text-align: right
.text-justify | text-align: justify\ntext-justify: inter-word
</cssprops>



## Vertical Align

Use `.aligin-[alignment]` to change the vertical alignment.

Alignment can be any of `baseline, top, middle, bottom, text-top, text-bottom, sub, super`:

<table class="text-left overflow-auto" style="min-width: 500px">
    <tbody>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th style="width: 220px">Example</th>
        </tr>
        <tr>
            <td><code>.align-baseline</code></td>
            <td>Aligns the element with the baseline of its parent</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Baseline alignment: <img class="border-t border-b border-dark-blue inline-block align-baseline" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-top</code></td>
            <td>Aligns with top of the entire line.</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Top alignment: <img class="border-t border-b border-dark-blue inline-block align-top" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-middle</code></td>
            <td>Aligns middle to parent's baseline plus half the parent's x-height.</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Middle alignment: <img class="border-t border-b border-dark-blue inline-block align-middle" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-bottom</code></td>
            <td>Aligns to the bottom of the entire line.</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Bottom alignment: <img class="border-t border-b border-dark-blue inline-block align-bottom" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-text-top</code></td>
            <td>Aligns to the top of the parent's font element (including ascenders).</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Text-top alignment: <img class="border-t border-b border-dark-blue inline-block align-text-top" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-text-bottom</code></td>
            <td>Aligns to the bottom of the parent's font element (including descenders).</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Text-bottom alignment: <img class="border-t border-b border-dark-blue inline-block align-text-bottom" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-sub</code></td>
            <td>Subscript baseline alignment.</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Sub alignment: <img class="border-t border-b border-dark-blue inline-block align-sub" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
        <tr>
            <td><code>.align-super</code></td>
            <td>Superscript baseline alignment.</td>
            <td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
                Super alignment: <img class="border-t border-b border-dark-blue inline-block align-super" src="/img/arrow-left.png" width="16" height="12">
            </td>
        </tr>
    </tbody>
</table>


Example code for one of the examples above is as follows:

```html
<td class="border-t border-b border-dark-red py-0" style="line-height: 3em">
    Baseline alignment: 
    <img class="inline-block align-baseline ..." src="/img/arrow-left.png" width="16" height="12">
</td>
```

<div class="warn mb-sm">
    Note that vertical align only works on inline-level and table-cell elements.
</div>
<div class="warn mt-sm">
    Default overrides, if enabled, give images <code>display: block</code> by default. The above examples add
    <code>.inline-block</code> to the images.
</div>

<cssprops>
.align-baseline | vertical-align: baseline
.align-top | vertical-align: top
.align-middle | vertical-align: middle
.align-bottom | vertical-align: bottom
.align-text-top | vertical-align: text-top
.align-text-bottom | vertical-align: text-bottom
.align-sub | vertical-align: sub
.align-super | vertical-align: super
</cssprops>


## Word Break

Use `.break-normal`, `.break-word` and `.break-all` to change word breaking on wrap:

<div class="demo text-left">
    <div class="break-normal border border-1 border-light-gray p-md block mw-100 m-sm" style="width: 200px">
    Using <code>.break-normal</code>, lines will break on spaces, but will never split long 
    words like supercalifragilisticexpialidocious
    </div>
    <div class="break-word border border-1 border-light-gray p-md block mw-100 m-sm" style="width: 200px">
    Using <code>.break-word</code>, lines will try to break on spaces, but can split long 
    words like supercalifragilisticexpialidocious when needed
    </div>
    <div class="break-all border border-1 border-light-gray p-md block mw-100 m-sm" style="width: 200px">
    Using <code>.break-all</code>, lines will break whenever, regardless if it splits a word or not.
    </div>
</div>

```html
<div class="break-normal ...">
    Using <code>.break-normal</code>, lines will break on spaces, but will never split long 
    words like supercalifragilisticexpialidocious
</div>

<div class="break-word ...">
    Using <code>.break-word</code>, lines will try to break on spaces, but can split long 
    words like supercalifragilisticexpialidocious when needed
</div>

<div class="break-all ...">
    Using <code>.break-all</code>, lines will break whenever, regardless if it splits a word or not.
</div>
```

<cssprops>
.break-normal | word-break: normal\noverflow-wrap: normal
.break-word | word-break: break-word
.break-all | word-break: break-all
</cssprops>


## Text Overflow

Use `.text-truncate` to truncate overflow with an ellipsis. This prevents text wrapping and sets `overflow: hidden`:

<div class="demo text-left">
    <div class="text-truncate bg-light-red white p-md" style="width: 150px">
        The secret word is abracadabra
    </div>
</div>
<br>

```html
<div class="text-truncate ..." style="width: 150px">
    The secret word is abracadabra
</div>
```

<cssprops>
.text-truncate | text-overflow: ellipsis\nwhite-space: nowrap\noverflow: hidden
</cssprops>

<br>

---

Use `.text-overflow-ellipsis` and `.text-overflow-clip` for only the text-overflow property. 

`.text-overflow-ellipsis` trims any overflowing text with ellipsis, while `.text-overflow-clip` clips off overflowing text 
at the boundary.

Does not change whitespace wrapping or overflow visibility, which may need to be set in order for these classes to work:

<div class="demo text-left">
    <div class="inline-block text-overflow-ellipsis overflow-hidden bg-light-red white p-md mw-100 m-sm" style="width: 220px">
    Words like supercalifragilisticexpialidocious
    are quite long
    </div>
    <div class="inline-block text-overflow-clip overflow-hidden bg-light-red white p-md mw-100 m-sm" style="width: 220px">
    Words like supercalifragilisticexpialidocious
    are quite long
    </div>
</div>

```html
<div class="text-overflow-ellipsis overflow-hidden ..." style="width: 220px">
    Words like supercalifragilisticexpialidocious
    are quite long
</div>

<div class="text-overflow-clip overflow-hidden ..." style="width: 220px">
    Words like supercalifragilisticexpialidocious
    are quite long
</div>
```

<cssprops>
.text-overflow-ellipsis | text-overflow: ellipsis
.text-overflow-clip | text-overflow: clip
</cssprops>



## Whitespace

Use `.whitespace-[prop]` to set the whitespace property.

Prop can be any of `"normal", "nowrap", "pre", "pre-line", "pre-wrap"`:

<table>
    <tbody>
        <tr>
            <th>Class</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td><code>.whitespace-normal</code></td>
            <td>Text will behave as your browser defaults, breaking words and collapsing consecutive whitespaces.</td>
            <td><p class="whitespace-normal inline-block m-0" style="width: 150px"><span class="word">Default</span> <span class="word">test</span>
    <span class="word">text</span> <span class="word">with</span>
        <span class="word">indents</span> <span class="word">and</span> <span class="word">lots</span> <span class="word">of</span> <span class="word">lines</span></p></td>
        </tr>
        <tr>
            <td><code>.whitespace-nowrap</code></td>
            <td>Text will not wrap and overflow the container. This will still collapse newlines and spaces.</td>
            <td><p class="whitespace-nowrap overflow-x-scroll inline-block m-0" style="width: 150px"><span class="word">Default</span> <span class="word">test</span>
    <span class="word">text</span> <span class="word">with</span>
        <span class="word">indents</span> <span class="word">and</span> <span class="word">lots</span> <span class="word">of</span> <span class="word">lines</span></p></td>
        </tr>
        <tr>
            <td><code>.whitespace-pre</code></td>
            <td>White space is preserved, text will not be wrapped. Behaves like the <code>pre</code> tag.</td>
            <td><p class="whitespace-pre inline-block m-0 overflow-x-scroll" style="width: 150px"><span class="word">Default</span> <span class="word">test</span>
    <span class="word">text</span> <span class="word">with</span>
        <span class="word">indents</span> <span class="word">and</span> <span class="word">lots</span> <span class="word">of</span> <span class="word">lines</span></p></td>
        </tr>
        <tr>
            <td><code>.whitespace-pre-line</code></td>
            <td>Text will wrap and newlines are preserved, but spaces are not.</td>
            <td><p class="whitespace-pre-line inline-block m-0 overflow-x-scroll" style="width: 150px"><span class="word">Default</span> <span class="word">test</span>
    <span class="word">text</span> <span class="word">with</span>
        <span class="word">indents</span> <span class="word">and</span> <span class="word">lots</span> <span class="word">of</span> <span class="word">lines</span></p></td>
        </tr>
        <tr>
            <td><code>.whitespace-pre-wrap</code></td>
            <td>Text will wrap, spaces and newlines are preserved.</td>
            <td><p class="whitespace-pre-wrap inline-block m-0 overflow-x-scroll" style="width: 150px"><span class="word">Default</span> <span class="word">test</span>
    <span class="word">text</span> <span class="word">with</span>
        <span class="word">indents</span> <span class="word">and</span> <span class="word">lots</span> <span class="word">of</span> <span class="word">lines</span></p></td>
        </tr>
    </tbody>
</table>
    
In all of the examples above, the `p` tag contains the following content (with the same newlines and spaces):

```html
<p class="whitespace-[prop] ...">Default test
    text with
        indents and lots of lines</p></td>
```

<cssprops>
.whitespace-normal | white-space: normal
.whitespace-nowrap | white-space: nowrap
.whitespace-pre | white-space: pre
.whitespace-pre-line | white-space: pre-line 
.whitespace-pre-wrap | white-space: pre-wrap
</cssprops>


## List Style

Use `list-style-[style]` to change the bullet point style.

Style can be of:

```
none, disc, circle, square, decimal, decimal-leading-zero,
lower-roman, upper-roman, lower-alpha, upper-alpha
```

<div class="demo text-left" id="list-demo"></div>

<script>
const main = document.getElementById('list-demo');
const styles = 'none, disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-alpha, upper-alpha'.split(', ');
for (const style of styles) {
    // You can't use backtick multiline strings
    // with this markdown parser
    const sclass = 'list-style-' + style;
    const element = document.createElement('div');
    element.classList.add('inline-block', 'm-md');
    element.innerHTML = [
        '<ol class="' + sclass + ' m-0">',
        '    <li>Cheese</li>',
        '    <li>Butter</li>',
        '    <li>Milk</li>',
        '</ol>'
    ].join('\n');
    main.appendChild(element);
}
</script>

```html
<ol class="list-style-none m-0">
    <li>Cheese</li>
    <li>Butter</li>
    <li>Milk</li>
</ol>

<ol class="list-style-disc m-0">
    <li>Cheese</li>
    <li>Butter</li>
    <li>Milk</li>
</ol>

<ol class="list-style-circle m-0">
    <li>Cheese</li>
    <li>Butter</li>
    <li>Milk</li>
</ol>

...
```

<cssprops>
.list-style-none | list-style: none
.list-style-disc | list-style: disc
.list-style-circle | list-style: circle
.list-style-square | list-style: square
.list-style-decimal | list-style: decimal
.list-style-decimal-leading-zero | list-style: decimal-leading-zero
.list-style-lower-roman | list-style: lower-roman
.list-style-upper-roman | list-style: upper-roman
.list-style-lower-alpha | list-style: lower-alpha
.list-style-upper-alpha | list-style: upper-alpha
</cssprops>

<br>

---

### Reset list styles

Use `.list-reset` to remove default list styles and paddings:

<div class="demo text-left">
    <ol class="list-reset">
        <li>This is a list</li>
        <li>But  default styles</li>
        <li>are removed</li>
    <ol>
</div>

```html
<ol class="list-reset">
    <li>This is a list</li>
    <li>But default styles</li>
    <li>are removed</li>
<ol>
```

<cssprops>
.list-reset | padding: 0\nlist-style: none
</cssprops>


## List Style Position

Use `.list-inside` and `.list-outside` to change the position of the bullet points:

<div class="demo text-left">
    <ol class="list-inside bg-lighter-teal list-style-disc">
        <li class="bg-lightest-teal">Cheese</li>
        <li class="bg-lightest-teal">Butter</li>
        <li class="bg-lightest-teal">Milk</li>
    </ol>
    <ol class="list-outside bg-lighter-teal list-style-disc">
        <li class="bg-lightest-teal">Cheese</li>
        <li class="bg-lightest-teal">Butter</li>
        <li class="bg-lightest-teal">Milk</li>
    </ol>
</div>

```html
 <ol class="list-inside bg-darker-teal ...">
    <li class="bg-dark-teal">Cheese</li>
    <li class="bg-dark-teal">Butter</li>
    <li class="bg-dark-teal">Milk</li>
</ol>

<ol class="list-outside bg-darker-teal ...">
    <li class="bg-dark-teal">Cheese</li>
    <li class="bg-dark-teal">Butter</li>
    <li class="bg-dark-teal">Milk</li>
</ol>
```

<cssprops>
.list-inside | list-style-position: inside
.list-outside | list-style-position: outside
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Prefix

The default text prefix (used by some of the classes above) is `text-`, which can be customized 
with the `$text-prefix` variable:

```scss
$text-prefix: "text-" !default;
```

When changing this prefix, any class above that starts with `text-` will now use the new prefix.


### Default text indent

The default text indent for `.text-indent` can be changed with `$default-text-indent`:

```scss
$default-text-indent: 1.5em !default;
```


### Variants

By default no variants for text will be generated, however you can 
add or remove variants from the `$text-variants` array.

```scss
$text-variants: () !default;
```

<div class="warn">
Note text color classes (not shown on this page) use <code>$color-variants</code> instead of <code>$text-variants</code>. See the <a href="/#/docs/colors">colors</a> page for more info.
</div>


### Disabling the module

If you don't want anything in this module to be loaded, add `text` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("text");
```
