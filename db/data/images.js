db.images.drop();
db.images.createIndex({ id: 1 }, { unique: true });
db.images.insert({
  "id": 1,
  "url": "https://lh3.googleusercontent.com/V3r1ufJ12GoxxqfiS7KOVOKj08Zbc6URkdHUK6N_kSyLAX1RE4z2URDga0w99jo5sKRPuKS70YvXHFDAHfEb6K1HVvsZ8NnOjyFT-Xhw",
  "quality": "SD"
});
db.images.insert({
  "id": 2,
  "url": "https://lh3.googleusercontent.com/jkguSbkaV4tkU3OEvKo5ebAhX9_rAoSwxwU2g3pS5v8winD3Mnl8ZT4WYThAwqOvjm8h2RO_EG57z6Yfbv-Ek_NdWULEdD7OqCkYCdOANQ",
  "quality": "HD"
});
db.images.insert({
  "id": 3,
  "url": "https://lh3.googleusercontent.com/rGJ18bTK_00_GhL77Y1UAp0evMTdXKp4jCpz4RZLRu9X-dPSFCjZRdvnvm7lp281Yxr4JH-Dw0Px4Q84Xg-I24seLKr__bXmmsFzl8lQ",
  "quality": "SD"
});
db.images.insert({
  "id": 4,
  "url": "https://lh3.googleusercontent.com/LeSa57xyAqiF_IlnidwRIXoNrN9j-nB0Xoe_L3iCsVsfleMc-q0aKLGzYznYXqRh_hwj8wmnQDQt99IEUGoCTnKhhCvc_R-Dz9Iz00M9BA",
  "quality": "HD"
});
db.images.insert({
  "id": 5,
  "url": "https://lh3.googleusercontent.com/BsxXJrp7yIPs5lS_jvQMGitJcTCeMF9EDf-Yhm-Nf9ZH3uZD-zN8y4aZNsz5WnyMJHn34nasVuE32GDas8Z1TjS9-fnu3mCRss9nwdE",
  "quality": "SD"
});
db.images.insert({
  "id": 6,
  "url": "https://lh3.googleusercontent.com/F55IPfWuPQIFB47ku6jszZuXn9JXAN-ZdkRhTBPqdV9lQNPaMBKUpp-mp8U-AGaHqk66Wy6Vss8-Dhg6DfLLHmpp1fVkpNWKryJDEzwI",
  "quality": "SD"
});
db.images.insert({
  "id": 7,
  "url": "https://lh3.googleusercontent.com/LqR6QuhSSiOwlPrKITL9AEyG2gqAPYo7SFEkyGTD9E5Tr_oTYhUsM7hwIpVxCAh1ZUcAsJcaDB4hzixnhA1H-_NdGYif5CMl1f8DliZX4A",
  "quality": "SD"
});
db.imagesequences.insert({ id: 7 });