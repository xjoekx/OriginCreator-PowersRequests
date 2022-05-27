## Uploading a Power
We appreciate contributions to this power library and if you would like to upload a power that can be used for this bot, make a [pull request](https://github.com/Exzotic5485/OriginCreator-Powers/pulls), with a js file using the template below & [template.js](https://github.com/Exzotic5485/OriginCreator-Powers/blob/main/template.js)

In the power json, for the field `name` and `description` of the power, please use `{name}` and `{description}`!

### Template:
```js
module.exports = {
    name: "Power Name",
    category: "Category Name (Use one of the listed)",
    description: "Power Description",
    json: `{Origin Json....}`
}
```
Use [speed.js](https://github.com/Exzotic5485/OriginCreator-Powers/blob/main/speed.js) as an example.

### Options:
The powers you create can support configurable options for the user. As for example having the user decide the strength level of a status effect, by adding these to your power you can make it more broad and more customisable!


> Please keep questions to a character limit of "45" this is discords limit and it will not display if over.
Adding options are as easy as just adding the following to your file:
```js
    options: [
        {
            title: "Option 1",
            question: "Example of a question?",
            placeholder: "{option}" 
        },
        {
            title: "Option 2",
            question: "Example of a question?",
            placeholder: "{example}",
            example: "Shoeborne" // This will show in the modal popup as a placeholder for that textbox (Not Required)
        }
    ]
```


### Categories
| Item         | Description |
|--------------|-----------------|
| `Player` | Modifications to the player (Colour etc) |
| `Movement` | Changes to movement (Speed, slow falling, jump, teleporting)      |
| `Status Effects` | Potion/status effects on the player|
| `Passive` | Passive abilities|
| `Combat` | Powers related to pvp & combat|
| `Miscellaneous` | Powers that dont fit into any category/random|
