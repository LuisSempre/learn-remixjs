var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", {
    id: "main-navigation",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", {
          className: "nav-item",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, {
            to: "/",
            children: "Home"
          }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 8,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", {
          className: "nav-item",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, {
            to: "/notes",
            children: "My Notes"
          }, void 0, !1, {
            fileName: "app/components/MainNavigation.jsx",
            lineNumber: 11,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainNavigation_default = MainNavigation;

// app/styles/main.css
var main_default = "/build/_assets/main-THLKTWJO.css";

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", {
            children: caughtResponse.statusText
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", {
                children: caughtResponse.statusText
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 55,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
                children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong!"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 56,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, {
                    to: "/",
                    children: "safety"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 58,
                    columnNumber: 21
                  }, this),
                  "!"
                ]
              }, void 0, !0, {
                fileName: "app/root.jsx",
                lineNumber: 57,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", {
            children: "An error occurred!"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 79,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
            className: "error",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", {
                children: "An error occurred!"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 82,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
                children: error.message
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 83,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
                children: [
                  "Back to ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, {
                    to: "/",
                    children: "safety"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 85,
                    columnNumber: 21
                  }, this),
                  "!"
                ]
              }, void 0, !0, {
                fileName: "app/root.jsx",
                lineNumber: 84,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 90,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}

// app/routes/notes.$noteId.jsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  default: () => NoteDetailsPage,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/data/notes.js
var import_promises = __toESM(require("fs/promises"));
async function getStoredNotes() {
  let rawFileContent = await import_promises.default.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return import_promises.default.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/notes.$noteId.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function NoteDetailsPage() {
  let note = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", {
    id: "note-details",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, {
              to: "/notes",
              children: "Back to all Notes"
            }, void 0, !1, {
              fileName: "app/routes/notes.$noteId.jsx",
              lineNumber: 14,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/notes.$noteId.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", {
            children: note.title
          }, void 0, !1, {
            fileName: "app/routes/notes.$noteId.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {
        id: "note-details-content",
        children: note.content
      }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader({ params }) {
  let notes = await getStoredNotes(), noteId = params.noteId, selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote)
    throw (0, import_node2.json)(
      { message: "Could not find note for id " + noteId },
      { status: 404 }
    );
  return selectedNote;
}
function links2() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
function meta2({ data }) {
  return {
    title: data.title,
    description: "Manage your notes with ease."
  };
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3
});
var import_react5 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-PJIINAIX.css";

// app/routes/index.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", {
    id: "content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", {
        children: "A better way of keeping track of your notes"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", {
        children: "Try our early beta and never loose track of your notes again!"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", {
        id: "cta",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, {
          to: "/notes",
          children: "Try Now!"
        }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links3() {
  return [{ rel: "stylesheet", href: home_default }];
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => NotesPage,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta3
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/NewNote.jsx
var import_react6 = require("@remix-run/react");

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function NewNote() {
  let data = (0, import_react6.useActionData)(), isSubmitting = (0, import_react6.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, {
    method: "post",
    id: "note-form",
    children: [
      (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", {
        children: data.message
      }, void 0, !1, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 17,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", {
            htmlFor: "title",
            children: "Title"
          }, void 0, !1, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", {
            type: "text",
            id: "title",
            name: "title",
            required: !0
          }, void 0, !1, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", {
            htmlFor: "content",
            children: "Content"
          }, void 0, !1, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("textarea", {
            id: "content",
            name: "content",
            rows: "5",
            required: !0
          }, void 0, !1, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
        className: "form-actions",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", {
          disabled: isSubmitting,
          children: isSubmitting ? "Adding..." : "Add Note"
        }, void 0, !1, {
          fileName: "app/components/NewNote.jsx",
          lineNumber: 27,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links4() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/components/NoteList.jsx
var import_react7 = require("@remix-run/react");

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", {
    id: "note-list",
    children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", {
      className: "note",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, {
        to: note.id,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", {
                  className: "note-meta",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", {
                      children: [
                        "#",
                        index + 1
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/NoteList.jsx",
                      lineNumber: 14,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("time", {
                        dateTime: note.id,
                        children: new Date(note.id).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })
                      }, void 0, !1, {
                        fileName: "app/components/NoteList.jsx",
                        lineNumber: 16,
                        columnNumber: 21
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/NoteList.jsx",
                      lineNumber: 15,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/NoteList.jsx",
                  lineNumber: 13,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", {
                  children: note.title
                }, void 0, !1, {
                  fileName: "app/components/NoteList.jsx",
                  lineNumber: 27,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/NoteList.jsx",
              lineNumber: 12,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {
              children: note.content
            }, void 0, !1, {
              fileName: "app/components/NoteList.jsx",
              lineNumber: 29,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    }, note.id, !1, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links5() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NotesPage() {
  let notes = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewNote_default2, {}, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NoteList_default2, {
        notes
      }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader2() {
  let notes = await getStoredNotes();
  if (!notes || notes.length === 0)
    throw (0, import_node3.json)(
      { message: "Could not find any notes." },
      {
        status: 404,
        statusText: "Not Found"
      }
    );
  return notes;
}
async function action({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 5)
    return { message: "Invalid title - must be at least 5 characters long." };
  let existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), (0, import_node3.redirect)("/notes");
}
function links6() {
  return [...links4(), ...links5()];
}
function meta3() {
  return {
    title: "All Notes",
    description: "Manage your notes with ease."
  };
}
function CatchBoundary2() {
  var _a;
  let message = ((_a = (0, import_react8.useCatch)().data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewNote_default2, {}, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
        className: "info-message",
        children: message
      }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", {
    className: "error",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", {
        children: "An error related to your notes occurred!"
      }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
        children: error.message
      }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
        children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, {
            to: "/",
            children: "safety"
          }, void 0, !1, {
            fileName: "app/routes/notes.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          "!"
        ]
      }, void 0, !0, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c52bf4c7", entry: { module: "/build/entry.client-JF2TI3R4.js", imports: ["/build/_shared/chunk-K7TVEGDE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ER7YHPOE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-RUFKFCUU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-ETIQJKNS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "root", path: "notes/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-GAUVWG2K.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-C52BF4C7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "root",
    path: "notes/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
