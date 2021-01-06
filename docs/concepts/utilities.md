# Utilty Based Design

---

## What is Utility Based Design?

look-okay uses an utility based design, akin to frameworks like [Tailwind](https://tailwindcss.com/), [Tachyons](https://tachyons.io/) or [Basscss](https://basscss.com/). This means instead of using specific classes for each component (like `.card`), we use atomic css classes to apply the styles.

For example, in a card using look-okay might look like

```html
<div class="p-md border-radius bg-white shadow-lg">
    Card!
</div>
```

## Why Use Utility Based Design?

Using utilities makes prototyping and keeping consistent styles faster. You don't need additional CSS to style, and the variants allow for responsive designs straight from the HTML.
