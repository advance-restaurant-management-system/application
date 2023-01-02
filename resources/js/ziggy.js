const Ziggy = {"url":"http:\/\/rms.test","port":null,"defaults":{},"routes":{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"]},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"]},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"]},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"]},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"index":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"contact-us":{"uri":"contact-us","methods":["GET","HEAD"]},"categories.index":{"uri":"categories","methods":["GET","HEAD"]},"categories.show":{"uri":"categories\/{slug}","methods":["GET","HEAD"]},"products.index":{"uri":"products","methods":["GET","HEAD"]},"products.show":{"uri":"products\/{slug}","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"customer.carts.index":{"uri":"carts","methods":["GET","HEAD"]},"customer.carts.store":{"uri":"carts","methods":["POST"]},"customer.carts.update":{"uri":"carts\/{cart}","methods":["PUT"],"bindings":{"cart":"id"}},"customer.carts.destroy":{"uri":"carts\/{cart}","methods":["DELETE"],"bindings":{"cart":"id"}},"admin.users.destroy":{"uri":"admin\/users\/{user}","methods":["DELETE"],"bindings":{"user":"id"}},"admin.users.destroy-multiple":{"uri":"admin\/users","methods":["DELETE"]},"admin.users.restore":{"uri":"admin\/users\/{user}\/restore","methods":["PUT"],"bindings":{"user":"id"}},"admin.users.restore-multiple":{"uri":"admin\/users\/restore","methods":["PUT"]},"admin.users.index":{"uri":"admin\/users","methods":["GET","HEAD"]},"admin.users.store":{"uri":"admin\/users","methods":["POST"]},"admin.users.update":{"uri":"admin\/users\/{user}","methods":["PUT"],"bindings":{"user":"id"}},"admin.roles.destroy":{"uri":"admin\/roles\/{role}","methods":["DELETE"],"bindings":{"role":"id"}},"admin.roles.destroy-multiple":{"uri":"admin\/roles","methods":["DELETE"]},"admin.roles.restore":{"uri":"admin\/roles\/{role}\/restore","methods":["PUT"],"bindings":{"role":"id"}},"admin.roles.restore-multiple":{"uri":"admin\/roles\/restore","methods":["PUT"]},"admin.roles.index":{"uri":"admin\/roles","methods":["GET","HEAD"]},"admin.roles.store":{"uri":"admin\/roles","methods":["POST"]},"admin.roles.update":{"uri":"admin\/roles\/{role}","methods":["PUT"],"bindings":{"role":"id"}},"admin.index":{"uri":"admin","methods":["GET","HEAD"]},"admin.settings.index":{"uri":"admin\/settings","methods":["GET","HEAD"]},"admin.settings.update.general":{"uri":"admin\/settings\/general","methods":["PUT"]},"admin.settings.update.password":{"uri":"admin\/settings\/password","methods":["PUT"]},"admin.categories.destroy":{"uri":"admin\/categories\/{category}","methods":["DELETE"],"bindings":{"category":"id"}},"admin.categories.destroy-multiple":{"uri":"admin\/categories","methods":["DELETE"]},"admin.categories.restore":{"uri":"admin\/categories\/{category}\/restore","methods":["PUT"],"bindings":{"category":"id"}},"admin.categories.restore-multiple":{"uri":"admin\/categories\/restore","methods":["PUT"]},"admin.categories.index":{"uri":"admin\/categories","methods":["GET","HEAD"]},"admin.categories.store":{"uri":"admin\/categories","methods":["POST"]},"admin.categories.update":{"uri":"admin\/categories\/{category}","methods":["PUT"],"bindings":{"category":"id"}},"admin.products.destroy":{"uri":"admin\/products\/{product}","methods":["DELETE"],"bindings":{"product":"id"}},"admin.products.destroy-multiple":{"uri":"admin\/products","methods":["DELETE"]},"admin.products.restore":{"uri":"admin\/products\/{product}\/restore","methods":["PUT"],"bindings":{"product":"id"}},"admin.products.restore-multiple":{"uri":"admin\/products\/restore","methods":["PUT"]},"admin.products.index":{"uri":"admin\/products","methods":["GET","HEAD"]},"admin.products.store":{"uri":"admin\/products","methods":["POST"]},"admin.products.update":{"uri":"admin\/products\/{product}","methods":["PUT"],"bindings":{"product":"id"}},"components.categories.random":{"uri":"components\/categories\/random","methods":["GET","HEAD"]},"components.products.random":{"uri":"components\/products\/random","methods":["GET","HEAD"]},"components.carts.count":{"uri":"components\/carts\/count","methods":["GET","HEAD"]},"components.roles":{"uri":"components\/roles","methods":["GET","HEAD"]},"components.roles.show":{"uri":"components\/roles\/{id}","methods":["GET","HEAD"]},"components.permissions":{"uri":"components\/permissions","methods":["GET","HEAD"]},"components.temporary-file.store":{"uri":"components\/temporary-file","methods":["POST"]},"components.temporary-file.destroy":{"uri":"components\/temporary-file\/{folder}","methods":["DELETE"]},"components.users.show":{"uri":"components\/users\/{id}","methods":["GET","HEAD"]},"components.categories":{"uri":"components\/categories","methods":["GET","HEAD"]},"components.categories.show":{"uri":"components\/categories\/{id}","methods":["GET","HEAD"]},"components.products":{"uri":"components\/products","methods":["GET","HEAD"]},"components.products.show":{"uri":"components\/products\/{id}","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
