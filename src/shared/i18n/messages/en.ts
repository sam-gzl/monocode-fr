/** English UI strings. Source of truth for message ids used across the app. */
export const en = {
  "menuBar.file": "File",
  "menuBar.view": "View",
  "menuBar.terminal": "Terminal",

  "menuBar.file.newTab": "New Tab",
  "menuBar.file.newTerminal": "New Terminal",
  "menuBar.file.newWindow": "New Window",
  "menuBar.file.autosave": "Autosave",
  "menuBar.file.openProject": "Open Project…",
  "menuBar.file.search": "Search…",
  "menuBar.file.goToFile": "Go to File…",
  "menuBar.file.findInFiles": "Find in Files…",
  "menuBar.file.closePane": "Close Pane",
  "menuBar.file.closeOtherTabs": "Close Other Tabs",
  "menuBar.file.closeAllTabs": "Close All Tabs",
  "menuBar.file.checkForUpdates": "Check for Updates…",

  "menuBar.view.toggleSidebar": "Toggle Sidebar",
  "menuBar.view.toggleSessionSidebar": "Toggle Session Sidebar",
  "menuBar.view.inbox": "Inbox",
  "menuBar.view.notes": "Notes",
  "menuBar.view.toggleTerminal": "Toggle Terminal",
  "menuBar.view.switchModel": "Switch Model…",
  "menuBar.view.toggleChanges": "Toggle Changes",
  "menuBar.view.zoomIn": "Zoom In",
  "menuBar.view.zoomOut": "Zoom Out",
  "menuBar.view.resetZoom": "Reset Zoom",

  "menuBar.terminal.newTerminal": "New Terminal",
  "menuBar.terminal.toggleTerminal": "Toggle Terminal",

  "settings.language.label": "Language",
  "settings.language.english": "English",
  "settings.language.french": "Français",
} satisfies Record<string, string>;

export type MessageKey = keyof typeof en;
