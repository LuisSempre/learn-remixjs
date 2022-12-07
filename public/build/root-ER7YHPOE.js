import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime,
  useCatch
} from "/build/_shared/chunk-K7TVEGDE.js";

// app/components/MainNavigation.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    id: "main-navigation",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          className: "nav-item",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            to: "/",
            children: "Home"
          }, void 0, false, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 8,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          className: "nav-item",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
            to: "/notes",
            children: "My Notes"
          }, void 0, false, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 11,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainNavigation_default = MainNavigation;

// app/styles/main.css
var main_default = "/build/_assets/main-THLKTWJO.css";

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default, {}, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  const caughtResponse = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", {
            children: caughtResponse.statusText
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default, {}, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", {
                children: caughtResponse.statusText
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 55,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
                children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong!"
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 56,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, {
                    to: "/",
                    children: "safety"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 58,
                    columnNumber: 21
                  }, this),
                  "!"
                ]
              }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 57,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", {
            children: "An error occurred!"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default, {}, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 79,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", {
                children: "An error occurred!"
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 82,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
                children: error.message
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 83,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, {
                    to: "/",
                    children: "safety"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 85,
                    columnNumber: 21
                  }, this),
                  "!"
                ]
              }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 84,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 90,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-ER7YHPOE.js.map
