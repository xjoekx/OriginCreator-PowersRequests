module.exports = {
    name: "Strength",
    category: "Passive",
    description: "Changes the Players Attack Damage.",
    options: [
        {
            title: "Attack Strength",
            question: "How much damage do you want to do? _(-2 = 1 less Heart, 0 = No Change, 2 = 1 more Heart)_",
            placeholder: "{damage_delt}",
            example: "0",
        },
    ],
    json: `{
    "name": "{name}",
    "description": "{description}",
    "type":"origins:attribute",
    "modifier":{
       "attribute":"minecraft:generic.attack_damage",
       "value":{damage_delt},
       "operation":"addition"
    }
}`
}
