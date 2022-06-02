module.exports = {
    name: "Particle Aura",
    category: "Player",
    description: "Gives the player an aura effect with particles.",
    options: [
        {
           title: "Particle Type",
           question: "What particle type are you choosing?",
           placeholder: "{particle}",
           example: "end_rod"
        }
    ],
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:action_over_time",
   "entity_action":{
      "type":"origins:and",
      "actions":[
         {
            "type":"origins:execute_command",
            "command":"particle minecraft:{particle} ~ ~ ~ .5 .5 .5 0.0000000001 1 normal @s"
         },
         {
            "type":"origins:execute_command",
            "command":"particle minecraft:{particle} ~ ~ ~ -.5 -.5 -.5 .01 5 normal"
         }
      ]
   },
   "interval":10
}`
}
