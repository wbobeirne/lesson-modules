autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

#[fit] SASS
## A CSS Preprocessor

---

# What is SASS?

* SASS is is a CSS preprocessor, meaning it transforms code in to working CSS
* It provides all sorts of enhancements, such as variables and mixins
* Most web developers use SASS to make up for CSS's lack of features

---

## What does it look like?

```scss
$image-size: 100px;

.profile {
  width: 100%;

  .photo {
    width: $image-size;
    height: $image-size;
    @include light-shadow;
  }
}
```

While SASS can remove much of CSS's boilerplate code (Semi colons, curly braces) we'll be leaving all of that in so that it looks as similar to CSS as possible. We'll actually be writing SCSS, a subset of SASS.

---

## Nested selectors

Instead of repeating selectors over and over, you can nest selectors to combine them. The SCSS above becomes the CSS below:

```scss
.profile {
  .name {
    font-size: 15px;
  }
  .location {
    font-size: 10px;
  }
}
```

```css
.profile .name {
  font-size: 15px;
}
.profile .location {
  font-size: 10px;
}
```

---

## Appended selectors

You can also append to the current selector, to add modifiers.

```scss
.button {
  width: 100px;

  &.blue {
    background: #00F;
  }
  &.red {
    background: #F00;
  }
}
```

```css
.button {
  width: 100px;
}
.button.blue {
  background: #00F;
}
.button.red {
  background: #F00;
}
```

---

## Variables

No more copy and pasting, assign values to variables to reuse them.

```scss
$color-text-light: #FFF;
$color-text-dark: #000;

.text {
  color: $color-text-dark;
}
```

```css
.text {

}
```

---

## Mixins

Much like variables, mixins provide reusable code. Simple `@include` a `@mixin` you defined. Mixins can also take arguments, so you can make them customizable.

```scss
@mixin light-shadow($color) {
  box-shadow: 1px 1px 1px rgba($color, 0.1);
}

.modal {
  @include light-shadow(#000);

  &.invert-shadow {
    @include light-shadow(#FFF);
  }
}
```

```css
.modal {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.modal.invert-shadow {
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1);
}
```

---

# Awesome, how do I use it?

SASS is not a requirement for this course, but it is highly recommended. If you want to try it out, there are many ways to use it. There are a few GUI applications for it, but you can also get it on your terminal. See full instructions at:

### [http://sass-lang.com/install](http://sass-lang.com/install)
