module.exports = {
    name: "Leap",
    category: "Movement",
    description: "You can leap forward into the air and travel long distances. (20 second cooldown) [Primary]",
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:active_self",
   "entity_action":{
      "type":"origins:and",
      "actions":[
         {
            "type":"origins:apply_effect",
            "effect":{
               "effect":"minecraft:resistance",
               "duration":100,
               "amplifier":50,
               "show_icon":false,
               "show_particles":false
            }
         },
         {
            "type":"origins:add_velocity",
            "z":2,
            "space":"local"
         }
      ]
   },
   "key":{
      "key":"key.origins.primary_active"
   },
   "cooldown":400,
   "hud_render":{
      "should_render":true,
      "sprite_location":"origins:textures/gui/community/huang/resource_bar_01.png",
      "bar_index":1
   }
}`
}
