module.exports = {
    name: "Kill Heal",
    category: "Passive",
    description: "You heal every time you kill an entity.",
    options: [
        {
            title: "Heal Amount",
            question: "How much healing do you want ? _(-2 = 1 less Heart, 0 = No Change, 2 = 1 more Heart)_",
            placeholder: "{heal}",
        },
    ],
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:self_action_on_kill",
   "entity_action":{
      "type":"origins:heal",
      "amount":{heal}
   }
}`
}
