module.exports = {
	name: "Starting Equipment",
	category: "Miscellaneous",
	description: "Gives the Player an Item when Spawning",
  options: [{
		title: "Item",
		question: "What Item should be given?",
		placeholder: "{item}",
    example: "dirt , stone , compass , etc."
	},{
		title: "Amount",
		question: "How many Items should be given?",
		placeholder: "{amount}"
	},{
		title: "NBT Tags",
		question: "In what Slot should the Item be given?",
		placeholder: "{tags}",
    example: "(Optional Field), Unbreakable:1b , etc."
	},{
		title: "Slot",
		question: "In what Slot should the Item be given?",
		placeholder: "{slot}",
    example: "(Optional Field), 0-8 are the Hotbar Slots , 39-36 are the Armor Slots"
	}],
	json: `{
    "type": "origins:starting_equipment",
    "stacks": [
        {
            "item": "minecraft:{item}",
            "amount": {amount},
            "tag": {{tags}},
            "slot": {slot}
      }
    ]
  }`
}
