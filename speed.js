module.exports = {
    name: "Speed",
    category: "Movement",
    description: "Gives the player speed effect",
    options: [
        {
           title: "Speed Amount",
           question: "What speed level do you want? (0 = Level 1)",
           placeholder: "{speed_level}",
           example: "0"
        }
    ],
    json: `
    {
    "name": "{name}",
    "description": "{description}",
    "type": "origins:stacking_status_effect",
    "min_stacks": 0,
    "max_stacks": 1,
    "duration_per_stack": 100,
    "tick_rate": 10,
    "effect": {
        "effect": "minecraft:speed",
        "duration": 100,
        "amplifier": {speed_level},
        "show_particles": true,
        "show_icon": true
    }
}`
}
