module.exports = {
    name: "Strength",
    category: "Passive",
    description: "Changes the Players Attack Damage.",
    options: [
        {
            title: "Attack Strength",
            question: "How much damage do you want to do?",
            placeholder: "{damage_dealt}",
            example: "-2 = 1 less Heart, 0 = No Change, 2 = 1 more Heart",
        },
    ],
    json: `{
    "name": "{name}",
    "description": "{description}",
    "type":"origins:attribute",
    "modifier":{
       "attribute":"minecraft:generic.attack_damage",
       "value":{damage_dealt},
       "operation":"addition"
    }
  }`
}
