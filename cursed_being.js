module.exports = {
    name: "Cursed Being",
    category: "Player",
    description: "You take increased damage that ignores armor from weapons enchanted with {enchantment}.",
    options: [
        {
           title: "Enchanted Weakness",
           question: "What enchantment do you take more damage from?",
           placeholder: "{enchantment}",
           example: "smite"
        }
    ],
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:self_action_when_hit",
   "entity_action":{
      "type":"origins:apply_effect",
      "effect":{
         "effect":"minecraft:instant_damage",
         "amplifier":1,
         "duration":1
      }
   },
   "damage_condition":{
      "type":"origins:attacker",
      "entity_condition":{
         "type":"origins:equipped_item",
         "equipment_slot":"mainhand",
         "item_condition":{
            "type":"origins:enchantment",
            "enchantment":"minecraft:{enchantment}",
            "comparison":">=",
            "compare_to":1
         }
      }
   },
   "cooldown":1
}`
}
