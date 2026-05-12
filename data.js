var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.209054405634737
      },
      "linkHotspots": [
        {
          "yaw": -1.2248618197060832,
          "pitch": 0.039269424618911586,
          "rotation": 3.141592653589793,
          "target": "1-living"
        },
        {
          "yaw": -0.7895066881215733,
          "pitch": 0.032907535068510185,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9412862927779838
      },
      "linkHotspots": [
        {
          "yaw": -0.7407724346712907,
          "pitch": 0.008448729496212337,
          "rotation": 4.71238898038469,
          "target": "0-foyer"
        },
        {
          "yaw": -2.2347918173002235,
          "pitch": 0.06253029157543111,
          "rotation": 1.5707963267948966,
          "target": "7-pantry"
        },
        {
          "yaw": -2.585622164177602,
          "pitch": 0.00457474077078146,
          "rotation": 3.141592653589793,
          "target": "6-mudroom"
        },
        {
          "yaw": 3.001808304651359,
          "pitch": -0.023135462235433835,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.535014674307213,
          "pitch": -0.004281528833061543,
          "rotation": 4.71238898038469,
          "target": "3-primary-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.007139881284057736,
        "pitch": 0.006153353168677711,
        "fov": 1.0937585257328428
      },
      "linkHotspots": [
        {
          "yaw": -0.008289437569672486,
          "pitch": 0.18405062651329374,
          "rotation": 3.141592653589793,
          "target": "1-living"
        },
        {
          "yaw": -0.460792483721832,
          "pitch": 0.04826602736542007,
          "rotation": 4.71238898038469,
          "target": "0-foyer"
        },
        {
          "yaw": -1.378622583147628,
          "pitch": 0.0977294525253889,
          "rotation": 4.71238898038469,
          "target": "7-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-primary-bedroom",
      "name": "Primary Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0000646535340063
      },
      "linkHotspots": [
        {
          "yaw": -2.3412291117418658,
          "pitch": 0.055956477625427326,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.470634703141034,
          "pitch": 0.03678612709622264,
          "rotation": 1.5707963267948966,
          "target": "4-primary-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-primary-bath",
      "name": "Primary Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.082492767553319,
          "pitch": 0.10176110177964048,
          "rotation": 3.141592653589793,
          "target": "3-primary-bedroom"
        },
        {
          "yaw": 0.0595218448649959,
          "pitch": 0.0868756825370447,
          "rotation": 4.71238898038469,
          "target": "5-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8749196671256279,
          "pitch": 0.019785227733299493,
          "rotation": 3.141592653589793,
          "target": "6-mudroom"
        },
        {
          "yaw": 1.0913890114709837,
          "pitch": 0.07060017850901446,
          "rotation": 1.5707963267948966,
          "target": "4-primary-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mudroom",
      "name": "Mudroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.004826025719196991,
        "pitch": 0,
        "fov": 1.1178680576445437
      },
      "linkHotspots": [
        {
          "yaw": -1.963077192039453,
          "pitch": 0.03023383874579544,
          "rotation": 3.141592653589793,
          "target": "5-laundry"
        },
        {
          "yaw": 1.161851707009557,
          "pitch": 0.0991146041342379,
          "rotation": 3.141592653589793,
          "target": "7-pantry"
        },
        {
          "yaw": 2.132518081670719,
          "pitch": 0.13167520496354967,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.0088972401366325,
          "pitch": 0.0648065255777599,
          "rotation": 3.141592653589793,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.45083615834671065,
          "pitch": 0.003997295532835565,
          "rotation": 3.141592653589793,
          "target": "5-laundry"
        },
        {
          "yaw": -1.7117489401189658,
          "pitch": 0.10872735515968124,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Kelly Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
