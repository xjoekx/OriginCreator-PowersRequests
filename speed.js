module.exports = {
    name: "speed I",
    category: "player modifications",
    description: "gives player speed I",
    json: `
    {
    "name": "${power.name}",
    "description": "${power.description}",
    "type": "origins:stacking_status_effect",
    "min_stacks": 0,
    "max_stacks": 1,
    "duration_per_stack": 100,
    "tick_rate": 10,
    "effect": {
        "effect": "minecraft:speed",
        "duration": 100,
        "amplifier": 0,
        "show_particles": true,
        "show_icon": true
    }
}`
}