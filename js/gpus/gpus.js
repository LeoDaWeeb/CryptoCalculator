let gpus = [
    {
        "name": "GTX 1060 6GB",
        "power": 90,
        "hashrate": 23,
        "hashratePerWatt": 0.255,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1070",
        "power": 120,
        "hashrate": 28,
        "hashratePerWatt": 0.233,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1070Ti",
        "power": 130,
        "hashrate": 30,
        "hashratePerWatt": 0.231,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1080",
        "power": 135,
        "hashrate": 37,
        "hashratePerWatt": 0.274,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1080Ti",
        "power": 170,
        "hashrate": 45,
        "hashratePerWatt": 0.264,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1660",
        "power": 60,
        "hashrate": 25,
        "hashratePerWatt": 0.416,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1660Ti",
        "power": 70,
        "hashrate": 30,
        "hashratePerWatt": 0.428,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "GTX 1660 Super",
        "power": 75,
        "hashrate": 32,
        "hashratePerWatt": 0.426,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2060",
        "power": 90,
        "hashrate": 32,
        "hashratePerWatt": 0.335,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2060 Super",
        "power": 125,
        "hashrate": 42,
        "hashratePerWatt": 0.336,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2070",
        "power": 125,
        "hashrate": 42,
        "hashratePerWatt": 0.336,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2070 Super",
        "power": 125,
        "hashrate": 43,
        "hashratePerWatt": 0.344,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2080",
        "power": 125,
        "hashrate": 43,
        "hashratePerWatt": 0.344,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2080 Super",
        "power": 140,
        "hashrate": 43,
        "hashratePerWatt": 0.307,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 2080Ti",
        "power": 180,
        "hashrate": 59,
        "hashratePerWatt": 0.327,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 3060",
        "power": 110,
        "hashrate": 48,
        "hashratePerWatt": 0.436,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 3060Ti",
        "power": 125,
        "hashrate": 58,
        "hashratePerWatt": 0.464,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 3070",
        "power": 125,
        "hashrate": 60,
        "hashratePerWatt": 0.479,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 3080",
        "power": 230,
        "hashrate": 98,
        "hashratePerWatt": 0.426,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RTX 3090",
        "power": 280,
        "hashrate": 120,
        "hashratePerWatt": 0.428,
        "image": "resources/images/nvidia.png"
    },
    {
        "name": "RX 470",
        "power": 110,
        "hashrate": 30,
        "hashratePerWatt": 0.273,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 480",
        "power": 90,
        "hashrate": 31,
        "hashratePerWatt": 0.344,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 570",
        "power": 90,
        "hashrate": 31,
        "hashratePerWatt": 0.344,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 580",
        "power": 95,
        "hashrate": 32,
        "hashratePerWatt": 0.337,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 590",
        "power": 90,
        "hashrate": 30,
        "hashratePerWatt": 0.333,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 5500XT",
        "power": 70,
        "hashrate": 26,
        "hashratePerWatt": 0.371,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 5600XT",
        "power": 95,
        "hashrate": 40,
        "hashratePerWatt": 0.421,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 5700",
        "power": 160,
        "hashrate": 53,
        "hashratePerWatt": 0.331,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 5700XT",
        "power": 140,
        "hashrate": 54,
        "hashratePerWatt": 0.386,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6600",
        "power": 60,
        "hashrate": 26,
        "hashratePerWatt": 0.433,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6600XT",
        "power": 60,
        "hashrate": 32,
        "hashratePerWatt": 0.533,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6700XT",
        "power": 170,
        "hashrate": 47,
        "hashratePerWatt": 0.276,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6800",
        "power": 175,
        "hashrate": 63,
        "hashratePerWatt": 0.360,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6800XT",
        "power": 190,
        "hashrate": 64,
        "hashratePerWatt": 0.337,
        "image": "resources/images/amd.png"
    },
    {
        "name": "RX 6900XT",
        "power": 220,
        "hashrate": 64,
        "hashratePerWatt": 0.291,
        "image": "resources/images/amd.png"
    },
    {
        "name": "Vega 56",
        "power": 165,
        "hashrate": 45,
        "hashratePerWatt": 0.273,
        "image": "resources/images/amd.png"
    },
    {
        "name": "Vega 64",
        "power": 175,
        "hashrate": 49,
        "hashratePerWatt": 0.280,
        "image": "resources/images/amd.png"
    },
    {
        "name": "Radeon VII",
        "power": 190,
        "hashrate": 95,
        "hashratePerWatt": 0.500,
        "image": "resources/images/amd.png"
    }
]

