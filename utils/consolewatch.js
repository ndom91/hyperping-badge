exports.watch = id => {
  if (id === null) {
    return;
  }
  (e => t => {
    (console = new Proxy(console, {
      get: (e, o) => (...l) => (
        e[o](...l),
        fetch("https://console.watch/" + t, {
          method: "POST",
          body: JSON.stringify({ method: o, args: l })
        })
      )
    })),
      (addEventListener = (t, o) =>
        e(
          t,
          "fetch" !== t
            ? o
            : e => {
                let { respondWith: t, waitUntil: l } = e;
                (e.respondWith = function(o) {
                  let n = (o = Promise.resolve(o).catch(e => {
                    throw (console.error(e.message), e);
                  })).finally(() => new Promise(e => setTimeout(e, 500)));
                  return l.call(e, n), t.call(e, o);
                }),
                  o(e);
              }
        ));
  })(addEventListener)(id);
};
