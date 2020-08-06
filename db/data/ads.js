db.ads.drop();
db.ads.createIndex({ id: 1 }, { unique: true });
db.ads.insert({
  "id": 1,
  "description": "Me lo quitan de las manos!",
  "type": "CHALET",
  "imageIds": [],
  "score": 0
});
db.ads.insert({
  "id": 2,
  "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
  "type": "PISO",
  "imageIds": [
    4
  ],
  "score": 40
});
db.ads.insert({
  "id": 3,
  "description": "",
  "size": 210,
  "type": "CHALET",
  "imageIds": [
    2
  ],
  "score": 0
});
db.ads.insert({
  "id": 4,
  "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
  "size": 130,
  "type": "PISO",
  "imageIds": [
    5
  ],
  "score": 90
});
db.ads.insert({
  "id": 5,
  "description": "Pisazo",
  "size": 115,
  "type": "PISO",
  "imageIds": [
    3,
    4
  ],
  "score": 45
});
db.ads.insert({
  "id": 6,
  "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
  "size": 290,
  "type": "CHALET",
  "imageIds": [
    1,
    7
  ],
  "score": 65
});
db.ads.insert({
  "id": 7,
  "description": "",
  "height": "180",
  "type": "FRIGORIFICO",
  "imageIds": [
    6
  ],
  "score": 40
});
db.ads.insert({
  "id": 8,
  "description": "Itv al día. Muy cuidado, Único dueño",
  "km": "63000",
  "color": "Rojo",
  "fabricant": "BMW",
  "type": "VEHICULO",
  "imageIds": [],
  "score": 5
});
db.ads.insert({
  "id": 9,
  "description": "Cuidado y excepcional es frigorífico AEG",
  "height": "180",
  "type": "FRIGORIFICO",
  "imageIds": [
    6
  ],
  "score": 55
});
db.ads.insert({
  "id": 10,
  "description": "Ocasión!. Nuevo Audi a3",
  "km": "0",
  "fabricant": "Audi",
  "type": "VEHICULO",
  "imageIds": [
    1,
    2,
    4
  ],
  "score": 15
});
db.ads.insert({
  "id": 11,
  "description": "Frigorífico Teka",
  "type": "FRIGORIFICO",
  "imageIds": [
    1,
    6
  ],
  "score": 5
});
db.adsequences.insert({ id: 11 });