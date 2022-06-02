module.exports = {
    name: "Hatred of Life",
    category: "Combat",
    description: "You can't eat regular food, recover hunger and saturation by killing.",
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:multiple",
   "feed_on_kill":{
      "type":"origins:self_action_on_kill",
      "entity_action":{
         "type":"origins:feed",
         "food":6,
         "saturation":2
      },
      "cooldown":1
   },
   "no_eat":{
      "type":"origins:prevent_item_use",
      "item_condition":{
         "type":"origins:food"
      }
   }
}`
}
