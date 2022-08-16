const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();

admin.initializeApp();
app.use(cors({origin: true}));

// Post
app.post("/", async (req, res) => {
  const id = req.body.id;
  const deviceName = req.body.deviceName;
  const geometry = req.body.geometry;
  const temp = req.body.temp;
  const event = req.body.event;

  if (id == null || deviceName == null || geometry == null ||
    temp == null || event == null) {
    return res.status(400).send({"message": "Wrong Parameters"});
  }

  const post = {"deviceName": deviceName, "temp": temp, "geometry": geometry,
    "event": event, "created_at": new Date()};
  await admin.firestore().collection("devices").doc(id.toString()).set(post);
  res.status(201).send({"message": "Added Succesfully"});
});


// Put
app.put("/:id", async (req, res) => {
  const deviceName = req.body.deviceName;
  const geometry = req.body.geometry;
  const temp = req.body.temp;
  const event = req.body.event;
  const doc = await admin.firestore().collection("devices")
      .doc(req.params.id).get();

  if (!doc.exists) {
    return res.status(404).send({"message": "找不到裝置！"});
  } else if (deviceName == null || geometry == null ||
    temp == null || event == null) {
    return res.status(400).send({"message": "參數錯誤！"});
  }

  const post = {"deviceName": deviceName, "geometry": geometry, "temp": temp,
    "event": event, "created_at": new Date()};
  await admin.firestore().collection("devices").doc(req.params.id).update(post);
  res.status(200).send({"message": "修改成功！", "OriginalPost": doc,
    "UpdatedPost": post});
});

// Delete
app.delete("/:id", async (req, res) => {
  const doc = await admin.firestore().collection("devices")
      .doc(req.params.id).get();

  if (!doc.exists) {
    return res.status(404).send({"message": "找不到裝置！"});
  }

  await admin.firestore().collection("devices").doc(req.params.id).delete();
  res.status(200).send({"message": "刪除裝置！"});
});

// Select Devices
app.get("/", async (req, res) => {
  const devices = await admin.firestore().collection("devices").get();
  const result = [];
  devices.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    result.push({"id": id, ...data});
  });
  res.status(200).send({"features": result});
});

// Select One
app.get("/:id", async (req, res) => {
  const doc = await admin.firestore().collection("devices")
      .doc(req.params.id).get();

  if (!doc.exists) {
    return res.status(404).send({"message": "找不到裝置！"});
  }

  res.status(200).send({"features": {"id": doc.id, ...doc.data()}});
});

exports.post= functions.https.onRequest(app);
