module.exports = {
    name: "Invisible",
    category: "Status Effects",
    description: "Your body can vanish into thin air. [{key}]",
        options: [
        {
            title: "Key",
            question: "What Key should activate the power?",
            placeholder: "{key}",
            example: "primary, secondary",
        },
    ],
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:active_self",
   "entity_action":{
      "type":"origins:if_else",
      "condition":{
         "type":"origins:status_effect",
         "effect":"minecraft:invisibility",
         "inverted":true
      },
      "if_action":{
         "type":"origins:apply_effect",
         "effect":{
            "effect":"minecraft:invisibility",
            "show_particles":false,
            "show_icon":true,
            "duration":36000,
            "amplifier":1
         }
      },
      "else_action":{
         "type":"origins:clear_effect",
         "effect":"minecraft:invisibility"
      }
   },
   "cooldown":1,
   "hud_render":{
      "should_render":false
   },
   "key":{
      "key":"key.origins.{key}_active"
   }
}`
}
