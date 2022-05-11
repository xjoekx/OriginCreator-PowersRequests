module.exports = {
	name: "Inventory",
	category: "Miscellaneous",
	description: "Gives the Player a Shulk-like Inventory",
	options: [{
		title: "Title",
		question: "What Name should the Inventory have ?",
		placeholder: "{title}"
	},{
		title: "Key",
		question: "What Key should the Inventory use ?",
		placeholder: "{key}"
	},
  },{
		title: "Drops",
		question: "Should the Inventory drop on death ?(true, false)",
		placeholder: "{drop}"
	}
  ],
	json: `{
        "name": "{name}",
        "description": "{description}",
        "type": "origins:inventory",
          "title": "{title}",
          "drop_on_death": {drop},
            "key": {
              "key": "key.origins.{key}",
               "continuous": false
        }
    }`
}
