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

### Categories
| Item         | Description |
|--------------|-----------------|
| `Player` | Modifications to the player (Colour etc) |
| `Movement` | Changes to movement (Speed, slow falling, jump, teleporting)      |
| `Status Effects` | Potion/status effects on the player|
| `Passive` | Passive abilities|
| `Combat` | Powers related to pvp & combat|
| `Miscellaneous` | Powers that dont fit into any category/random|
