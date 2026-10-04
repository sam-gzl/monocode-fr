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

  "settings.nav.group.app": "App",
  "settings.nav.group.agents": "Agents",
  "settings.nav.group.workspace": "Workspace",
  "settings.nav.general": "General",
  "settings.nav.connections": "Connections",
  "settings.nav.appearance": "Appearance",
  "settings.nav.keybindings": "Keybindings",
  "settings.nav.chat": "Chat",
  "settings.nav.providers": "Providers",
  "settings.nav.mcp": "MCP",
  "settings.nav.skills": "Skills",
  "settings.nav.inbox": "Inbox",
  "settings.nav.archive": "Archive",
  "settings.nav.worktrees": "Worktrees",
  "settings.nav.back": "Back",

  "settings.general.language.title": "Language",
  "settings.general.language.description": "Choose the language used across the app.",

  "settings.general.alerts.title": "Alerts",
  "settings.general.alerts.description":
    "How MonoCode reaches you while you are looking somewhere else.",
  "settings.general.sounds.label": "Sounds",
  "settings.general.sounds.description":
    "Short cues for project activity, finished turns, and available updates. Choose project notification categories in Inbox settings. Switches and Copy on a finished turn also play.",
  "settings.general.notifications.label": "Notifications",
  "settings.general.notifications.description":
    "Notify when a reminder is due, or when an agent finishes or needs input in another session or while MonoCode is in the background. Click the notification to open that session.",
  "settings.general.notifications.unsupported": "Not available on this platform",

  "settings.general.workspace.title": "Workspace",
  "settings.general.workspace.description":
    "How project navigation and workspace tabs behave.",
  "settings.general.fileTabs.label": "File tabs",
  "settings.general.fileTabs.description":
    "Open files beside the active chat, or give each file a normal tab in the top bar. Top-bar files can still be combined into split panes.",
  "settings.general.fileTabs.besideChat": "Beside chat",
  "settings.general.fileTabs.topBar": "Top bar",
  "settings.general.tabAnimations.label": "Tab animations",
  "settings.general.tabAnimations.description":
    "Animate tabs as they open and close. Turn this off for instant tab changes.",
  "settings.general.notes.label": "Notes",
  "settings.general.notes.description":
    "A global markdown notebook on the project rail. Save a finished turn from the transcript, then mention it later with @note or add it to chat.",
  "settings.general.quickComposer.label": "Quick composer",
  "settings.general.quickComposer.description":
    "Press {shortcut} in any app to float a prompt over it and start a session without switching to MonoCode. Change the shortcut in Keybindings. Return starts it in the background; ⌘Return starts it and brings the session forward.",
  "settings.general.workingAgents.label": "Working agents",
  "settings.general.workingAgents.description":
    "When two or more chats are in flight, a card on the project rail lists them so you can jump across projects. Finished turns stay until you open that session.",
  "settings.general.closeToTray.label": "Close to tray",
  "settings.general.closeToTray.description":
    "Closing a window hides it to the system tray instead of quitting, so running agents keep going. Reopen from the tray icon, and quit for real from its menu. Turn this off to have close end the window.",

  "settings.general.about.title": "About",

  "rail.search": "Search",
  "rail.inbox": "Inbox",
  "rail.inboxNewItems": "Inbox, new items",
  "rail.notes": "Notes",
  "rail.automations": "Automations",
  "rail.settings": "Settings",
  "rail.projects": "Projects",
  "rail.noProjectsYet": "No projects yet",

  "workspace.tab.sessions": "Sessions",
  "workspace.tab.explorer": "Explorer",
  "workspace.tab.changes": "Changes",
  "workspace.tab.stagedChanges": "Staged Changes",
  "workspace.searchConversations": "Search conversations...",

  "workspace.currentCheckout": "Current checkout",
  "workspace.newWorktree": "New worktree",

  "branchPicker.noRepo": "No repo",
  "branchPicker.noGitRepository": "No git repository",
  "branchPicker.loadingBranch": "Loading branch…",

  "composer.placeholder": "Ask, build, / for commands, @ for references... ",
  "composer.placeholder.worktreeRemoved":
    "Select a branch or worktree to continue…",
  "composer.placeholder.inboxCard": "Add a note, or send to start…",
  "composer.placeholder.noteCard": "Add a message, or send…",
  "composer.placeholder.handoffCard": "Add context, or send to continue…",
} satisfies Record<string, string>;

export type MessageKey = keyof typeof en;
