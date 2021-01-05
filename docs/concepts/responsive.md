# Responsive Design

---

Classes with a `responsive` variant can be toggled to only apply at specific breakpoints, customizable in `_settings.scss`:

```scss
$breakpoints-list: (
    'sm': 35.5em,
    'md': 48em,
    'lg': 64em,
    'xl': 80em
) !default;
```

Append the breakpoint name to a class with a responsive variant to have it apply at that breakpoint or above. For example, `sm:red` will only make the color red at the small breakpoint or above.

<table class="w-100 table">
    <thead>
        <tr>
            <th></th>
            <th>sm</th>
            <th>md</th>
            <th>lg</th>
            <th>xl</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>sm:class</code></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
        </tr>
        <tr>
            <td><code>md:class</code></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
        </tr>
        <tr>
            <td><code>lg:class</code></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
        </tr>
        <tr>
            <td><code>xl:class</code></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-lightest-secondary" style="width: 12px; height: 12px"></div></td>
            <td><div class="rounded bg-secondary" style="width: 12px; height: 12px"></div></td>
        </tr>
    </tbody>
</table>


## Good Practices

### Mobile first

The default styles should apply at the smallest breakpoint, and styles that apply at higher breakpoints should be added on.

For example, if we want the background of something to be red for mobile users, but on large screens become dark-blue, we can do this:

<div class="demo bg-red lg:bg-dark-blue" style="height: 120px">
</div>

```html
<div class="bg-red lg:bg-dark-blue"></div>
```


### Undoing

Most classes come with an inverse, so you can use another to "undo" the first class at a higher breakpoint.
You can also use this logic to target a specific breakpoint, as higher breakpoints override lower ones.

For example, the square below is invisible on small screens, but visible on large ones:

<div class="demo">
    <div style="height: 60px; width: 60px" class="bg-red invisible lg:visible mx-auto border-radius"></div>
</div>

```html
<div style="..." class="invisible lg:visible ..."></div>
```
