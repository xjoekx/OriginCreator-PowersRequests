module.exports = {
	name: "Fluid Walking",
	category: "Movement",
	description: "Allows you to walk on Fluids",
	options: [{
		title: "Fluid Type",
		question: "What Fluid type should be walkable?",
		placeholder: "{fluid}",
    example: "water , lava"
	}],
	json: `{
	"name": "{name}",
        "description": "{description}",
    "type": "origins:walk_on_fluid",
    "fluid": "minecraft:{fluid}",
    "condition": {
        "type": "origins:fluid_height",
        "fluid": "minecraft:{fluid}",
        "comparison": "<=",
        "compare_to": 0.4
    }
  }`
}
