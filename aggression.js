module.exports = {
    name: "Aggression",
    category: "Passive",
    description: "The less HP you have, the more powerful your attacks become. When at half a heart, you become more powerful.",
    options: [
        {
            title: "Aggression Amount",
            question: "How much damage do you want to deal at low health? (0 = Level 1)",
            placeholder: "{damage_delt}",
            example: "0",
        },
    ],
    json: `{
   "name":"{name}",
   "description":"{description}",
   "type":"origins:multiple",
   "1":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":20
      }
   },
   "2":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":18
      }
   },
   "3":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":16
      }
   },
   "4":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":14
      }
   },
   "5":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":12
      }
   },
   "6":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":10
      }
   },
   "7":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":8
      }
   },
   "8":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":6
      }
   },
   "9":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":4
      }
   },
   "10":{
      "type":"origins:conditioned_attribute",
      "modifier":{
         "attribute":"minecraft:generic.attack_damage",
         "operation":"multiply_base",
         "value":{damage_delt},
         "name":"Increased attack"
      },
      "tick_rate":5,
      "condition":{
         "type":"origins:health",
         "comparison":"<",
         "compare_to":2
      }
   }
}`
}
