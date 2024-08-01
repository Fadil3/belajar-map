export interface Root {
  type: string
  features: Feature[]
}

export interface Feature {
  properties: Properties
  geometry: Geometry
  type: string
}

export interface Properties {
  pond_uuid_lele: string
  pond_index?: string | null
  pond_area_m2: number
  geohash: string
  status: number
  pond_type?: string | null
  pond_latitude: number
  pond_longitude: number
  last_updated: string
  pond_uuid?: string | null
  img_url: string
  sub_district: string
  district: string
  province: string
  country: string
  is_annotated: boolean
}

export interface Geometry {
  coordinates: number[][][]
  type: string
}



export const dataJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "pond_uuid_lele": "68968ab8-16bf-47d6-9d97-29eed403373a",
        "pond_index": null,
        "pond_area_m2": 3330,
        "geohash": "qqfpvmy8pfjn",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6373478614608,
        "pond_longitude": 104.30247885954942,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302328,
              -5.637005
            ],
            [
              104.302314,
              -5.637018
            ],
            [
              104.302151,
              -5.637178
            ],
            [
              104.302151,
              -5.637285
            ],
            [
              104.30226,
              -5.637391
            ],
            [
              104.30226,
              -5.637405
            ],
            [
              104.302369,
              -5.637511
            ],
            [
              104.302437,
              -5.637605
            ],
            [
              104.302464,
              -5.637645
            ],
            [
              104.302545,
              -5.637725
            ],
            [
              104.302613,
              -5.637712
            ],
            [
              104.302681,
              -5.637632
            ],
            [
              104.302722,
              -5.637605
            ],
            [
              104.302803,
              -5.637498
            ],
            [
              104.30279,
              -5.637405
            ],
            [
              104.302681,
              -5.637271
            ],
            [
              104.302613,
              -5.637178
            ],
            [
              104.302545,
              -5.637111
            ],
            [
              104.302477,
              -5.637031
            ],
            [
              104.30245,
              -5.637005
            ],
            [
              104.302328,
              -5.637005
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "052e0377-9995-443d-b140-a05e0e4adc25",
        "pond_index": null,
        "pond_area_m2": 3173,
        "geohash": "qqfpvqm0vyk1",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6344505057557575,
        "pond_longitude": 104.30033163115924,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300264,
              -5.634123
            ],
            [
              104.300196,
              -5.63419
            ],
            [
              104.300087,
              -5.634297
            ],
            [
              104.300033,
              -5.634363
            ],
            [
              104.300033,
              -5.63447
            ],
            [
              104.300074,
              -5.634523
            ],
            [
              104.300141,
              -5.634603
            ],
            [
              104.30025,
              -5.634737
            ],
            [
              104.300386,
              -5.63479
            ],
            [
              104.300427,
              -5.63475
            ],
            [
              104.300535,
              -5.634643
            ],
            [
              104.300617,
              -5.634577
            ],
            [
              104.300644,
              -5.634443
            ],
            [
              104.300562,
              -5.634363
            ],
            [
              104.300454,
              -5.634217
            ],
            [
              104.300386,
              -5.634137
            ],
            [
              104.300372,
              -5.634123
            ],
            [
              104.300264,
              -5.634123
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "8a684650-4a25-485a-927c-3a30df44d54a",
        "pond_index": null,
        "pond_area_m2": 3056,
        "geohash": "qqfpvmtgbprp",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.638049008349989,
        "pond_longitude": 104.30111897626087,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301078,
              -5.637752
            ],
            [
              104.301038,
              -5.637792
            ],
            [
              104.300983,
              -5.637818
            ],
            [
              104.300875,
              -5.637898
            ],
            [
              104.300807,
              -5.637925
            ],
            [
              104.300807,
              -5.638045
            ],
            [
              104.300902,
              -5.638165
            ],
            [
              104.301011,
              -5.638312
            ],
            [
              104.301146,
              -5.638365
            ],
            [
              104.301187,
              -5.638339
            ],
            [
              104.301269,
              -5.638272
            ],
            [
              104.301364,
              -5.638205
            ],
            [
              104.301432,
              -5.638138
            ],
            [
              104.301391,
              -5.637992
            ],
            [
              104.301323,
              -5.637898
            ],
            [
              104.301323,
              -5.637885
            ],
            [
              104.301187,
              -5.637752
            ],
            [
              104.301078,
              -5.637752
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "033a1877-bac0-4913-9c15-4b3e2a0e65dd",
        "pond_index": null,
        "pond_area_m2": 3205,
        "geohash": "qqfpvmww0p61",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.637663792722293,
        "pond_longitude": 104.30214200900366,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301988,
              -5.637325
            ],
            [
              104.301975,
              -5.637338
            ],
            [
              104.301893,
              -5.637418
            ],
            [
              104.301839,
              -5.637471
            ],
            [
              104.301825,
              -5.637485
            ],
            [
              104.301825,
              -5.637605
            ],
            [
              104.301907,
              -5.637685
            ],
            [
              104.301934,
              -5.637725
            ],
            [
              104.302043,
              -5.637832
            ],
            [
              104.30207,
              -5.637885
            ],
            [
              104.302151,
              -5.637992
            ],
            [
              104.302233,
              -5.638018
            ],
            [
              104.302328,
              -5.637965
            ],
            [
              104.302409,
              -5.637898
            ],
            [
              104.302477,
              -5.637832
            ],
            [
              104.302409,
              -5.637672
            ],
            [
              104.302301,
              -5.637538
            ],
            [
              104.302206,
              -5.637445
            ],
            [
              104.302151,
              -5.637365
            ],
            [
              104.302111,
              -5.637325
            ],
            [
              104.301988,
              -5.637325
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "ab99487c-16b7-4fd9-b083-932ece2b0cdc",
        "pond_index": null,
        "pond_area_m2": 966,
        "geohash": "qqfpvrjmftr0",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.62947794500476,
        "pond_longitude": 104.30053964457508,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30045540255347,
              -5.629320096416682
            ],
            [
              104.30042949720529,
              -5.629362784266632
            ],
            [
              104.30036905166737,
              -5.6294652346052025
            ],
            [
              104.30041222711043,
              -5.629550609873553
            ],
            [
              104.30048994233145,
              -5.629618910282754
            ],
            [
              104.30051584767962,
              -5.629644522857803
            ],
            [
              104.3006367383437,
              -5.629635985129362
            ],
            [
              104.30070581872316,
              -5.629533534820886
            ],
            [
              104.30067127894517,
              -5.629431084494352
            ],
            [
              104.30067127894517,
              -5.629422546762776
            ],
            [
              104.3005849280591,
              -5.629337171475618
            ],
            [
              104.30056765796422,
              -5.629303021357242
            ],
            [
              104.30055038786935,
              -5.629285946297303
            ],
            [
              104.30045540255347,
              -5.629320096416682
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "ae3db969-21ad-4f87-84d1-009dd63ab3ad",
        "pond_index": null,
        "pond_area_m2": 3369,
        "geohash": "qqfpvmz7bru8",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636674259459154,
        "pond_longitude": 104.30318627707693,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302993,
              -5.636364
            ],
            [
              104.302939,
              -5.636418
            ],
            [
              104.302858,
              -5.636484
            ],
            [
              104.302858,
              -5.636604
            ],
            [
              104.302912,
              -5.636671
            ],
            [
              104.302993,
              -5.636751
            ],
            [
              104.30302,
              -5.636804
            ],
            [
              104.303129,
              -5.636911
            ],
            [
              104.303238,
              -5.637045
            ],
            [
              104.30336,
              -5.636991
            ],
            [
              104.303496,
              -5.636858
            ],
            [
              104.303537,
              -5.636791
            ],
            [
              104.303482,
              -5.636684
            ],
            [
              104.303387,
              -5.636591
            ],
            [
              104.303279,
              -5.636484
            ],
            [
              104.303224,
              -5.636418
            ],
            [
              104.303143,
              -5.636324
            ],
            [
              104.303129,
              -5.636324
            ],
            [
              104.303116,
              -5.636311
            ],
            [
              104.302993,
              -5.636364
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "7dbf37ea-13fe-4d82-84b1-7fbe2bea07ae",
        "pond_index": null,
        "pond_area_m2": 3891,
        "geohash": "qqfpvqnh6x8w",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.635215477048721,
        "pond_longitude": 104.30156076846188,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301513,
              -5.63487
            ],
            [
              104.301459,
              -5.634924
            ],
            [
              104.301323,
              -5.63503
            ],
            [
              104.301228,
              -5.635097
            ],
            [
              104.301228,
              -5.63527
            ],
            [
              104.301241,
              -5.635284
            ],
            [
              104.301337,
              -5.635377
            ],
            [
              104.301391,
              -5.635457
            ],
            [
              104.301459,
              -5.635537
            ],
            [
              104.301472,
              -5.635551
            ],
            [
              104.301567,
              -5.635604
            ],
            [
              104.301635,
              -5.635551
            ],
            [
              104.301649,
              -5.635524
            ],
            [
              104.30173,
              -5.635444
            ],
            [
              104.30192,
              -5.635257
            ],
            [
              104.30192,
              -5.635204
            ],
            [
              104.301839,
              -5.635097
            ],
            [
              104.301758,
              -5.63499
            ],
            [
              104.301649,
              -5.634884
            ],
            [
              104.301635,
              -5.63487
            ],
            [
              104.301513,
              -5.63487
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "a85c33e5-ce87-4a89-b7f9-4fd5b7955c10",
        "pond_index": null,
        "pond_area_m2": 3765,
        "geohash": "qqfpvmve3sdf",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6367771155651365,
        "pond_longitude": 104.30083433899283,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300739,
              -5.636418
            ],
            [
              104.300725,
              -5.636431
            ],
            [
              104.300644,
              -5.636511
            ],
            [
              104.300603,
              -5.636524
            ],
            [
              104.300522,
              -5.636604
            ],
            [
              104.300522,
              -5.636764
            ],
            [
              104.300576,
              -5.636858
            ],
            [
              104.300657,
              -5.636938
            ],
            [
              104.300698,
              -5.637005
            ],
            [
              104.300793,
              -5.637138
            ],
            [
              104.300929,
              -5.637138
            ],
            [
              104.301146,
              -5.636925
            ],
            [
              104.30116,
              -5.636778
            ],
            [
              104.301092,
              -5.636684
            ],
            [
              104.300943,
              -5.636538
            ],
            [
              104.300888,
              -5.636444
            ],
            [
              104.300861,
              -5.636418
            ],
            [
              104.300739,
              -5.636418
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "30413b6e-cc9b-43de-8ac3-64b92068834c",
        "pond_index": null,
        "pond_area_m2": 2567,
        "geohash": "qqfpvmv1r3e5",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6371363969686845,
        "pond_longitude": 104.30039460898499,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300359,
              -5.636871
            ],
            [
              104.300264,
              -5.636938
            ],
            [
              104.300155,
              -5.637005
            ],
            [
              104.300141,
              -5.637031
            ],
            [
              104.300141,
              -5.637205
            ],
            [
              104.300169,
              -5.637245
            ],
            [
              104.30025,
              -5.637351
            ],
            [
              104.300332,
              -5.637431
            ],
            [
              104.30044,
              -5.637405
            ],
            [
              104.300535,
              -5.637311
            ],
            [
              104.30059,
              -5.637258
            ],
            [
              104.300698,
              -5.637178
            ],
            [
              104.300671,
              -5.637098
            ],
            [
              104.300562,
              -5.636965
            ],
            [
              104.300495,
              -5.636885
            ],
            [
              104.300454,
              -5.636858
            ],
            [
              104.30044,
              -5.636844
            ],
            [
              104.300359,
              -5.636871
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "daba473f-dce5-4fed-9571-ba886420b8c3",
        "pond_index": null,
        "pond_area_m2": 1393,
        "geohash": "qqfpvqht5fth",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.635113849231925,
        "pond_longitude": 104.29956048893071,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299381,
              -5.634897
            ],
            [
              104.299381,
              -5.635044
            ],
            [
              104.299435,
              -5.635097
            ],
            [
              104.29949,
              -5.635204
            ],
            [
              104.299571,
              -5.63539
            ],
            [
              104.29972,
              -5.635337
            ],
            [
              104.299748,
              -5.635324
            ],
            [
              104.299748,
              -5.635217
            ],
            [
              104.299707,
              -5.635137
            ],
            [
              104.299639,
              -5.635044
            ],
            [
              104.299585,
              -5.63495
            ],
            [
              104.29953,
              -5.634844
            ],
            [
              104.29953,
              -5.63483
            ],
            [
              104.299517,
              -5.634817
            ],
            [
              104.299381,
              -5.634897
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "a84e047e-a58b-46e8-8776-082a38b4fcfb",
        "pond_index": null,
        "pond_area_m2": 3114,
        "geohash": "qqfpvqt2th6m",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.633130271605157,
        "pond_longitude": 104.3006402794627,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Lampung Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300522,
              -5.632856
            ],
            [
              104.300495,
              -5.632896
            ],
            [
              104.300427,
              -5.632949
            ],
            [
              104.300304,
              -5.633069
            ],
            [
              104.300359,
              -5.633176
            ],
            [
              104.300413,
              -5.633229
            ],
            [
              104.300481,
              -5.633323
            ],
            [
              104.300508,
              -5.633336
            ],
            [
              104.300576,
              -5.633416
            ],
            [
              104.300712,
              -5.633443
            ],
            [
              104.30082,
              -5.633363
            ],
            [
              104.300875,
              -5.633309
            ],
            [
              104.30097,
              -5.633176
            ],
            [
              104.300902,
              -5.633083
            ],
            [
              104.300888,
              -5.633056
            ],
            [
              104.30082,
              -5.632976
            ],
            [
              104.30078,
              -5.632923
            ],
            [
              104.300698,
              -5.632843
            ],
            [
              104.300671,
              -5.632803
            ],
            [
              104.300657,
              -5.632789
            ],
            [
              104.300522,
              -5.632856
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "f0127971-bddb-4fb2-ac52-aff25789d026",
        "pond_index": null,
        "pond_area_m2": 3254,
        "geohash": "qqfpvqt57s66",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.632658593777239,
        "pond_longitude": 104.30023259015972,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Lampung Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300141,
              -5.632362
            ],
            [
              104.300128,
              -5.632376
            ],
            [
              104.300046,
              -5.632416
            ],
            [
              104.299924,
              -5.632536
            ],
            [
              104.299924,
              -5.632669
            ],
            [
              104.299938,
              -5.632696
            ],
            [
              104.300019,
              -5.632776
            ],
            [
              104.300087,
              -5.632856
            ],
            [
              104.300141,
              -5.632909
            ],
            [
              104.300209,
              -5.633003
            ],
            [
              104.300291,
              -5.632989
            ],
            [
              104.300399,
              -5.632883
            ],
            [
              104.300481,
              -5.632816
            ],
            [
              104.300549,
              -5.632736
            ],
            [
              104.300549,
              -5.632629
            ],
            [
              104.300454,
              -5.632536
            ],
            [
              104.300413,
              -5.632469
            ],
            [
              104.300332,
              -5.632402
            ],
            [
              104.300291,
              -5.632376
            ],
            [
              104.300277,
              -5.632362
            ],
            [
              104.300141,
              -5.632362
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "fb2fdf9d-31ad-49e2-92d2-f5d7e7f8dddb",
        "pond_index": null,
        "pond_area_m2": 656,
        "geohash": "qqfpvrm6rz46",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.628695675927263,
        "pond_longitude": 104.30075854116703,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30066264369187,
              -5.628611480316083
            ],
            [
              104.30061946824883,
              -5.628722468529047
            ],
            [
              104.30072308881803,
              -5.628841994155726
            ],
            [
              104.30076626426107,
              -5.62885906912693
            ],
            [
              104.30084397989386,
              -5.628765156321109
            ],
            [
              104.30090442543175,
              -5.62870539335028
            ],
            [
              104.30084397989386,
              -5.628602942776021
            ],
            [
              104.30081807495742,
              -5.628560254972046
            ],
            [
              104.30079216919749,
              -5.628534642450999
            ],
            [
              104.30066264369187,
              -5.628611480316083
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "edfb6d35-c1d5-4840-80c4-b3d131b4025b",
        "pond_index": null,
        "pond_area_m2": 1392,
        "geohash": "qqfpvrhf0479",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630137592257344,
        "pond_longitude": 104.29974080805741,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29965234211276,
              -5.629951873670367
            ],
            [
              104.29960916708147,
              -5.630037249070788
            ],
            [
              104.29957462647998,
              -5.630097011701135
            ],
            [
              104.29958326173329,
              -5.63019946211384
            ],
            [
              104.29960916708147,
              -5.630242149695656
            ],
            [
              104.29966961220764,
              -5.630336062364618
            ],
            [
              104.29977323277683,
              -5.630421437708603
            ],
            [
              104.29981640821988,
              -5.630318987538577
            ],
            [
              104.2998768537578,
              -5.630225074663305
            ],
            [
              104.29992002878907,
              -5.630122624255115
            ],
            [
              104.29988548859934,
              -5.630054324108657
            ],
            [
              104.29980777337832,
              -5.629934799036591
            ],
            [
              104.29975596268197,
              -5.6298750361860135
            ],
            [
              104.29974732784041,
              -5.629866498664508
            ],
            [
              104.29965234211276,
              -5.629951873670367
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "6782c177-9269-49c2-9e3f-584850b29909",
        "pond_index": null,
        "pond_area_m2": 3268,
        "geohash": "qqfpvmwhrgq3",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.637985695494952,
        "pond_longitude": 104.30179370656634,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301635,
              -5.637658
            ],
            [
              104.301622,
              -5.637658
            ],
            [
              104.301445,
              -5.637832
            ],
            [
              104.301459,
              -5.637898
            ],
            [
              104.301554,
              -5.638005
            ],
            [
              104.301608,
              -5.638085
            ],
            [
              104.301717,
              -5.638192
            ],
            [
              104.301771,
              -5.638259
            ],
            [
              104.301839,
              -5.638325
            ],
            [
              104.301948,
              -5.638325
            ],
            [
              104.302097,
              -5.638178
            ],
            [
              104.302138,
              -5.638072
            ],
            [
              104.302029,
              -5.637938
            ],
            [
              104.301948,
              -5.637858
            ],
            [
              104.301839,
              -5.637752
            ],
            [
              104.301812,
              -5.637712
            ],
            [
              104.301744,
              -5.637645
            ],
            [
              104.301635,
              -5.637658
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "cca6a729-34fd-4a3a-ac03-5e6af17e8410",
        "pond_index": null,
        "pond_area_m2": 1445,
        "geohash": "qqfpvrm33v65",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.628876473467757,
        "pond_longitude": 104.30050067584166,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30042086195198,
              -5.628679780835627
            ],
            [
              104.3004035918571,
              -5.62870539335028
            ],
            [
              104.30033451147764,
              -5.6288163814435395
            ],
            [
              104.3002999712879,
              -5.628918831980186
            ],
            [
              104.30037768692068,
              -5.629004207532337
            ],
            [
              104.30043813204685,
              -5.629098120401315
            ],
            [
              104.30053311777449,
              -5.629098120401315
            ],
            [
              104.30060219856571,
              -5.629021282600553
            ],
            [
              104.30071445397647,
              -5.628901756908962
            ],
            [
              104.30066264369187,
              -5.628799306471081
            ],
            [
              104.3006367383437,
              -5.628765156321109
            ],
            [
              104.30056765796422,
              -5.628688318272786
            ],
            [
              104.3005417530278,
              -5.628654168116294
            ],
            [
              104.30052448293293,
              -5.6286370930372955
            ],
            [
              104.30042086195198,
              -5.628679780835627
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "1ff1e762-78c0-44e2-9e3f-fcc63edd40f7",
        "pond_index": null,
        "pond_area_m2": 1052,
        "geohash": "qqfpvquvf056",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630878957061581,
        "pond_longitude": 104.29982635516588,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29973869299886,
              -5.630745863534966
            ],
            [
              104.29971278723892,
              -5.63079708858461
            ],
            [
              104.29967824746093,
              -5.630891000960346
            ],
            [
              104.29967824746093,
              -5.631010526446405
            ],
            [
              104.29972142249223,
              -5.631036138756577
            ],
            [
              104.2998423131563,
              -5.631078826480487
            ],
            [
              104.29992002878907,
              -5.63099345143663
            ],
            [
              104.29997183907368,
              -5.630873926354159
            ],
            [
              104.29997183907368,
              -5.630728788517414
            ],
            [
              104.29986821850447,
              -5.630694638480808
            ],
            [
              104.2998509484096,
              -5.630694638480808
            ],
            [
              104.2998423131563,
              -5.630686100767791
            ],
            [
              104.29973869299886,
              -5.630745863534966
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "bc8c17e4-aaf8-4ad1-9c72-36ba25c49c8f",
        "pond_index": null,
        "pond_area_m2": 593,
        "geohash": "qqfpvqsw5dc8",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.632194911757144,
        "pond_longitude": 104.29954500571627,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29940192553131,
              -5.632103326842538
            ],
            [
              104.29941919562619,
              -5.632205777105067
            ],
            [
              104.29954008629025,
              -5.632308226942432
            ],
            [
              104.29963507201789,
              -5.6323338396025004
            ],
            [
              104.29970415239735,
              -5.632222852079217
            ],
            [
              104.2996955175558,
              -5.632222852079217
            ],
            [
              104.29952281660712,
              -5.632052102315149
            ],
            [
              104.29940192553131,
              -5.632103326842538
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "7f5b31da-ccb1-432e-b22d-dfab2814110b",
        "pond_index": null,
        "pond_area_m2": 1068,
        "geohash": "qqfpvrjpsvdw",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.629175191692582,
        "pond_longitude": 104.30028658498703,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30017044578229,
              -5.629038357668265
            ],
            [
              104.30012727033925,
              -5.62911519546677
            ],
            [
              104.30017044578229,
              -5.629251796175919
            ],
            [
              104.30023952616175,
              -5.629345709004897
            ],
            [
              104.30033451147764,
              -5.629405471909898
            ],
            [
              104.3004035918571,
              -5.629285946297303
            ],
            [
              104.30045540255347,
              -5.62919203345867
            ],
            [
              104.30039495701556,
              -5.629098120401315
            ],
            [
              104.3002913360346,
              -5.62895298212113
            ],
            [
              104.30028270119304,
              -5.628944444586082
            ],
            [
              104.30017044578229,
              -5.629038357668265
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "79030cc0-3093-4208-b3b5-3b1657d54c5e",
        "pond_index": null,
        "pond_area_m2": 1287,
        "geohash": "qqfpvrhguwe7",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.629813982215252,
        "pond_longitude": 104.29993376404623,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.2998423131563,
              -5.629635985129362
            ],
            [
              104.29977323277683,
              -5.62973843562333
            ],
            [
              104.2997905028717,
              -5.629892111228649
            ],
            [
              104.29985958325116,
              -5.629977486637847
            ],
            [
              104.29993729888395,
              -5.630079936664519
            ],
            [
              104.30001501451672,
              -5.629994561473921
            ],
            [
              104.30008409489619,
              -5.629883573503843
            ],
            [
              104.30011000024437,
              -5.629832348577233
            ],
            [
              104.30007545964288,
              -5.629746973146716
            ],
            [
              104.29999774442186,
              -5.629635985129362
            ],
            [
              104.29995456939056,
              -5.629567684925718
            ],
            [
              104.29994593413726,
              -5.629559147399696
            ],
            [
              104.2998423131563,
              -5.629635985129362
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "dadb34fe-711e-4950-aae9-f0e59d50dd7d",
        "pond_index": null,
        "pond_area_m2": 1354,
        "geohash": "qqfpvrjhnwm8",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.629772831482471,
        "pond_longitude": 104.30036568200975,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30025679625662,
              -5.629653060382569
            ],
            [
              104.3001963507187,
              -5.629755510669977
            ],
            [
              104.3001963507187,
              -5.629892111228649
            ],
            [
              104.30033451147764,
              -5.630011636513044
            ],
            [
              104.30042949720529,
              -5.629951873670367
            ],
            [
              104.30049857758476,
              -5.62984088589569
            ],
            [
              104.30056765796422,
              -5.6297213605761804
            ],
            [
              104.30056765796422,
              -5.62970428552853
            ],
            [
              104.30048994233145,
              -5.629627447604346
            ],
            [
              104.30036905166737,
              -5.629533534820886
            ],
            [
              104.30036041641407,
              -5.629524997294364
            ],
            [
              104.30025679625662,
              -5.629653060382569
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "403505f8-1eee-4af3-b238-aa8af1634472",
        "pond_index": null,
        "pond_area_m2": 1078,
        "geohash": "qqfpvrj43bk1",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630105383538182,
        "pond_longitude": 104.30015994188716,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30005818954803,
              -5.629986023954171
            ],
            [
              104.30001501451672,
              -5.630062861830953
            ],
            [
              104.29998910916855,
              -5.6301055494228045
            ],
            [
              104.30002364977004,
              -5.63019946211384
            ],
            [
              104.3000927301495,
              -5.630284837477889
            ],
            [
              104.3001877154654,
              -5.630318987538577
            ],
            [
              104.30025679625662,
              -5.630190924800649
            ],
            [
              104.30032587663608,
              -5.630088474386439
            ],
            [
              104.30034314673095,
              -5.630037249070788
            ],
            [
              104.30026543109818,
              -5.629968948914296
            ],
            [
              104.3001877154654,
              -5.62990918606723
            ],
            [
              104.30017908062383,
              -5.629900648749778
            ],
            [
              104.30005818954803,
              -5.629986023954171
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "676012e1-65ab-47ce-b041-eb88fc185b0f",
        "pond_index": null,
        "pond_area_m2": 1319,
        "geohash": "qqfpvrjjbz7n",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.629466068772326,
        "pond_longitude": 104.30011561888367,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30003228461159,
              -5.6292774087671456
            ],
            [
              104.29998910916855,
              -5.629354246534053
            ],
            [
              104.29995456939056,
              -5.629422546762776
            ],
            [
              104.29995456939056,
              -5.629542072347283
            ],
            [
              104.3000409198649,
              -5.629653060382569
            ],
            [
              104.30017908062383,
              -5.629695748004517
            ],
            [
              104.30024816100331,
              -5.629576222655162
            ],
            [
              104.3002913360346,
              -5.629507922240945
            ],
            [
              104.30025679625662,
              -5.629396934381496
            ],
            [
              104.30021362081357,
              -5.629320096416682
            ],
            [
              104.30015317527565,
              -5.629234721114475
            ],
            [
              104.3001359051808,
              -5.629217646052529
            ],
            [
              104.30003228461159,
              -5.6292774087671456
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "3aab03b7-f2de-4132-9bc4-3c55f33f5fc1",
        "pond_index": null,
        "pond_area_m2": 937,
        "geohash": "qqfpvrhbmwy7",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630413476601915,
        "pond_longitude": 104.29998051306737,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29988548859934,
              -5.6302933747897
            ],
            [
              104.2998509484096,
              -5.630370212625847
            ],
            [
              104.29983367831474,
              -5.630515350552143
            ],
            [
              104.29992866363062,
              -5.630575113336876
            ],
            [
              104.30004955470646,
              -5.630575113336876
            ],
            [
              104.30011863508592,
              -5.630447050451838
            ],
            [
              104.30015317527565,
              -5.630387287653934
            ],
            [
              104.30006682480132,
              -5.630301912508484
            ],
            [
              104.29999774442186,
              -5.630216537350494
            ],
            [
              104.29998910916855,
              -5.6302079996304535
            ],
            [
              104.29988548859934,
              -5.6302933747897
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "1ae7de98-80da-44af-82e7-a618b09ac0d0",
        "pond_index": null,
        "pond_area_m2": 667,
        "geohash": "qqfpvqsmptns",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.632353858630966,
        "pond_longitude": 104.29938021314615,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29930694000954,
              -5.632188702130417
            ],
            [
              104.29922922437676,
              -5.632265539715942
            ],
            [
              104.29927239961393,
              -5.6323850641050495
            ],
            [
              104.29929830475623,
              -5.6324021394810275
            ],
            [
              104.2993414799934,
              -5.632444826697482
            ],
            [
              104.29943646572104,
              -5.632513126562962
            ],
            [
              104.29944510097437,
              -5.632521664249133
            ],
            [
              104.29953145144869,
              -5.6324362894172815
            ],
            [
              104.29954008629025,
              -5.632393601793101
            ],
            [
              104.29944510097437,
              -5.632299689253126
            ],
            [
              104.29943646572104,
              -5.632299689253126
            ],
            [
              104.2993673851357,
              -5.632222852079217
            ],
            [
              104.29935011524671,
              -5.632197239821355
            ],
            [
              104.2993414799934,
              -5.632188702130417
            ],
            [
              104.29930694000954,
              -5.632188702130417
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "084d5146-fe06-499d-9541-c0d77316cd5d",
        "pond_index": null,
        "pond_area_m2": 750,
        "geohash": "qqfpvrm97b6u",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.628903157450761,
        "pond_longitude": 104.30093081930481,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.3008526147354,
              -5.62877369365524
            ],
            [
              104.30078353435594,
              -5.628850531692278
            ],
            [
              104.3008526147354,
              -5.62899566979449
            ],
            [
              104.30090442543175,
              -5.629072507802188
            ],
            [
              104.3009648705579,
              -5.629089582868398
            ],
            [
              104.30101668084252,
              -5.628987132260069
            ],
            [
              104.30107712638043,
              -5.628910294444637
            ],
            [
              104.30102531609583,
              -5.628807844008262
            ],
            [
              104.30095623571636,
              -5.628748081143595
            ],
            [
              104.30094760046306,
              -5.628739543503762
            ],
            [
              104.3008526147354,
              -5.62877369365524
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "48c23c84-be1a-4cf6-803c-a2ea10bb6d6f",
        "pond_index": null,
        "pond_area_m2": 467,
        "geohash": "qqfpvqsxp4vb",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.6320232363675995,
        "pond_longitude": 104.29970096504245,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29960053182816,
              -5.6318984270774815
            ],
            [
              104.29957462647998,
              -5.632000876969042
            ],
            [
              104.2996868823025,
              -5.632103326842538
            ],
            [
              104.29978186803014,
              -5.6321801644393545
            ],
            [
              104.29983367831474,
              -5.632069177293814
            ],
            [
              104.29975596268197,
              -5.63198380239547
            ],
            [
              104.29966961220764,
              -5.631889889382153
            ],
            [
              104.29966097736607,
              -5.6318813520937985
            ],
            [
              104.29960053182816,
              -5.6318984270774815
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "66c64098-8710-459b-a759-5524197ff786",
        "pond_index": null,
        "pond_area_m2": 1024,
        "geohash": "qqfpvqmkpnn8",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.633894200253451,
        "pond_longitude": 104.3007317991227,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300645373597,
              -5.63379374877516
            ],
            [
              104.3006367383437,
              -5.63379374877516
            ],
            [
              104.30055902312267,
              -5.633870586148381
            ],
            [
              104.30047267264833,
              -5.633938886253319
            ],
            [
              104.30047267264833,
              -5.633990111021429
            ],
            [
              104.30099941074765,
              -5.633990111021429
            ],
            [
              104.3008871553369,
              -5.633844973556069
            ],
            [
              104.30087852008359,
              -5.63381936136973
            ],
            [
              104.30080080445082,
              -5.633742523989733
            ],
            [
              104.30078353435594,
              -5.633733986728605
            ],
            [
              104.30077489951438,
              -5.633725449467351
            ],
            [
              104.300645373597,
              -5.63379374877516
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "d47f72bd-0484-48e8-82e2-1fe3d7280fbc",
        "pond_index": null,
        "pond_area_m2": 1248,
        "geohash": "qqfpvrjryb5q",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.629161752898267,
        "pond_longitude": 104.30071696882729,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30068854904005,
              -5.628970057394401
            ],
            [
              104.30053311777449,
              -5.62912373299931
            ],
            [
              104.30055038786935,
              -5.62924325844171
            ],
            [
              104.30057629280579,
              -5.629260333706454
            ],
            [
              104.300645373597,
              -5.629337171475618
            ],
            [
              104.30067991378674,
              -5.629388396649416
            ],
            [
              104.30081807495742,
              -5.629303021357242
            ],
            [
              104.3008871553369,
              -5.629209108317817
            ],
            [
              104.30087852008359,
              -5.629089582868398
            ],
            [
              104.30078353435594,
              -5.62895298212113
            ],
            [
              104.30077489951438,
              -5.628944444586082
            ],
            [
              104.30068854904005,
              -5.628970057394401
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "e850058d-bf3c-4d06-978d-f065175ba684",
        "pond_index": null,
        "pond_area_m2": 253,
        "geohash": "qqfpvqkebsze",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.6339432537989635,
        "pond_longitude": 104.29942444413378,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29931557505697,
              -5.633930348180881
            ],
            [
              104.29929830475623,
              -5.633990111021429
            ],
            [
              104.29955735638511,
              -5.633990111021429
            ],
            [
              104.29949691084721,
              -5.633904736405403
            ],
            [
              104.29945373581592,
              -5.633862048889135
            ],
            [
              104.29931557505697,
              -5.633930348180881
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "bd47d95a-b4a7-445b-8fbc-a163ddc25b0b",
        "pond_index": null,
        "pond_area_m2": 309,
        "geohash": "qqfpvqq5cuv2",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.633943795582964,
        "pond_longitude": 104.30153483897072,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30143116353108,
              -5.633921810922513
            ],
            [
              104.3013879884998,
              -5.633947423511436
            ],
            [
              104.30137071799317,
              -5.633990111021429
            ],
            [
              104.30169021536584,
              -5.633990111021429
            ],
            [
              104.30162977023967,
              -5.633904736405403
            ],
            [
              104.3015952296382,
              -5.633870586148381
            ],
            [
              104.30158659479663,
              -5.633862048889135
            ],
            [
              104.30143116353108,
              -5.633921810922513
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "b600517a-a35c-4fff-ac14-0537796ee8f6",
        "pond_index": null,
        "pond_area_m2": 139,
        "geohash": "qqfpvrh8k51n",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630433034234434,
        "pond_longitude": 104.29956574783003,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29950554610052,
              -5.630387287653934
            ],
            [
              104.29951418135383,
              -5.6304726629903925
            ],
            [
              104.29958326173329,
              -5.630506812836494
            ],
            [
              104.29963507201789,
              -5.630404362885069
            ],
            [
              104.29961780192302,
              -5.630387287653934
            ],
            [
              104.29960916708147,
              -5.630378749936402
            ],
            [
              104.29950554610052,
              -5.630387287653934
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "0a22a4c8-8821-4ff5-a6a6-a9adcc9ca158",
        "pond_index": null,
        "pond_area_m2": 3379,
        "geohash": "qqfpvqj5dv55",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.63535808715225,
        "pond_longitude": 104.30020149010103,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300209,
              -5.63503
            ],
            [
              104.300196,
              -5.635044
            ],
            [
              104.299992,
              -5.635244
            ],
            [
              104.299897,
              -5.635297
            ],
            [
              104.29987,
              -5.63531
            ],
            [
              104.29987,
              -5.63543
            ],
            [
              104.299938,
              -5.635511
            ],
            [
              104.299978,
              -5.635551
            ],
            [
              104.300046,
              -5.635644
            ],
            [
              104.30006,
              -5.635657
            ],
            [
              104.300169,
              -5.635711
            ],
            [
              104.300236,
              -5.635657
            ],
            [
              104.300413,
              -5.635484
            ],
            [
              104.30044,
              -5.635457
            ],
            [
              104.300522,
              -5.635377
            ],
            [
              104.300508,
              -5.635257
            ],
            [
              104.30044,
              -5.63515
            ],
            [
              104.300345,
              -5.635044
            ],
            [
              104.300332,
              -5.63503
            ],
            [
              104.300209,
              -5.63503
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "3a7f335c-4c43-4098-9ce0-62dfdf9e5d15",
        "pond_index": null,
        "pond_area_m2": 438,
        "geohash": "qqfpvqskh67g",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.632540506614972,
        "pond_longitude": 104.29923712137546,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299134238855,
              -5.632453364384655
            ],
            [
              104.29909106361784,
              -5.63254727689979
            ],
            [
              104.29917741429804,
              -5.632581426827511
            ],
            [
              104.29928966991467,
              -5.632658264361095
            ],
            [
              104.29938465543644,
              -5.632589964105579
            ],
            [
              104.299376020389,
              -5.632564351863902
            ],
            [
              104.29922922437676,
              -5.6324362894172815
            ],
            [
              104.29922058953521,
              -5.632427751729857
            ],
            [
              104.299134238855,
              -5.632453364384655
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "598302cd-f13e-4388-bbad-9ea3f1370b2d",
        "pond_index": null,
        "pond_area_m2": 2687,
        "geohash": "qqfpvmvh4xfy",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636630323952533,
        "pond_longitude": 104.30019048554695,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300304,
              -5.636298
            ],
            [
              104.300236,
              -5.636378
            ],
            [
              104.300169,
              -5.636458
            ],
            [
              104.300046,
              -5.636578
            ],
            [
              104.300033,
              -5.636578
            ],
            [
              104.299883,
              -5.636724
            ],
            [
              104.29987,
              -5.636751
            ],
            [
              104.29987,
              -5.636858
            ],
            [
              104.299951,
              -5.636938
            ],
            [
              104.300046,
              -5.636991
            ],
            [
              104.300074,
              -5.636951
            ],
            [
              104.300155,
              -5.636871
            ],
            [
              104.300209,
              -5.636831
            ],
            [
              104.300345,
              -5.636698
            ],
            [
              104.300413,
              -5.636618
            ],
            [
              104.300508,
              -5.636498
            ],
            [
              104.300481,
              -5.636391
            ],
            [
              104.300454,
              -5.636324
            ],
            [
              104.300386,
              -5.636258
            ],
            [
              104.300304,
              -5.636298
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "febe8942-2eb9-4b9e-850e-748316425f69",
        "pond_index": null,
        "pond_area_m2": 3385,
        "geohash": "qqfpvqjxyzb5",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634613721552735,
        "pond_longitude": 104.30105577716317,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301038,
              -5.634297
            ],
            [
              104.301024,
              -5.634297
            ],
            [
              104.30082,
              -5.634497
            ],
            [
              104.300793,
              -5.63451
            ],
            [
              104.300739,
              -5.634563
            ],
            [
              104.300739,
              -5.634683
            ],
            [
              104.300807,
              -5.634777
            ],
            [
              104.300834,
              -5.634817
            ],
            [
              104.300902,
              -5.634897
            ],
            [
              104.300929,
              -5.63491
            ],
            [
              104.301024,
              -5.63495
            ],
            [
              104.301065,
              -5.634924
            ],
            [
              104.30116,
              -5.634857
            ],
            [
              104.301255,
              -5.634763
            ],
            [
              104.301269,
              -5.634763
            ],
            [
              104.30135,
              -5.634683
            ],
            [
              104.301364,
              -5.634683
            ],
            [
              104.301404,
              -5.634577
            ],
            [
              104.301323,
              -5.634497
            ],
            [
              104.301269,
              -5.634417
            ],
            [
              104.301214,
              -5.63435
            ],
            [
              104.301146,
              -5.634283
            ],
            [
              104.301038,
              -5.634297
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "83b0cc7b-8f44-4b7f-8ae5-fc049e6bb871",
        "pond_index": null,
        "pond_area_m2": 137,
        "geohash": "qqfpvquxmufs",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.630595644411157,
        "pond_longitude": 104.29964305155336,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29959189698661,
              -5.630549500395736
            ],
            [
              104.29957462647998,
              -5.630566575622105
            ],
            [
              104.29960916708147,
              -5.630660488442193
            ],
            [
              104.29964370685946,
              -5.630660488442193
            ],
            [
              104.29972142249223,
              -5.630583650644423
            ],
            [
              104.29971278723892,
              -5.630566575622105
            ],
            [
              104.2996955175558,
              -5.630549500395736
            ],
            [
              104.29959189698661,
              -5.630549500395736
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "437202e4-3ea9-48e8-8d74-ea98538f4b92",
        "pond_index": null,
        "pond_area_m2": 921,
        "geohash": "qqfpvqs7ehj9",
        "status": 0,
        "pond_type": "shrimp",
        "pond_latitude": -5.632617188673312,
        "pond_longitude": 104.29918578235727,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "s3://efi-data/x-ai/datasets/lele-terbang/restapi/staging/-5.630608000000002_104.299381_17-pond.jpg",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": false
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29910833350682,
              -5.632478977038324
            ],
            [
              104.29905652322222,
              -5.632581426827511
            ],
            [
              104.2990306182858,
              -5.632709489242138
            ],
            [
              104.29910833350682,
              -5.632760714118665
            ],
            [
              104.29919468398116,
              -5.632811938583575
            ],
            [
              104.29927239961393,
              -5.632871701539193
            ],
            [
              104.29929830475623,
              -5.632829013947007
            ],
            [
              104.29922922437676,
              -5.632709489242138
            ],
            [
              104.29912560360168,
              -5.632589964105579
            ],
            [
              104.2992378594242,
              -5.632624114437891
            ],
            [
              104.29935875029415,
              -5.632624114437891
            ],
            [
              104.29931557505697,
              -5.632496052004444
            ],
            [
              104.29930694000954,
              -5.632496052004444
            ],
            [
              104.29922058953521,
              -5.63241067716883
            ],
            [
              104.29922058953521,
              -5.6324021394810275
            ],
            [
              104.2992119542819,
              -5.632393601793101
            ],
            [
              104.29910833350682,
              -5.632478977038324
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "7dfa1e2f-a4bf-4637-a548-24a523f43bbd",
        "pond_index": null,
        "pond_area_m2": 3576,
        "geohash": "qqfpvmz404b7",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6370008949304165,
        "pond_longitude": 104.3028265104702,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302681,
              -5.636644
            ],
            [
              104.302572,
              -5.636751
            ],
            [
              104.302491,
              -5.636818
            ],
            [
              104.302477,
              -5.636925
            ],
            [
              104.302559,
              -5.636991
            ],
            [
              104.302586,
              -5.637031
            ],
            [
              104.302681,
              -5.637151
            ],
            [
              104.302749,
              -5.637245
            ],
            [
              104.302898,
              -5.637391
            ],
            [
              104.302966,
              -5.637365
            ],
            [
              104.303061,
              -5.637271
            ],
            [
              104.303156,
              -5.637178
            ],
            [
              104.30317,
              -5.637071
            ],
            [
              104.303116,
              -5.637018
            ],
            [
              104.30302,
              -5.636925
            ],
            [
              104.303007,
              -5.636885
            ],
            [
              104.302898,
              -5.636751
            ],
            [
              104.302803,
              -5.636644
            ],
            [
              104.30279,
              -5.636631
            ],
            [
              104.302681,
              -5.636644
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "5ca77a69-bd3c-4e3b-b721-d4af34f04f9b",
        "pond_index": null,
        "pond_area_m2": 3254,
        "geohash": "qqfpvqp0eyu9",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.6358639604078435,
        "pond_longitude": 104.30299292891297,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302871,
              -5.635564
            ],
            [
              104.302858,
              -5.635577
            ],
            [
              104.302817,
              -5.635617
            ],
            [
              104.302695,
              -5.635737
            ],
            [
              104.302695,
              -5.635897
            ],
            [
              104.302776,
              -5.635977
            ],
            [
              104.30279,
              -5.636004
            ],
            [
              104.302858,
              -5.636084
            ],
            [
              104.302925,
              -5.636178
            ],
            [
              104.30298,
              -5.636204
            ],
            [
              104.303116,
              -5.636137
            ],
            [
              104.303292,
              -5.635964
            ],
            [
              104.303319,
              -5.635857
            ],
            [
              104.303211,
              -5.635724
            ],
            [
              104.30317,
              -5.635684
            ],
            [
              104.303088,
              -5.635604
            ],
            [
              104.303048,
              -5.635577
            ],
            [
              104.303034,
              -5.635564
            ],
            [
              104.302871,
              -5.635564
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "b9ff9d4b-4ec8-4c4e-b2ad-01f2ac3e6769",
        "pond_index": null,
        "pond_area_m2": 2898,
        "geohash": "qqfpvqhr6mhf",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634714592050137,
        "pond_longitude": 104.2991524297141,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299069,
              -5.63439
            ],
            [
              104.299055,
              -5.634403
            ],
            [
              104.298987,
              -5.63451
            ],
            [
              104.298906,
              -5.634603
            ],
            [
              104.298892,
              -5.634617
            ],
            [
              104.298892,
              -5.63475
            ],
            [
              104.298933,
              -5.634804
            ],
            [
              104.299014,
              -5.634924
            ],
            [
              104.299069,
              -5.635017
            ],
            [
              104.299123,
              -5.63507
            ],
            [
              104.299245,
              -5.635017
            ],
            [
              104.299313,
              -5.634897
            ],
            [
              104.299422,
              -5.634777
            ],
            [
              104.299422,
              -5.63463
            ],
            [
              104.299381,
              -5.634603
            ],
            [
              104.299299,
              -5.634523
            ],
            [
              104.299299,
              -5.63451
            ],
            [
              104.299177,
              -5.63439
            ],
            [
              104.299069,
              -5.63439
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "b73ad4ac-1657-4a79-8eac-60af0958e4fb",
        "pond_index": null,
        "pond_area_m2": 3508,
        "geohash": "qqfpvqsc611n",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.633018650697465,
        "pond_longitude": 104.29982345877833,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Lampung Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299734,
              -5.632682
            ],
            [
              104.299571,
              -5.632843
            ],
            [
              104.29949,
              -5.632923
            ],
            [
              104.29949,
              -5.633029
            ],
            [
              104.299707,
              -5.633243
            ],
            [
              104.299761,
              -5.633309
            ],
            [
              104.299829,
              -5.633389
            ],
            [
              104.299897,
              -5.633363
            ],
            [
              104.300074,
              -5.633189
            ],
            [
              104.300155,
              -5.633096
            ],
            [
              104.300182,
              -5.633029
            ],
            [
              104.300101,
              -5.632949
            ],
            [
              104.300033,
              -5.632896
            ],
            [
              104.299951,
              -5.632789
            ],
            [
              104.299911,
              -5.632749
            ],
            [
              104.299843,
              -5.632682
            ],
            [
              104.299734,
              -5.632682
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "0a31493f-5798-4fd7-ab21-6afa66a36f95",
        "pond_index": null,
        "pond_area_m2": 1678,
        "geohash": "qqfpvqhd7gmz",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.635581466037402,
        "pond_longitude": 104.29956145182604,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299367,
              -5.635457
            ],
            [
              104.299354,
              -5.635471
            ],
            [
              104.299245,
              -5.635484
            ],
            [
              104.299232,
              -5.635497
            ],
            [
              104.299232,
              -5.635604
            ],
            [
              104.299299,
              -5.635644
            ],
            [
              104.299422,
              -5.635671
            ],
            [
              104.29949,
              -5.635697
            ],
            [
              104.29953,
              -5.635711
            ],
            [
              104.299666,
              -5.635711
            ],
            [
              104.29968,
              -5.635724
            ],
            [
              104.299843,
              -5.635724
            ],
            [
              104.299856,
              -5.635604
            ],
            [
              104.299802,
              -5.635497
            ],
            [
              104.299775,
              -5.635471
            ],
            [
              104.299761,
              -5.635457
            ],
            [
              104.299367,
              -5.635457
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "b25e527c-2c5d-48bf-830a-23ecdbee1a56",
        "pond_index": null,
        "pond_area_m2": 2619,
        "geohash": "qqfpvqkx1b96",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.633408345494579,
        "pond_longitude": 104.29946952338572,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299367,
              -5.633123
            ],
            [
              104.299313,
              -5.633203
            ],
            [
              104.299272,
              -5.633269
            ],
            [
              104.299218,
              -5.633363
            ],
            [
              104.299218,
              -5.633496
            ],
            [
              104.29934,
              -5.633616
            ],
            [
              104.299422,
              -5.633683
            ],
            [
              104.299503,
              -5.63371
            ],
            [
              104.299612,
              -5.63363
            ],
            [
              104.29972,
              -5.633523
            ],
            [
              104.299748,
              -5.63351
            ],
            [
              104.299734,
              -5.633376
            ],
            [
              104.299585,
              -5.633229
            ],
            [
              104.29949,
              -5.633109
            ],
            [
              104.299476,
              -5.633069
            ],
            [
              104.299462,
              -5.633056
            ],
            [
              104.299367,
              -5.633123
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "84e62231-715d-4a6a-b9b9-5136d15b32ed",
        "pond_index": null,
        "pond_area_m2": 3150,
        "geohash": "qqfpvqnsrfp0",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.635246038237785,
        "pond_longitude": 104.30248134740594,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302396,
              -5.634937
            ],
            [
              104.302369,
              -5.63495
            ],
            [
              104.302301,
              -5.63503
            ],
            [
              104.30226,
              -5.635057
            ],
            [
              104.302151,
              -5.635164
            ],
            [
              104.302192,
              -5.635257
            ],
            [
              104.30226,
              -5.635337
            ],
            [
              104.302369,
              -5.635471
            ],
            [
              104.302464,
              -5.635591
            ],
            [
              104.302545,
              -5.635564
            ],
            [
              104.302599,
              -5.635537
            ],
            [
              104.302695,
              -5.635444
            ],
            [
              104.302776,
              -5.63535
            ],
            [
              104.30279,
              -5.635324
            ],
            [
              104.302749,
              -5.635204
            ],
            [
              104.302681,
              -5.635097
            ],
            [
              104.302572,
              -5.63499
            ],
            [
              104.302572,
              -5.634977
            ],
            [
              104.302518,
              -5.634937
            ],
            [
              104.302504,
              -5.634924
            ],
            [
              104.302396,
              -5.634937
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "83cce08d-9c01-4b72-bbb3-44a65d9486af",
        "pond_index": null,
        "pond_area_m2": 3327,
        "geohash": "qqfpvqn6new5",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.635623629058266,
        "pond_longitude": 104.302083078522,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302002,
              -5.635297
            ],
            [
              104.301839,
              -5.635457
            ],
            [
              104.301771,
              -5.635524
            ],
            [
              104.301771,
              -5.635644
            ],
            [
              104.301798,
              -5.635657
            ],
            [
              104.30188,
              -5.635764
            ],
            [
              104.301934,
              -5.635844
            ],
            [
              104.302016,
              -5.635924
            ],
            [
              104.302124,
              -5.635977
            ],
            [
              104.302233,
              -5.635871
            ],
            [
              104.302301,
              -5.635817
            ],
            [
              104.302369,
              -5.635737
            ],
            [
              104.302409,
              -5.635617
            ],
            [
              104.302301,
              -5.635484
            ],
            [
              104.302219,
              -5.635404
            ],
            [
              104.302165,
              -5.63535
            ],
            [
              104.302111,
              -5.635297
            ],
            [
              104.302002,
              -5.635297
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "27cd6d7c-8400-4fff-8b83-9d624da0d642",
        "pond_index": null,
        "pond_area_m2": 3063,
        "geohash": "qqfpvqmn7z9g",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.633499410079408,
        "pond_longitude": 104.30024283300769,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Lampung Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300209,
              -5.633163
            ],
            [
              104.300101,
              -5.633269
            ],
            [
              104.300087,
              -5.633269
            ],
            [
              104.299938,
              -5.633416
            ],
            [
              104.299938,
              -5.633523
            ],
            [
              104.300033,
              -5.633616
            ],
            [
              104.300101,
              -5.63371
            ],
            [
              104.300141,
              -5.63375
            ],
            [
              104.300209,
              -5.63383
            ],
            [
              104.300318,
              -5.63379
            ],
            [
              104.300332,
              -5.63379
            ],
            [
              104.300562,
              -5.633563
            ],
            [
              104.300549,
              -5.63347
            ],
            [
              104.300467,
              -5.633389
            ],
            [
              104.300291,
              -5.633216
            ],
            [
              104.300291,
              -5.633189
            ],
            [
              104.300264,
              -5.633163
            ],
            [
              104.300209,
              -5.633163
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "fa38f939-c5fc-48c0-b438-970805bd5182",
        "pond_index": null,
        "pond_area_m2": 3315,
        "geohash": "qqfpvqku67w0",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.633864685801633,
        "pond_longitude": 104.29984070673493,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299788,
              -5.633536
            ],
            [
              104.299734,
              -5.63359
            ],
            [
              104.299625,
              -5.633696
            ],
            [
              104.299517,
              -5.633776
            ],
            [
              104.299503,
              -5.633896
            ],
            [
              104.299517,
              -5.633896
            ],
            [
              104.299761,
              -5.634137
            ],
            [
              104.299829,
              -5.634217
            ],
            [
              104.299938,
              -5.63415
            ],
            [
              104.300019,
              -5.634083
            ],
            [
              104.300182,
              -5.633923
            ],
            [
              104.300182,
              -5.633856
            ],
            [
              104.300074,
              -5.633763
            ],
            [
              104.299965,
              -5.63363
            ],
            [
              104.299911,
              -5.63355
            ],
            [
              104.299897,
              -5.633536
            ],
            [
              104.299788,
              -5.633536
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "960a76a3-9314-4fb9-b37d-fd84be302179",
        "pond_index": null,
        "pond_area_m2": 3324,
        "geohash": "qqfpvmtqxzq9",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6375780424873305,
        "pond_longitude": 104.30076405436041,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300685,
              -5.637271
            ],
            [
              104.300671,
              -5.637285
            ],
            [
              104.300549,
              -5.637378
            ],
            [
              104.300495,
              -5.637431
            ],
            [
              104.300467,
              -5.637445
            ],
            [
              104.300467,
              -5.637618
            ],
            [
              104.300522,
              -5.637712
            ],
            [
              104.30063,
              -5.637818
            ],
            [
              104.30063,
              -5.637832
            ],
            [
              104.300766,
              -5.637912
            ],
            [
              104.300875,
              -5.637845
            ],
            [
              104.30097,
              -5.637778
            ],
            [
              104.301051,
              -5.637712
            ],
            [
              104.301106,
              -5.637605
            ],
            [
              104.301051,
              -5.637552
            ],
            [
              104.300997,
              -5.637458
            ],
            [
              104.300902,
              -5.637338
            ],
            [
              104.300861,
              -5.637285
            ],
            [
              104.300848,
              -5.637271
            ],
            [
              104.300685,
              -5.637271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "29e57ac2-fbab-4113-9c75-aa8f38756dd1",
        "pond_index": null,
        "pond_area_m2": 3854,
        "geohash": "qqfpvmvrv51g",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636012625346686,
        "pond_longitude": 104.3006396100832,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300576,
              -5.635671
            ],
            [
              104.300549,
              -5.635697
            ],
            [
              104.30044,
              -5.635777
            ],
            [
              104.300427,
              -5.635777
            ],
            [
              104.300304,
              -5.635897
            ],
            [
              104.300304,
              -5.636004
            ],
            [
              104.300359,
              -5.636071
            ],
            [
              104.300427,
              -5.636178
            ],
            [
              104.300467,
              -5.636231
            ],
            [
              104.300522,
              -5.636324
            ],
            [
              104.30063,
              -5.636404
            ],
            [
              104.300712,
              -5.636351
            ],
            [
              104.300902,
              -5.636164
            ],
            [
              104.300943,
              -5.636111
            ],
            [
              104.300997,
              -5.635977
            ],
            [
              104.300888,
              -5.635871
            ],
            [
              104.300888,
              -5.635857
            ],
            [
              104.300698,
              -5.635671
            ],
            [
              104.300576,
              -5.635671
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "08b9a4a9-5f67-414d-8649-5fefb731d80b",
        "pond_index": null,
        "pond_area_m2": 3280,
        "geohash": "qqfpvqm7p7py",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634080882172305,
        "pond_longitude": 104.30074440324958,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.300671,
              -5.633763
            ],
            [
              104.300576,
              -5.633856
            ],
            [
              104.300413,
              -5.63399
            ],
            [
              104.300427,
              -5.634097
            ],
            [
              104.300522,
              -5.63419
            ],
            [
              104.300562,
              -5.63423
            ],
            [
              104.30063,
              -5.63431
            ],
            [
              104.300644,
              -5.634337
            ],
            [
              104.300725,
              -5.634417
            ],
            [
              104.300793,
              -5.634417
            ],
            [
              104.300943,
              -5.634297
            ],
            [
              104.301038,
              -5.634203
            ],
            [
              104.301051,
              -5.634043
            ],
            [
              104.300943,
              -5.633936
            ],
            [
              104.300943,
              -5.633923
            ],
            [
              104.300848,
              -5.63383
            ],
            [
              104.300793,
              -5.633763
            ],
            [
              104.30078,
              -5.63375
            ],
            [
              104.300671,
              -5.633763
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "561edcfa-d220-4891-90cf-68a26f00f9b0",
        "pond_index": null,
        "pond_area_m2": 3915,
        "geohash": "qqfpvmvvehb2",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.63638992518363,
        "pond_longitude": 104.30123871688676,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301133,
              -5.636044
            ],
            [
              104.301065,
              -5.636111
            ],
            [
              104.300902,
              -5.636271
            ],
            [
              104.300902,
              -5.636378
            ],
            [
              104.300997,
              -5.636511
            ],
            [
              104.301065,
              -5.636604
            ],
            [
              104.301174,
              -5.636711
            ],
            [
              104.301282,
              -5.636778
            ],
            [
              104.301309,
              -5.636764
            ],
            [
              104.301404,
              -5.636671
            ],
            [
              104.301472,
              -5.636618
            ],
            [
              104.30154,
              -5.636524
            ],
            [
              104.301595,
              -5.636431
            ],
            [
              104.30154,
              -5.636351
            ],
            [
              104.301432,
              -5.636204
            ],
            [
              104.301323,
              -5.636057
            ],
            [
              104.301309,
              -5.636044
            ],
            [
              104.301133,
              -5.636044
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "909423f7-3588-4b96-b81a-2ae92c8f71f0",
        "pond_index": null,
        "pond_area_m2": 3130,
        "geohash": "qqfpvqkd0zgk",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634227434683888,
        "pond_longitude": 104.29942939167098,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29934,
              -5.63391
            ],
            [
              104.299218,
              -5.63403
            ],
            [
              104.299109,
              -5.634137
            ],
            [
              104.299177,
              -5.634297
            ],
            [
              104.299177,
              -5.63431
            ],
            [
              104.299381,
              -5.63451
            ],
            [
              104.299449,
              -5.63459
            ],
            [
              104.29953,
              -5.634523
            ],
            [
              104.299639,
              -5.634417
            ],
            [
              104.299761,
              -5.634297
            ],
            [
              104.299693,
              -5.634177
            ],
            [
              104.299585,
              -5.634043
            ],
            [
              104.299476,
              -5.633936
            ],
            [
              104.299476,
              -5.633923
            ],
            [
              104.299462,
              -5.63391
            ],
            [
              104.29934,
              -5.63391
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "948b1ffb-8781-4d26-83fb-8e1360176d49",
        "pond_index": null,
        "pond_area_m2": 3078,
        "geohash": "qqfpvmzmzv31",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636344183314031,
        "pond_longitude": 104.30350333462283,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.303333,
              -5.636044
            ],
            [
              104.303319,
              -5.636057
            ],
            [
              104.303183,
              -5.636178
            ],
            [
              104.303183,
              -5.636284
            ],
            [
              104.303238,
              -5.636351
            ],
            [
              104.303333,
              -5.636444
            ],
            [
              104.303441,
              -5.636578
            ],
            [
              104.303537,
              -5.636671
            ],
            [
              104.303632,
              -5.636671
            ],
            [
              104.303808,
              -5.636498
            ],
            [
              104.303835,
              -5.636458
            ],
            [
              104.303767,
              -5.636324
            ],
            [
              104.303659,
              -5.636191
            ],
            [
              104.303645,
              -5.636191
            ],
            [
              104.303509,
              -5.636057
            ],
            [
              104.303496,
              -5.636057
            ],
            [
              104.303482,
              -5.636044
            ],
            [
              104.303333,
              -5.636044
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "a4945a95-35fa-459e-94fe-3523c2016ebe",
        "pond_index": null,
        "pond_area_m2": 3317,
        "geohash": "qqfpvqhyu1sj",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634818565789949,
        "pond_longitude": 104.29991337790706,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299843,
              -5.634497
            ],
            [
              104.299734,
              -5.634603
            ],
            [
              104.29968,
              -5.634657
            ],
            [
              104.299598,
              -5.634723
            ],
            [
              104.299598,
              -5.63483
            ],
            [
              104.299707,
              -5.63495
            ],
            [
              104.299761,
              -5.635044
            ],
            [
              104.299897,
              -5.635177
            ],
            [
              104.299992,
              -5.635124
            ],
            [
              104.300074,
              -5.635057
            ],
            [
              104.300101,
              -5.635017
            ],
            [
              104.300182,
              -5.63495
            ],
            [
              104.300236,
              -5.634804
            ],
            [
              104.300128,
              -5.63467
            ],
            [
              104.300128,
              -5.634657
            ],
            [
              104.299978,
              -5.63451
            ],
            [
              104.299965,
              -5.634497
            ],
            [
              104.299843,
              -5.634497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "a54342ae-ba38-4471-b15b-a97c57b82ed7",
        "pond_index": null,
        "pond_area_m2": 3544,
        "geohash": "qqfpvmypug69",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636011498326978,
        "pond_longitude": 104.30165993204616,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301567,
              -5.635671
            ],
            [
              104.301499,
              -5.635737
            ],
            [
              104.301486,
              -5.635764
            ],
            [
              104.301404,
              -5.635831
            ],
            [
              104.301337,
              -5.635897
            ],
            [
              104.301337,
              -5.636017
            ],
            [
              104.301432,
              -5.636111
            ],
            [
              104.301499,
              -5.636204
            ],
            [
              104.301499,
              -5.636218
            ],
            [
              104.301622,
              -5.636338
            ],
            [
              104.301703,
              -5.636391
            ],
            [
              104.301975,
              -5.636124
            ],
            [
              104.302002,
              -5.636031
            ],
            [
              104.30192,
              -5.635951
            ],
            [
              104.301907,
              -5.635937
            ],
            [
              104.301812,
              -5.635791
            ],
            [
              104.301758,
              -5.635737
            ],
            [
              104.30169,
              -5.635671
            ],
            [
              104.301567,
              -5.635671
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "0fccb446-666a-4fd5-9ece-580215c2e2ec",
        "pond_index": null,
        "pond_area_m2": 3226,
        "geohash": "qqfpvmtzv8tu",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.637399049033645,
        "pond_longitude": 104.30135319442694,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301282,
              -5.637071
            ],
            [
              104.301269,
              -5.637085
            ],
            [
              104.301065,
              -5.637285
            ],
            [
              104.301065,
              -5.637418
            ],
            [
              104.301119,
              -5.637485
            ],
            [
              104.301187,
              -5.637605
            ],
            [
              104.301214,
              -5.637645
            ],
            [
              104.301282,
              -5.637725
            ],
            [
              104.301432,
              -5.637712
            ],
            [
              104.30154,
              -5.637605
            ],
            [
              104.301567,
              -5.637592
            ],
            [
              104.301662,
              -5.637498
            ],
            [
              104.301649,
              -5.637391
            ],
            [
              104.301554,
              -5.637271
            ],
            [
              104.301486,
              -5.637178
            ],
            [
              104.301432,
              -5.637085
            ],
            [
              104.301404,
              -5.637071
            ],
            [
              104.301391,
              -5.637058
            ],
            [
              104.301282,
              -5.637071
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "e015f7d3-c2f5-4cc7-b3d4-307ae0412e9b",
        "pond_index": null,
        "pond_area_m2": 3488,
        "geohash": "qqfpvmy1zpmb",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.637020258566304,
        "pond_longitude": 104.30176076311275,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.30169,
              -5.636684
            ],
            [
              104.301676,
              -5.636698
            ],
            [
              104.301662,
              -5.636711
            ],
            [
              104.301459,
              -5.636911
            ],
            [
              104.301459,
              -5.636925
            ],
            [
              104.301445,
              -5.637031
            ],
            [
              104.301513,
              -5.637125
            ],
            [
              104.301554,
              -5.637191
            ],
            [
              104.301608,
              -5.637245
            ],
            [
              104.301676,
              -5.637338
            ],
            [
              104.301785,
              -5.637378
            ],
            [
              104.301812,
              -5.637365
            ],
            [
              104.302016,
              -5.637165
            ],
            [
              104.302083,
              -5.637085
            ],
            [
              104.30207,
              -5.636978
            ],
            [
              104.301975,
              -5.636858
            ],
            [
              104.301893,
              -5.636778
            ],
            [
              104.301825,
              -5.636698
            ],
            [
              104.301812,
              -5.636684
            ],
            [
              104.30169,
              -5.636684
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "ad7150f8-04a8-406f-ac4e-e2ea1488d4cc",
        "pond_index": null,
        "pond_area_m2": 3068,
        "geohash": "qqfpvmyy6wg9",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.636250325339766,
        "pond_longitude": 104.30259490399598,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302532,
              -5.635937
            ],
            [
              104.302518,
              -5.635951
            ],
            [
              104.302423,
              -5.636031
            ],
            [
              104.302341,
              -5.636111
            ],
            [
              104.302314,
              -5.636151
            ],
            [
              104.302314,
              -5.636284
            ],
            [
              104.302369,
              -5.636364
            ],
            [
              104.302437,
              -5.636458
            ],
            [
              104.302545,
              -5.636564
            ],
            [
              104.302654,
              -5.636564
            ],
            [
              104.302776,
              -5.636458
            ],
            [
              104.30283,
              -5.636404
            ],
            [
              104.302898,
              -5.636324
            ],
            [
              104.302912,
              -5.636284
            ],
            [
              104.302844,
              -5.636204
            ],
            [
              104.302776,
              -5.636084
            ],
            [
              104.302735,
              -5.636017
            ],
            [
              104.302654,
              -5.635937
            ],
            [
              104.302532,
              -5.635937
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "48cf93f0-869a-4a35-b1d0-9e75e935b6c4",
        "pond_index": null,
        "pond_area_m2": 3163,
        "geohash": "qqfpvqmv0u7k",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6337310938713285,
        "pond_longitude": 104.30114603812686,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Lampung Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301051,
              -5.633456
            ],
            [
              104.30097,
              -5.633523
            ],
            [
              104.300916,
              -5.63355
            ],
            [
              104.300834,
              -5.63363
            ],
            [
              104.300807,
              -5.633736
            ],
            [
              104.300916,
              -5.633843
            ],
            [
              104.300997,
              -5.63391
            ],
            [
              104.301065,
              -5.63399
            ],
            [
              104.301133,
              -5.634083
            ],
            [
              104.301228,
              -5.634016
            ],
            [
              104.301296,
              -5.63395
            ],
            [
              104.301432,
              -5.633843
            ],
            [
              104.301472,
              -5.633816
            ],
            [
              104.301472,
              -5.63371
            ],
            [
              104.301377,
              -5.633616
            ],
            [
              104.301377,
              -5.633603
            ],
            [
              104.301269,
              -5.633496
            ],
            [
              104.301269,
              -5.633483
            ],
            [
              104.301201,
              -5.633443
            ],
            [
              104.301187,
              -5.63343
            ],
            [
              104.301051,
              -5.633456
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "2e410a90-4f2e-43e1-89b1-a24dd8b82e60",
        "pond_index": null,
        "pond_area_m2": 3018,
        "geohash": "qqfpvqq43kut",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.634200384040455,
        "pond_longitude": 104.30151250300409,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301459,
              -5.63391
            ],
            [
              104.301391,
              -5.633976
            ],
            [
              104.301228,
              -5.634137
            ],
            [
              104.301228,
              -5.63431
            ],
            [
              104.301459,
              -5.634537
            ],
            [
              104.30154,
              -5.634483
            ],
            [
              104.301622,
              -5.634417
            ],
            [
              104.301676,
              -5.634377
            ],
            [
              104.301812,
              -5.634243
            ],
            [
              104.301825,
              -5.63419
            ],
            [
              104.301771,
              -5.634083
            ],
            [
              104.301744,
              -5.63403
            ],
            [
              104.301635,
              -5.633923
            ],
            [
              104.301622,
              -5.633923
            ],
            [
              104.301608,
              -5.63391
            ],
            [
              104.301459,
              -5.63391
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "d3f3ec50-fe50-49ee-97e6-32881943e2f0",
        "pond_index": null,
        "pond_area_m2": 3372,
        "geohash": "qqfpvmys1n0f",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.636640392106249,
        "pond_longitude": 104.30218328844818,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.302111,
              -5.636311
            ],
            [
              104.30188,
              -5.636538
            ],
            [
              104.30188,
              -5.636658
            ],
            [
              104.301893,
              -5.636671
            ],
            [
              104.301948,
              -5.636751
            ],
            [
              104.302043,
              -5.636871
            ],
            [
              104.302111,
              -5.636965
            ],
            [
              104.302165,
              -5.637005
            ],
            [
              104.302219,
              -5.636991
            ],
            [
              104.302518,
              -5.636698
            ],
            [
              104.302464,
              -5.636591
            ],
            [
              104.302369,
              -5.636458
            ],
            [
              104.302301,
              -5.636378
            ],
            [
              104.302274,
              -5.636324
            ],
            [
              104.30226,
              -5.636324
            ],
            [
              104.302246,
              -5.636311
            ],
            [
              104.302111,
              -5.636311
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "23b5353b-fced-4a9b-b493-f577e111490f",
        "pond_index": null,
        "pond_area_m2": 3539,
        "geohash": "qqfpvqnquymb",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.63479395299184,
        "pond_longitude": 104.30200767116328,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.301948,
              -5.634497
            ],
            [
              104.30188,
              -5.63455
            ],
            [
              104.301798,
              -5.634603
            ],
            [
              104.30169,
              -5.63471
            ],
            [
              104.301676,
              -5.634723
            ],
            [
              104.301676,
              -5.634844
            ],
            [
              104.301744,
              -5.634897
            ],
            [
              104.301825,
              -5.635004
            ],
            [
              104.301934,
              -5.63511
            ],
            [
              104.302029,
              -5.635164
            ],
            [
              104.302124,
              -5.63507
            ],
            [
              104.302192,
              -5.634977
            ],
            [
              104.302246,
              -5.634924
            ],
            [
              104.302355,
              -5.634844
            ],
            [
              104.302314,
              -5.634723
            ],
            [
              104.302246,
              -5.634643
            ],
            [
              104.302178,
              -5.63455
            ],
            [
              104.302124,
              -5.634497
            ],
            [
              104.30207,
              -5.634443
            ],
            [
              104.301948,
              -5.634497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "bff7eb5a-07a9-4240-b098-f9d7beaf3454",
        "pond_index": null,
        "pond_area_m2": 1206,
        "geohash": "qqfpvqhknh35",
        "status": 0,
        "pond_type": null,
        "pond_latitude": -5.635276250469682,
        "pond_longitude": 104.2993083916026,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.299164,
              -5.635164
            ],
            [
              104.299164,
              -5.635417
            ],
            [
              104.299191,
              -5.635444
            ],
            [
              104.299462,
              -5.635444
            ],
            [
              104.299476,
              -5.63543
            ],
            [
              104.299476,
              -5.63531
            ],
            [
              104.299367,
              -5.635097
            ],
            [
              104.299299,
              -5.63503
            ],
            [
              104.299164,
              -5.635164
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "pond_uuid_lele": "71db5870-7657-4925-95a3-05c78e542bac",
        "pond_index": null,
        "pond_area_m2": 5781,
        "geohash": "qqfpvmuydbt6",
        "status": 1,
        "pond_type": null,
        "pond_latitude": -5.6362407745178835,
        "pond_longitude": 104.29986119747112,
        "last_updated": "2024-01-31 06:13:00",
        "pond_uuid": null,
        "img_url": "x-ai/datasets/lele-terbang/prod-annotator/-5.635562911217482_104.3010432697228_17_Lampung_WestPesisirRegency_Bangkunat_2088.png",
        "sub_district": "Bangkunat",
        "district": "West Pesisir Regency",
        "province": "Lampung",
        "country": "Indonesia",
        "is_annotated": true
      },
      "geometry": {
        "coordinates": [
          [
            [
              104.29987,
              -5.635884
            ],
            [
              104.299856,
              -5.635897
            ],
            [
              104.299775,
              -5.635937
            ],
            [
              104.299666,
              -5.635977
            ],
            [
              104.299571,
              -5.636031
            ],
            [
              104.29949,
              -5.636084
            ],
            [
              104.299435,
              -5.636124
            ],
            [
              104.299435,
              -5.636338
            ],
            [
              104.29949,
              -5.636391
            ],
            [
              104.299598,
              -5.636524
            ],
            [
              104.299707,
              -5.636658
            ],
            [
              104.299802,
              -5.636711
            ],
            [
              104.300114,
              -5.636404
            ],
            [
              104.300169,
              -5.636364
            ],
            [
              104.300264,
              -5.636298
            ],
            [
              104.300304,
              -5.636231
            ],
            [
              104.300304,
              -5.636111
            ],
            [
              104.300223,
              -5.635991
            ],
            [
              104.300182,
              -5.635911
            ],
            [
              104.300155,
              -5.635884
            ],
            [
              104.29987,
              -5.635884
            ]
          ]
        ],
        "type": "Polygon"
      },
      "type": "Feature"
    }
  ]
}