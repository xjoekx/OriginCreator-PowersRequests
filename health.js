module.exports = {
	name: "Health",
	category: "Passive",
	description: "Changes the Players Health",
	options: [{
		title: "Health Amount",
		question: "How much Health do you want ? _(-2 = 1 less Heart, 0 = No Change, 2 = 1 more Heart)_",
		placeholder: "{health}"
	}],
	json: `{
        "name": "{name}",
        "description": "{description}",
        "type": "origins:attribute",
        "modifier": {
            "name": "Max health increase",
            "attribute": "minecraft:generic.max_health",
            "value": {health},
            "operation": "addition"
        }
    }`
}