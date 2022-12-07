import {
  Form,
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useActionData,
  useCatch,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-K7TVEGDE.js";

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewNote() {
  const data = useActionData();
  const navigation = useTransition();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
    method: "post",
    id: "note-form",
    children: [
      (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: data.message
      }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 17,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "title",
            children: "Title"
          }, void 0, false, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "text",
            id: "title",
            name: "title",
            required: true
          }, void 0, false, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "content",
            children: "Content"
          }, void 0, false, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            id: "content",
            name: "content",
            rows: "5",
            required: true
          }, void 0, false, {
            fileName: "app/components/NewNote.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "form-actions",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          disabled: isSubmitting,
          children: isSubmitting ? "Adding..." : "Add Note"
        }, void 0, false, {
          fileName: "app/components/NewNote.jsx",
          lineNumber: 27,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", {
    id: "note-list",
    children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", {
      className: "note",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, {
        to: note.id,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", {
                  className: "note-meta",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", {
                      children: [
                        "#",
                        index + 1
                      ]
                    }, void 0, true, {
                      fileName: "app/components/NoteList.jsx",
                      lineNumber: 14,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", {
                        dateTime: note.id,
                        children: new Date(note.id).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })
                      }, void 0, false, {
                        fileName: "app/components/NoteList.jsx",
                        lineNumber: 16,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/NoteList.jsx",
                      lineNumber: 15,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/NoteList.jsx",
                  lineNumber: 13,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", {
                  children: note.title
                }, void 0, false, {
                  fileName: "app/components/NoteList.jsx",
                  lineNumber: 27,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/NoteList.jsx",
              lineNumber: 12,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
              children: note.content
            }, void 0, false, {
              fileName: "app/components/NoteList.jsx",
              lineNumber: 29,
              columnNumber: 15
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    }, note.id, false, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links2() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function NotesPage() {
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NoteList_default2, {
        notes
      }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function links3() {
  return [...links(), ...links2()];
}
function meta() {
  return {
    title: "All Notes",
    description: "Manage your notes with ease."
  };
}
function CatchBoundary() {
  var _a;
  const caughtResponse = useCatch();
  const message = ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewNote_default2, {}, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
        className: "info-message",
        children: message
      }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
    className: "error",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", {
        children: "An error related to your notes occurred!"
      }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
        children: error.message
      }, void 0, false, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
        children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, {
            to: "/",
            children: "safety"
          }, void 0, false, {
            fileName: "app/routes/notes.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          "!"
        ]
      }, void 0, true, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  NotesPage as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/notes-ETIQJKNS.js.map
