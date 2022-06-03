module.exports = {
	name: "Fire Projectile",
	category: "Combat",
	description: "Allows the Player to shoot a Projectile",
  options: [{
		title: "Projectile",
		question: "What Projectile should be shot?",
		placeholder: "{projectile}",
    example: "arrow , snowball , trident , egg , etc."
	},{
		title: "Cooldown",
		question: "How high should the Cooldown be?",
		placeholder: "{cooldown}"
	},{
		title: "NBT Tags",
		question: "What NBT Tags should the Projectile have?",
		placeholder: "{tags}",
    example: "(Optional Field), pickup:0b , etc."
	},{
		title: "Projectile Count",
		question: "How many Projectiles should you shoot?",
		placeholder: "{count}"
	},{
		title: "Projectile Speed",
		question: "How fast should the Projectile be?",
		placeholder: "{speed}",
    example: "1.5 is a fully charged Bow"
	},{
		title: "Projectile Spread",
		question: "How much should the Projectiles spread?",
		placeholder: "{divergence}",
    example: "1.0 is the Default"
	},{
		title: "Key",
		question: "What Key to shoot?",
		placeholder: "{key}",
    example: "primary , secondary"
	}],
	json: `{
    "type": "origins:fire_projectile",
    "entity_type": "minecraft:{projectile}",
    "cooldown": {cooldown},
    "count": {count},
    "speed": {speed},
    "divergence: {divergence},
    "hud_render": {
        "should_render": false
    },
    "tag": "{{tags}}",
    "key":{
     "key":"key.origins.{key}_active"
    }
  }`
}
