import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-K7TVEGDE.js";

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/notes.$noteId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteDetailsPage() {
  const note = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    id: "note-details",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              to: "/notes",
              children: "Back to all Notes"
            }, void 0, false, {
              fileName: "app/routes/notes.$noteId.jsx",
              lineNumber: 14,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/notes.$noteId.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: note.title
          }, void 0, false, {
            fileName: "app/routes/notes.$noteId.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        id: "note-details-content",
        children: note.content
      }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
function meta({ data }) {
  return {
    title: data.title,
    description: "Manage your notes with ease."
  };
}
export {
  NoteDetailsPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/notes.$noteId-GAUVWG2K.js.map
