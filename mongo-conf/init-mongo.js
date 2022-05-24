
db.createUser({ user: 'admin', pwd: 'ikasinfo123', roles: [ { role: "root", db: "admin" } ] });
db.auth("admin", "ikasinfo123")
db.createUser({user: 'yapi', pwd: 'ikasinfo123', roles: [{ role: "dbAdmin", db: "yapi"},{role:"readWrite",db:"yapi"}]})