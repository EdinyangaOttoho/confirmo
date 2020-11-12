# confirmo
A lightweight front-end confirmation library that helps you to get confirmations before actions are taken on your web apps

<center>
    <img src="preview.JPG">
</center>

## Installation/Usage
To use confirmo in your project, simply add the links to the CSS and JS source files which are included in the source code, named confiro.css and confirmo.js respectively.
```html
<link rel="stylesheet" type="text/css" href="./src/confirmo.css"/>
<script type="text/javascript" src="./src/confirmo.js"></script>
```
Once this is done, you are able to define your confirmation modals with either HTML attributes or JavaScript. Ideally (at default), to initialize the package in your project to be ready to use, the below is your object:
```js
confirmo.init(options)
```
Where options represents an object containing configuration and design properties of the modal such as:

<table style="width:100%">
    <thead>
        <tr>
            <th>Property</th>
            <th>Usage</tr>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>yesBg</td>
            <td>This defines the background color of the "Yes" button of the confirmation modal. The above illustrated in the image was red.</td>
        </tr>
        <tr>
            <td>noBg</td>
            <td>This defines the background color of the "No" button of the confirmation modal. The above illustrated in the image was green.</td>
        </tr>
        <tr>
            <td>backColor</td>
            <td>This defines the background color of the confirmation modal itself. The above illustrated in the image was a hex value (#2a2b2d).</td>
        </tr>
        <tr>
            <td>textColor</td>
            <td>This defines the text (font) color of the contents of the confirmation modal. The above illustrated in the image was white.</td>
        </tr>
    </tbody>
</table>


In summary, the above modal was initialized with the following code:
```js
confirmo.init({
   yesBg:'red',
   noBg:'green',
   backColor:'#2a2b2d',
   textColor:'white'
});
```
