# IoT_Firebase_Functions


IoTAPI is a simple API allowing developers to check `the status of our IoT devices` and use the data in real-time.

## Documentation Link 
https://iotfirebase.docs.apiary.io/


## Devices Collection [/questions]

### List All Devcies [GET]

+ Response 200 (application/json)

        {"features":
            [
                {"id":"11","geometry":{"type":"Point","coordinates":[121.57,25.019,0]},"created_at":{"_seconds":1660266996,"_nanoseconds":493000000},"event":"Cold","temp":30,"deviceName":"IoT_11"},
                {"id":"2","created_at":{"_seconds":1660267062,"_nanoseconds":875000000},"deviceName":"IoT_2","event":"Hungry","temp":"22","geometry":{"coordinates":[121.567,25.042,0],"type":"Point"}},
                {"id":"23","geometry":{"coordinates":[121.545,25.037,0],"type":"Point"},"deviceName":"IoT_23","event":"Cold","temp":11,"created_at":{"_seconds":1660267118,"_nanoseconds":282000000}},
                {"id":"3","deviceName":"IoT_3","event":"Cold","geometry":{"type":"Point","coordinates":[121.579,25.044,0]},"temp":3,"created_at":{"_seconds":1660267179,"_nanoseconds":684000000}}
            ]
        }

### Post a New Device [POST]

You may create your own device using this action. It takes a JSON
object containing "id", "deviceName", "temp", "geometry", "event"

+ Request (application/json)

        {
            "id": 17,
            "deviceName": "IoT_17",
            "temp": 17,
            "geometry": { "type": "Point", "coordinates": [-151.5129, 63.1016, 0.0] },
            "event": "Windy"
        }

+ Response 201 (application/json)

    + Headers

            

    + Body

            {
                "message": "Added Succesfully"
            }
            
## One Device Operation [/post/{device_id}]

### List One Devcie [GET]

+ Response 200 (application/json)

        {
            "features":{"id":"3","geometry":{"coordinates":[121.579,25.044,0],"type":"Point"},"temp":3,"deviceName":"IoT_3","event":"Cold","created_at":{"_seconds":1660267179,"_nanoseconds":684000000}}
        }
        
### Update Specific Device [PUT]

+ Request (application/json)

        {
            "deviceName": "IoT_14",
            "temp": 14,
            "geometry": { "type": "Point", "coordinates": [-151.5129, 63.1016, 0.0] },
            "event": "Hot"
        }

+ Response 200 (application/json)

        {
            "message": "???????????????",
            "OriginalPost": {
                "_fieldsProto": {
                    "temp": {
                        "integerValue": "13",
                        "valueType": "integerValue"
                    },
                    "event": {
                        "stringValue": "Cold",
                        "valueType": "stringValue"
                    },
                    "created_at": {
                        "timestampValue": {
                            "seconds": "1660637161",
                            "nanos": 659000000
                        },
                        "valueType": "timestampValue"
                    },
                    "geometry": {
                        "mapValue": {
                            "fields": {
                                "type": {
                                    "stringValue": "Point",
                                    "valueType": "stringValue"
                                },
                                "coordinates": {
                                    "arrayValue": {
                                        "values": [
                                            {
                                                "doubleValue": -151.5129,
                                                "valueType": "doubleValue"
                                            },
                                            {
                                                "doubleValue": 63.1016,
                                                "valueType": "doubleValue"
                                            },
                                            {
                                                "integerValue": "0",
                                                "valueType": "integerValue"
                                            }
                                        ]
                                    },
                                    "valueType": "arrayValue"
                                }
                            }
                        },
                        "valueType": "mapValue"
                    },
                    "deviceName": {
                        "stringValue": "IoT_13",
                        "valueType": "stringValue"
                    }
                },
                "_ref": {
                    "_firestore": {
                        "projectId": "iot-cloud-functions-a3398"
                    },
                    "_path": {
                        "segments": [
                            "devices",
                            "13"
                        ]
                    },
                    "_converter": {}
                },
                "_serializer": {
                    "allowUndefined": false
                },
                "_readTime": {
                    "_seconds": 1660638038,
                    "_nanoseconds": 282347000
                },
                "_createTime": {
                    "_seconds": 1660637165,
                    "_nanoseconds": 587393000
                },
                "_updateTime": {
                    "_seconds": 1660637165,
                    "_nanoseconds": 587393000
                }
            },
            "UpdatedPost": {
                "deviceName": "IoT_14",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.5129,
                        63.1016,
                        0
                    ]
                },
                "temp": 14,
                "event": "Hot",
                "created_at": "2022-08-16T08:20:38.292Z"
            }
        }
        
        
### Update Specific Device [DELETE]

+ Response 200  (application/json)
    
            {
                "message": "???????????????"
            }
