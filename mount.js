module.exports = {
	name: "Mount",
	category: "Movement",
	description: "Allows other Players to Sit on the Player",
	json: `{
	"name": "{name}",
        "description": "{description}",
    "type": "origins:action_on_being_used",
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
