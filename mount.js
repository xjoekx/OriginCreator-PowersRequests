module.exports = {
	name: "Mount",
	category: "Movement",
	description: "Allows the Player to Sit on other Entities",
	json: `{
    "type": "origins:action_on_entity_use",
    "bientity_action": {
        "type": "origins:mount"
    },
    "bientity_condition": {
        "type": "origins:target_condition",
        "condition": {
            "type": "origins:passenger",
            "inverted": true
      }
    }
  }`
}
