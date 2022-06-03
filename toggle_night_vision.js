module.exports = {
	name: "Toggle Night Vision",
	category: "Passive",
	description: "Allows the Player to see in Darkness",
	options: [{
		title: "Strenght",
		question: "How strong should the Night Vision be?",
		placeholder: "{strenght}",
    example: "0.0 = Min , 1.0 = Max"
	},{
		title: "Key",
		question: "What Key to toggle on and off ?",
		placeholder: "{key}",
    example: "primary , secondary"
	}],
	json: `{
    "type": "origins:night_vision",
    "strength": {strenght}
    "key":{
     "key":"key.origins.{key}_active"
    }
  }`
}
