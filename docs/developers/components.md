# Components

We're following the atomic design for VueJS components. The idea is to have composable components some small, some bigger.

## Atoms

Atoms are the smallest components that can be displayed, a button for example.
When implementing a form we'll need some inputs. These inputs will be atoms as they can't be splitted in smaller components.

<div class="example">
    <input type="text" placeholder="your text here..." />
</div>

> **atoms** are located in `src/components/atoms/`

## Molecules

Molecules are small groups of atoms that are intrinsically linked.
To return to our previous example, a label and an input will be a molecule used in our form.

<div class="example">
    <span style="margin-right: 1rem;">First name</span>
    <input type="text" placeholder="your text here..." />
</div>

> **molecules** are located in `src/components/molecules`

## Organisms

Organisms are complex components, often build from multiple atoms or molecules.
A form is composed of multiple inputs, buttons, etc.

<div class="example">
    <table>
        <tr>
            <td><span style="margin-right: 1rem;">First name</span></td>
            <td><input type="text" placeholder="your text here..." /></td>
        </tr>
        <tr>
            <td><span style="margin-right: 1rem;">Last name</span></td>
            <td><input type="text" placeholder="your text here..." /></td>
        </tr>
        <tr>
            <td><span style="margin-right: 1rem;">Email</span></td>
            <td><input type="text" placeholder="your text here..." /></td>
        </tr>
        <tr>
            <td></td>
            <td><button>Submit</button></td>
        </tr>
    </table>
</div>

> **organisms** are located in `src/components/organisms`

## Pages

Pages are the web page displayed to the user. They are composed of every kind of components and arrange them using layouts.

> **pages** are located in `src/pages`
