# Table of contents

- 1. [Buttons](#buttons)
  - 1.1. [Basic](#buttons-basic)
  - 1.2. [Colors](#buttons-with-colors)
  - 1.3. [Shapes](#buttons-shapes)
  - 1.4. [Sizes](#buttons-sizes)
  - 1.5. [Clear buttons](#buttons-clear)
  - 1.6. [Toggle buttons](#buttons-toggle)
  - 1.7. [Enabled/disabled](#buttons-enabled-disabled)
  - 1.8. [With shadow](#buttons-with-shadow)

# Buttons <a id="buttons"></a>

## Basic <a id="buttons-basic"></a>

```xml
<template>
  <ButtonView>Default button</ButtonView>
</template>
```

```ts
<style lang="ts">
  import ButtonView from "@/components/atoms/ButtonView.vue";
</style>
```

<div class="overview">
<ButtonView>Default button</ButtonView>
</div>

## With colors <a id="buttons-with-colors"></a>

```xml
<ButtonView v-bind:color="Color.White">White</ButtonView>
```

<div class="overview">
<ButtonView v-bind:color="Color.White">White</ButtonView>
<ButtonView v-bind:color="Color.Blue">Blue</ButtonView>
<ButtonView v-bind:color="Color.Green">Green</ButtonView>
<ButtonView v-bind:color="Color.Grey">Grey</ButtonView>
<ButtonView v-bind:color="Color.Red">Red</ButtonView>
</div>

| Name  | Value       |
| ----- | ----------- |
| White | Color.White |
| Blue  | Color.Blue  |
| Green | Color.Green |
| Grey  | Color.Grey  |
| Red   | Color.Red   |

## Shapes <a id="buttons-shapes"></a>

```xml
<ButtonView v-bind:shape="ButtonShape.Square">Square</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Square">Square</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Rounded">Rounded</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.FullyRounded">Fully rounded</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Badge">1</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Badge">10</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Badge">100</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Badge">99+</ButtonView>

</div>

| Name           | Value                    |
| -------------- | ------------------------ |
| Square         | ButtonShape.Square       |
| Rounded        | ButtonShape.Rounded      |
| Fully rounded  | ButtonShape.FullyRounded |
| Badge (circle) | ButtonShape.Badge        |

## Sizes <a id="buttons-sizes"></a>

```xml
<ButtonView v-bind:size="TextSize.XSmall">x-small</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:color="Color.Green"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:size="TextSize.XSmall">x-small</ButtonView>
  
  <ButtonView
    v-bind:color="Color.Green"
    v-bind:shape="ButtonShape.Rounded"
    v-bind:size="TextSize.Small">small</ButtonView>

<ButtonView
    v-bind:color="Color.Green"
    v-bind:shape="ButtonShape.Rounded"
    v-bind:size="TextSize.Normal">base</ButtonView>

<ButtonView
    v-bind:color="Color.Green"
    v-bind:shape="ButtonShape.Rounded"
    v-bind:size="TextSize.Large">large</ButtonView>

<ButtonView
    v-bind:color="Color.Green"
    v-bind:shape="ButtonShape.Rounded"
    v-bind:size="TextSize.XLarge">x-large</ButtonView>

</div>

| Name    | Value           |
| ------- | --------------- |
| X-small | TextSize.XSmall |
| Small   | TextSize.Small  |
| Normal  | TextSize.Normal |
| Large   | TextSize.Large  |
| X-large | TextSize.XLarge |

## Clear buttons <a id="buttons-clear"></a>

```xml
<ButtonView v-bind:size="ButtonKind.Clear">Clear</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:color="Color.None"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">None</ButtonView>
    
<ButtonView
  v-bind:color="Color.White"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">White</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">Blue</ButtonView>

<ButtonView
  v-bind:color="Color.Green"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">Green</ButtonView>

<ButtonView
  v-bind:color="Color.Grey"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">Grey</ButtonView>

<ButtonView
  v-bind:color="Color.Red"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Clear">Red</ButtonView>

</div>

## Toggle buttons <a id="buttons-toggle"></a>

```xml
<ButtonView v-bind:size="ButtonKind.Toggle">Toggle</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:color="Color.None"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">None</ButtonView>

<ButtonView
  v-bind:color="Color.White"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">White</ButtonView>

<ButtonView
  v-bind:color="Color.Blue"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">Blue</ButtonView>

<ButtonView
  v-bind:color="Color.Green"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">Green</ButtonView>

<ButtonView
  v-bind:color="Color.Grey"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">Grey</ButtonView>

<ButtonView
  v-bind:color="Color.Red"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Toggle">Red</ButtonView>

</div>

## Enabled/disabled <a id="buttons-enabled-disabled"></a>

```xml
<ButtonView v-bind:disabled="true">Disabled</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:color="Color.Red"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Filled"
  v-bind:disabled="false">Enabled</ButtonView>

<ButtonView
  v-bind:color="Color.Red"
  v-bind:shape="ButtonShape.Rounded"
  v-bind:kind="ButtonKind.Filled"
  v-bind:disabled="true">Disabled</ButtonView>

</div>

## With shadow <a id="buttons-with-shadow"></a>

```xml
<ButtonView
  v-bind:shadow="true"
  v-bind:color="Color.Red"
  v-bind:shape="ButtonShape.Rounded">Red</ButtonView>
```

<div class="overview">
<ButtonView
  v-bind:shadow="true"
  v-bind:color="Color.Red" 
  v-bind:shape="ButtonShape.Rounded">Red</ButtonView>
</div>
