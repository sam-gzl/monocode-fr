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
  "settings.nav.monos": "Monos",
  "settings.nav.inbox": "Inbox",
  "settings.nav.archive": "Archive",
  "settings.nav.worktrees": "Worktrees",
  "settings.nav.back": "Back",

  "settings.page.general.description":
    "The build you are running, how MonoCode reaches you, and the panels it shows.",
  "settings.page.connections.description":
    "Connect your machines and run agents remotely through SSH.",
  "settings.page.appearance.description":
    "Theme, tint, translucency, workspace layout, and conversation backgrounds.",
  "settings.page.keybindings.description":
    "Every shortcut the workspace handles, from the app menu and the key handler.",
  "settings.page.chat.description":
    "How transcripts read, what the composer does with a follow-up, how files save, and how diffs open.",
  "settings.page.providers.description":
    "Provider accounts, agent CLIs MonoCode can drive, and the model new sessions start with.",
  "settings.page.mcp.description":
    "Find MCP servers across providers and manage their connections.",
  "settings.page.skills.description":
    "Discover and manage file skills from project, personal, and harness folders.",
  "settings.page.monos.description":
    "The resident agent beside your tabs, and which projects have one.",
  "settings.page.inbox.description":
    "Manage Inbox services and notification preferences for each project.",
  "settings.page.archive.description":
    "Projects and conversations you have archived.",
  "settings.page.worktrees.description":
    "Manage additional worktrees for each project.",

  "settings.restoreDefaults": "Restore defaults",

  "settings.general.language.title": "Language",
  "settings.general.language.description":
    "Choose the language used across the app.",

  "settings.general.alerts.title": "Alerts",
  "settings.general.alerts.description":
    "How MonoCode reaches you while you are looking somewhere else.",
  "settings.general.sounds.label": "Sounds",
  "settings.general.sounds.description":
    "Short cues for project activity, finished turns, and available updates. Choose project notification categories in Inbox settings. Switches and Copy on a finished turn also play.",
  "settings.general.notifications.label": "Notifications",
  "settings.general.notifications.description":
    "Notify when a reminder is due, or when an agent finishes or needs input in another session or while MonoCode is in the background. Click the notification to open that session.",
  "settings.general.notifications.unsupported":
    "Not available on this platform",

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

  "appearance.theme.title": "Theme",
  "appearance.theme.description":
    "Dark and light share the same tint, so the color settings below apply to both.",
  "appearance.theme.label": "Theme",
  "appearance.theme.description.row": "System follows the OS appearance.",
  "appearance.theme.system": "System",
  "appearance.theme.dark": "Dark",
  "appearance.theme.light": "Light",
  "appearance.accentColor.label": "Accent color",
  "appearance.accentColor.description":
    "Used for the composer send button and your message bubbles.",
  "appearance.diffColors.label": "Diff colors",
  "appearance.diffColors.description":
    "Colors for added and removed lines. Colorblind and High contrast use blue and orange instead of green and red; High contrast adds stronger tints and text.",
  "appearance.diffColors.default": "Default",
  "appearance.diffColors.colorblind": "Colorblind",
  "appearance.diffColors.highContrast": "High contrast",

  "appearance.color.title": "Color",
  "appearance.color.description":
    "Hue and saturation tint every surface. Lightness only moves the dark theme.",
  "appearance.hue.label": "Hue",
  "appearance.hue.description": "Base hue for accents and tinted surfaces.",
  "appearance.saturation.label": "Saturation",
  "appearance.saturation.description":
    "How strongly the hue tints the interface. Zero keeps it neutral.",
  "appearance.darkLightness.label": "Dark-mode lightness",
  "appearance.darkLightness.description.glassDisabled":
    "This only affects dark mode. Your dark-mode value is preserved.",
  "appearance.darkLightness.description":
    "Base brightness of the dark theme. Lower values are darker; zero is true black.",

  "appearance.translucency.title": "Translucency",
  "appearance.translucency.description.glassDisabled":
    "Light mode always uses an opaque window, so these are off. Your dark-mode values are preserved.",
  "appearance.translucency.description":
    "How much of the desktop shows through MonoCode. Blur costs more to composite the higher it goes.",
  "appearance.sidebarOpacity.label": "Sidebar opacity",
  "appearance.sidebarOpacity.description":
    "Applies to the project rail and the other glass panes.",
  "appearance.blur.label": "Blur radius",
  "appearance.blur.description": "Background blur behind the window.",
  "appearance.mainPaneGlass.label": "Main pane glass",
  "appearance.mainPaneGlass.description":
    "Extend the translucent treatment to the main pane behind sessions and editors.",

  "appearance.layout.title": "Layout",
  "appearance.collapsedProjectRail.label": "Collapsed project rail",
  "appearance.collapsedProjectRail.description":
    "Keep project navigation available as a compact icon rail, or hide the rail completely.",
  "appearance.collapsedProjectRail.iconRail": "Icon rail",
  "appearance.collapsedProjectRail.hidden": "Hidden",
  "appearance.interfaceScale.label": "Interface scale",
  "appearance.interfaceScale.description":
    "Zoom the whole interface. You can also use Ctrl+=, Ctrl+-, and Ctrl+0 (Cmd on macOS).",
  "appearance.showExcludedFiles.label": "Show excluded files",
  "appearance.showExcludedFiles.description":
    "Show files and folders Git excludes, such as build output and dependencies, in the explorer.",

  "keybindings.title": "Shortcuts",
  "keybindings.description":
    "Click a shortcut to record new keys. Press Delete while recording to disable it.",
  "keybindings.bindingCount.one": "binding",
  "keybindings.bindingCount.other": "bindings",
  "keybindings.filter.placeholder": "Filter",
  "keybindings.filter.ariaLabel": "Filter keybindings",
  "keybindings.column.command": "Command",
  "keybindings.column.keybinding": "Keybinding",
  "keybindings.column.when": "When",
  "keybindings.noMatches": "No matching bindings",

  "chat.transcript.title": "Transcript",
  "chat.transcript.description": "How a conversation reads as it grows.",
  "chat.transcriptLayout.label": "Transcript layout",
  "chat.transcriptLayout.description":
    "Full width keeps user prompts as a spanning card. Chat aligns them to the right with a max width, like a messaging app.",
  "chat.transcriptLayout.full": "Full width",
  "chat.transcriptLayout.chat": "Chat",
  "chat.anchorPrompts.label": "Anchor prompts to top",
  "chat.anchorPrompts.description":
    "When you send, the new prompt sits at the top of the transcript and the reply grows into the space below. Turn this off to keep the classic layout, with the latest message resting on the composer.",

  "chat.composer.title": "Composer",
  "chat.composer.description": "What the composer does with what you type.",
  "chat.followUp.label": "Follow-up behavior",
  "chat.followUp.description":
    "Queue follow-ups until the active turn finishes, or steer the active turn immediately.",
  "chat.followUp.queue": "Queue",
  "chat.followUp.steer": "Steer",
  "chat.modelControls.label": "Model controls",
  "chat.modelControls.description":
    "Show model options beside the picker instead of inside the model menu.",
  "chat.modelControls.menu": "Menu",
  "chat.modelControls.beside": "Beside",

  "chat.editor.title": "Editor",
  "chat.editor.description":
    "What happens when you save a file in the workspace editor.",
  "chat.formatOnSave.label": "Format on save",
  "chat.formatOnSave.description":
    "Run Prettier on supported files before writing. Off keeps the text you typed, including quote style.",

  "chat.codeReview.title": "Code review",
  "chat.codeReview.description":
    "Where a turn's changes open when you go to read them.",
  "chat.diffView.label": "Diff view",
  "chat.diffView.description":
    "Editor keeps working-tree changes in the file. Unified stacks every changed file in one review, with sticky headers and collapsed unchanged lines.",
  "chat.diffView.editor": "Editor",
  "chat.diffView.unified": "Unified",

  "chat.extras.title": "Extras",
  "chat.extras.description":
    "Idle animation, and nothing else. Turn both off for a still workspace.",
  "chat.composerMascot.label": "Composer mascot",
  "chat.composerMascot.description":
    "When a turn is running, the project mascot runs along the composer, bonks the scroll-to-latest button the first time, then jumps it, and sometimes grabs a coin.",
  "chat.emptySessionGames.label": "Empty session games",
  "chat.emptySessionGames.description":
    "Pac-man and snake idle on the empty-session grid. Hover the band to take control of whichever is on screen. Turn this off to keep the pane still.",

  "inbox.github.description":
    "Pull requests, reviews, and issues, read through the GitHub CLI.",
  "inbox.gitlab.description":
    "Merge requests from GitLab.com or a self-managed instance.",
  "inbox.ado.description":
    "Pull requests and Boards work items from your ADO organization.",
  "inbox.jira.description": "Jira Cloud issues from the projects you pick.",
  "inbox.linear.description":
    "Issues assigned to you, from the teams you pick.",

  "archive.projects.title": "Archived projects",
  "archive.projects.description":
    "Archive a project from the rail to keep its chats without listing it in the sidebar.",
  "archive.projects.empty": "No archived projects.",
  "archive.restore": "Restore",
  "archive.delete": "Delete",
  "archive.conversations.titleIn": "Archived in {project}",
  "archive.conversations.title": "Archived conversations",
  "archive.showArchived.label": "Show archived in the sidebar",
  "archive.showArchived.description":
    "Keep archived conversations listed alongside the active ones.",
  "archive.conversations.openProject":
    "Open a project to see its archived conversations.",
  "archive.conversations.empty": "No archived conversations in this project.",
  "archive.unarchive": "Unarchive",

  "providers.scope.global": "Global",
  "providers.agentClis.title": "Agent CLIs",
  "providers.scope.label": "Provider defaults scope",
  "providers.agentClis.description.project":
    "These defaults apply to {project} only. A provider with Show in picker off is also kept out of new conversations started in this project. CLI paths remain global for MonoCode.",
  "providers.agentClis.description.global":
    "A provider is listed as installed once its CLI is found on your PATH. Uninstalled CLIs stay listed but are left out of the model picker, as are installed ones with Show in picker off. The model beside a provider is what its new conversations start with; Use by default picks the provider itself. CLI paths are global for MonoCode and apply to every project.",
  "providers.advanced.title": "Advanced",
  "providers.claudeHooks.label": "Claude Code hooks",
  "providers.claudeHooks.description":
    "Run the hooks configured in your settings.json files — PreToolUse command rewrites, blocks, notifications, and the rest — just as the Claude Code CLI would. Turn this off if a hook is misbehaving and you need the session back. Takes effect on the next turn.",

  "mcp.addServer.title": "Add MCP server",
  "mcp.addServer.description":
    "Paste a server configuration and choose where to add it.",
  "mcp.provider.label": "Provider",
  "mcp.scope.label": "Scope",
  "mcp.name.label": "Name",
  "mcp.name.optional": "(optional for an mcpServers block)",
  "mcp.config.label": "JSON configuration",
  "mcp.config.hint":
    "Paste one entry from an mcpServers block, or a single server object with a name above.",
  "mcp.cancel": "Cancel",
  "mcp.addServer.submit": "Add server",
  "mcp.addServer.adding": "Adding…",
  "mcp.scope.local": "Local",
  "mcp.scope.project": "Project",
  "mcp.scope.user": "User",

  "mcp.connections.title": "MCP connections",
  "mcp.connections.description":
    "Configured servers for the selected project and your provider accounts.",
  "mcp.refresh": "Refresh",
  "mcp.showAvailableProviders": "Show available providers",
  "mcp.showAllProviders": "Show all providers",
  "mcp.showingAllProviders": "Showing all providers",
  "mcp.showingAvailableProviders": "Showing available providers",
  "mcp.addServerAria": "Add MCP server",
  "mcp.filterByProvider": "Filter MCP servers by provider",
  "mcp.all": "All",
  "mcp.claudeStatusUnavailable":
    "Claude connection status unavailable: {error}",
  "mcp.checkingServers": "Checking servers…",
  "mcp.noServersConfigured": "No MCP servers configured for this provider.",
  "mcp.signIn": "Sign in",
  "mcp.remove": "Remove",
  "mcp.showConfig": "Show config",
  "mcp.footer":
    "Claude Code status comes from its CLI. Other providers show configured entries. Sign in opens your browser when supported.",
  "mcp.removeConfirm": "Remove {name} from {scope} scope?",
  "mcp.removeServer.title": "Remove MCP server",

  "worktrees.create": "Create worktree",
  "worktrees.hint":
    "Sessions can share a worktree. Deleting one keeps its sessions by default and discards uncommitted changes. Its branch and commits are kept.",
  "worktrees.refresh": "Refresh",
  "worktrees.refresh.title": "Refresh worktrees",
  "worktrees.refreshFailed": "Refresh failed: {error}. Click to retry.",
  "worktrees.addProject": "Add a project to manage its worktrees.",
  "worktrees.loading": "Loading worktrees…",
  "worktrees.none.title": "No additional worktrees",
  "worktrees.none.description":
    "Create a worktree to work on another branch in a separate folder.",
  "worktrees.selectedProjectFolder": "Selected project folder",
  "worktrees.currentBranch": "Current branch: {branch}",
  "worktrees.detachedAt": "Detached at {sha}",
  "worktrees.sessionCount":
    "{count, plural, one {# session} other {# sessions}} in this worktree",
  "worktrees.missingFolder": "Missing folder",
  "worktrees.statusUnavailable": "Status unavailable",
  "worktrees.uncommittedChanges": "Uncommitted changes",
  "worktrees.clean": "Clean",
  "worktrees.unpublishedCommits":
    "{count, plural, one {# unpublished commit} other {# unpublished commits}}",
  "worktrees.locked": "Locked",
  "worktrees.reveal": "Reveal {branch}",
  "worktrees.reveal.title": "Reveal folder",
  "worktrees.unlockFirst": "Unlock this worktree in Git first",
  "worktrees.createBranchFirst":
    "Create a branch before deleting this detached worktree",
  "worktrees.delete": "Delete {branch}",
  "worktrees.delete.title": "Delete worktree",
  "worktrees.newRoot": "New worktrees are created in {root}.",
  "worktrees.sessionsStillUse":
    "Sessions still use this worktree and could not be deleted.",
  "worktrees.someSessionsFailed":
    "Some sessions could not be deleted, so the worktree was kept.",
  "worktrees.sessionsDeletedButKept":
    "The sessions were deleted, but the worktree was kept. {error}",
  "worktrees.worktreeFallback": "worktree",
  "connections.title": "Your machines",
  "connections.description":
    "Run agents on another computer and return to them from your laptop. The host keeps working when you close MonoCode here.",
  "connections.addMachine": "Add machine",
  "connections.checkingConnection": "Checking connection…",
  "connections.connected": "Connected",
  "connections.connectedInstallProvider":
    "Connected · install a supported provider on the host",
  "connections.connectedUpdateNeeded":
    "Connected · host update needed for Explorer and Changes",
  "connections.offline": "Offline · reconnect to check access",
  "connections.updateWarning":
    "Updating restarts the host and interrupts active agent turns.",
  "connections.updateHost": "Update Host",
  "connections.updateHost.title":
    "Downloads the matching host package and restarts the host; active agent turns will be interrupted",
  "connections.reconnect": "Reconnect",
  "connections.remove": "Remove {name}",
  "connections.remove.title": "Remove connection…",
  "connections.confirmRemove": "Confirm removing {name}",
  "connections.removeQuestion": "Remove {name} from this desktop?",
  "connections.removeExplain1":
    "This closes this desktop's connection to the machine. It does not stop the host, and its sessions keep running and stay on that machine. You can add it again later.",
  "connections.removeExplain2":
    "Removing alone leaves this desktop’s credential valid on the host. Revoke access to invalidate it first; the machine must be reachable.",
  "connections.removeExplain3":
    "To stop the host and turn off its background service, run {unixCmd} on that machine ({windowsCmd} on Windows). Its sessions and history are kept.",
  "connections.revokeAndRemove": "Revoke access and remove",
  "connections.removeThisDesktopOnly": "Remove from this desktop only",
  "connections.cancel": "Cancel",
  "connections.addFirst":
    "Add your always-on Windows, Mac, or Linux machine to get started.",
  "connections.connectViaSsh": "Connect through SSH",
  "connections.sshAddress.label": "SSH address",
  "connections.sshAddress.placeholder": "user@my-mac-mini or an SSH alias",
  "connections.name.label": "Name",
  "connections.name.optional": "(optional)",
  "connections.name.placeholder": "Optional, e.g. Home Mac mini",
  "connections.advanced": "Advanced",
  "connections.sshPort.label": "SSH port",
  "connections.sshPort.placeholder": "From SSH config",
  "connections.setupExplain1":
    "MonoCode installs and starts its background host, then connects securely. Your SSH keys and config are used automatically. Enable SSH on the host and sign in to Codex or Claude Code there. On Windows and Mac, keep the host's desktop account signed in and the machine awake. Locking the desktop is fine.",
  "connections.setupExplain2":
    "On Linux, setup installs a systemd user service and turns on lingering for your account ({lingerCmd}), so the host and your other user services keep running after you log out. The host keeps running until you stop it on that machine; removing it here only disconnects this desktop.",
  "connections.connecting": "Connecting…",
  "connections.connect": "Connect",
  "connections.startingConnection": "Starting connection…",
  "connections.sshPasswordAria": "SSH password or passphrase",
  "connections.trustAndContinue": "Trust host and continue",
  "connections.continue": "Continue",
  "connections.reject": "Reject",
  "connections.cancelConnection": "Cancel connection",
  "connections.connectByUrl": "Connect to an existing host by URL",
  "connections.hostUrl.label": "Host URL",
  "connections.deviceToken.label": "Device token",
  "connections.connectByUrl.submit": "Connect by URL",
  "connections.machineUpdated": "{name} was updated and reconnected.",
  "connections.machineConnected":
    "{name} is connected. To work on it, click + next to Projects in the project rail and choose Open folder on a machine.",
  "connections.machineConnectedByUrl": "{name} is connected.",
  "connections.removedAndRevoked":
    "{name} was removed and this desktop's access was revoked. The host and its sessions keep running.",
  "connections.removedFromDesktop":
    "{name} was removed from this desktop. The host and its sessions keep running, and it still accepts this desktop's credential.",
  "connections.revokeFailed":
    "Could not revoke access, so {name} was not removed: {error}. Reconnect and try again, or remove it from this desktop only and revoke it on the host with monocode-host devices and monocode-host revoke {deviceId}.",

  "skills.readFailed": "Could not read SKILL.md. {error}",
  "skills.savePreferenceFailed":
    "Could not save the skill preference. Try again.",
  "skills.openFolderFailed": "Could not open the folder: {error}",
  "skills.copyPathFailed": "Could not copy the path to the clipboard.",
  "skills.count": "{count, plural, one {# skill} other {# skills}}",
  "skills.filter": "Filter",
  "skills.filterAria": "Filter skills",
  "skills.refresh": "Refresh skills",
  "skills.rescan": "Rescan skill folders",
  "skills.closeForm": "Close skill form",
  "skills.add": "Add skill",
  "skills.addHint": "Create a starter SKILL.md you can edit",
  "skills.close": "Close",
  "skills.loading": "Loading skills…",
  "skills.empty": "No skills yet. Add skill creates a starter SKILL.md.",
  "skills.noMatches": "No matching skills",
  "skills.preview": "Preview {name}",
  "skills.scope.personal": "Personal",
  "skills.scope.project": "Project",
  "skills.include": "Include {name} in MonoCode catalog",
  "skills.previewSkill": "Preview skill {name}",
  "skills.previewTitle": "Preview skill",
  "skills.copyPath": "Copy path of {name}",
  "skills.copyPathTitle": "Copy path",
  "skills.reveal": "Reveal {name} in file explorer",
  "skills.revealTitle": "Reveal in file manager",
  "skills.footer":
    "Hidden skills stay on disk and are excluded from MonoCode's file-skill catalog. Provider-managed skills and native commands are unaffected. Skills live in {projectPath} for this project and {personalPath} for you personally; harness folders are also picked up.",
  "skills.previewPanel": "Skill preview",
  "skills.closePreview": "Close skill preview",
  "skills.closePreviewTitle": "Close preview (Escape)",
  "skills.loadingOne": "Loading skill…",
  "skills.new": "New skill",
  "skills.picker.noMatches": "No matching commands or skills",
  "skills.picker.empty": "No commands yet",
  "skills.picker.ariaLabel": "Commands and skills",
  "skills.form.description": "Writes a starter SKILL.md you can edit.",
  "skills.form.name": "Skill name",
  "skills.form.nameHint": "Use lowercase letters, numbers, and hyphens.",
  "skills.form.cancel": "Cancel",
  "skills.form.creating": "Creating…",
  "skills.form.create": "Create",
  "skills.metadata": "Skill metadata",
  "editor.opening": "Opening {name}…",
  "editor.openFailed": "Couldn’t open {name}",
  "editor.retry": "Retry",
  "editor.stagedLineEndings":
    "Staged line-ending changes. Line breaks are normalized in this view.",
  "editor.unstagedLineEndings":
    "Unstaged line-ending changes. Line breaks are normalized in this view.",
  "editor.properties": "Properties",
  "editor.saving": "Saving…",
  "editor.saved": "Saved",
  "editor.saveFailed": "Save failed: {error}",
  "editor.jumpChanges": "Jump between changes",
  "editor.previousChange": "Previous change",
  "editor.nextChange": "Next change",
  "inbox.connection.label": "Connection",
  "inbox.connection.checking": "Checking",
  "inbox.connection.connected": "Connected",
  "inbox.connection.checkAgain": "Check again",
  "inbox.connection.disconnect": "Disconnect",
  "inbox.connection.saving": "Saving",
  "inbox.connection.connect": "Connect",
  "inbox.github.connected":
    "GitHub CLI is installed and authenticated. MonoCode uses it for GitHub inbox items.",
  "inbox.github.signInHint":
    "Run gh auth login in a terminal, complete the sign-in flow, then check again.",
  "inbox.github.installHint":
    "Install GitHub CLI from cli.github.com, run gh auth login in a terminal, then check again.",
  "inbox.github.signInRequired": "Sign in required",
  "inbox.github.notInstalled": "Not installed",
  "inbox.github.installGuide": "Installation guide",
  "inbox.gitlab.connectionHint":
    "Connect GitLab.com or a self-managed GitLab instance. Use a personal access token with API access; the token is stored locally and Disconnect deletes it.",
  "inbox.gitlab.tokenLabel": "GitLab access token",
  "inbox.ado.connectionHint":
    "Connect your ADO organization with a personal access token (Boards + Repos read & write for comments). The token is stored locally and Disconnect deletes it.",
  "inbox.ado.tokenLabel": "Azure DevOps personal access token",
  "inbox.linear.apiKey": "API key",
  "inbox.linear.apiKeyHint":
    "Create a personal API key in Linear → Settings → Security & Access. Disconnect deletes it.",
  "inbox.linear.apiKeyLabel": "Linear API key",
  "inbox.linear.teams": "Teams",
  "inbox.linear.teamsHint": "Unchecked teams stay out of the inbox.",
  "settings.search.placeholder": "Search settings",
  "settings.search.clear": "Clear settings search",
  "settings.search.results": "Settings search results",
  "settings.search.noMatches": "No matching settings",
  "settings.search.page": "Page",
  "settings.search.row.language": "Language",
  "settings.search.row.remote-machines": "Your machines",
  "settings.search.row.mcp-servers": "MCP servers",
  "settings.search.row.project-worktrees": "Project worktrees",
  "settings.search.row.update": "Version",
  "settings.search.row.sounds": "Sounds",
  "settings.search.row.notifications": "Notifications",
  "settings.search.row.notes": "Notes",
  "settings.search.row.quick-composer": "Quick composer",
  "settings.search.row.working-agents": "Working agents",
  "settings.search.row.file-tabs": "File tabs",
  "settings.search.row.tab-animations": "Tab animations",
  "settings.search.row.close-to-tray": "Close to tray",
  "settings.search.row.theme": "Theme",
  "settings.search.row.accent-color": "Accent color",
  "settings.search.row.diff-colors": "Diff colors",
  "settings.search.row.hue": "Hue",
  "settings.search.row.saturation": "Saturation",
  "settings.search.row.dark-lightness": "Dark-mode lightness",
  "settings.search.row.sidebar-opacity": "Sidebar opacity",
  "settings.search.row.blur": "Blur radius",
  "settings.search.row.main-pane-glass": "Main pane glass",
  "settings.search.row.interface-scale": "Interface scale",
  "settings.search.row.collapsed-project-rail": "Collapsed project rail",
  "settings.search.row.show-excluded-files": "Show excluded files",
  "settings.search.row.chat-background": "Chat background",
  "settings.search.row.transcript-layout": "Transcript layout",
  "settings.search.row.anchor-prompts": "Anchor prompts to top",
  "settings.search.row.follow-up": "Follow-up behavior",
  "settings.search.row.model-controls": "Model controls",
  "settings.search.row.composer-mascot": "Composer mascot",
  "settings.search.row.format-on-save": "Format on save",
  "settings.search.row.diff-view": "Diff view",
  "settings.search.row.empty-session-games": "Empty session games",
  "settings.search.row.agent-clis": "Agent CLIs",
  "settings.search.row.provider-accounts": "Provider accounts",
  "settings.search.row.show-remaining-usage": "Show remaining usage",
  "settings.search.row.mask-emails": "Mask account emails",
  "settings.search.row.claude-hooks": "Claude Code hooks",
  "settings.search.row.project-notifications": "Project notifications",
  "settings.search.row.github": "GitHub",
  "settings.search.row.gitlab": "GitLab",
  "settings.search.row.azuredevops": "ADO",
  "settings.search.row.jira": "Jira",
  "settings.search.row.linear": "Linear",
  "settings.search.row.show-archived": "Show archived in the sidebar",

  "automations.title": "Automations",
  "automations.filter": "Filter automations",
  "automations.new": "New automation",
  "automations.noMatches": "No matching automations",
  "automations.empty": "No automations yet",
  "automations.pauseNamed": "Pause {name}",
  "automations.enableNamed": "Enable {name}",
  "automations.picker.description": "Pick an example or start from scratch.",
  "automations.picker.scratch": "Start from scratch",
  "automations.picker.scratchHint":
    "Write your own instructions and choose a trigger.",
  "automations.templateCategory.popular": "Popular",
  "automations.templateCategory.review": "Code Review",
  "automations.templateCategory.security": "Security",
  "automations.templateCategory.incidents": "Incidents & Triage",
  "automations.templateCategory.research": "Data & Research",
  "automations.templateCategory.environment": "Environment",
  "automations.openSession": "Open session",
  "automations.noSessionYet": "This run has no session yet",
  "automations.status.succeeded": "Succeeded",
  "automations.status.failed": "Failed",
  "automations.status.skipped": "Skipped",
  "automations.status.cancelled": "Cancelled",
  "automations.status.running": "Running",
  "automations.status.pending": "Pending",
  "automations.testRun": "Test run",
  "automations.category.time": "Scheduled",
  "automations.category.github": "GitHub",
  "automations.category.linear": "Linear",
  "automations.category.jira": "Jira",
  "automations.category.gitlab": "GitLab",
  "automations.category.azuredevops": "Azure DevOps",
  "automations.none": "None",
  "automations.removedFolder": "Removed folder",
  "automations.name": "Automation name",
  "automations.untitled": "Untitled",
  "automations.reset": "Reset",
  "automations.cancel": "Cancel",
  "automations.runNow": "Run now",
  "automations.save": "Save",
  "automations.create": "Create",
  "automations.pause": "Pause automation",
  "automations.enable": "Enable automation",
  "automations.active": "Active",
  "automations.inactive": "Inactive",
  "automations.actions": "Automation actions",
  "automations.delete": "Delete automation",
  "automations.view": "Automation view",
  "automations.settings": "Settings",
  "automations.history": "Run history",
  "automations.triggers": "Triggers",
  "automations.addTrigger": "Add Trigger",
  "automations.chooseTrigger": "Choose automation trigger",
  "automations.searchTriggers": "Search triggers",
  "automations.connectProvider": "Connect {provider} in Settings",
  "automations.notConnected": "Not connected",
  "automations.noMatchingTriggers": "No matching triggers",
  "automations.providerEvents": "{provider} events",
  "automations.instructions": "Instructions",
  "automations.instructionsHint":
    "Skills, @file references, and built-in commands work here.",
  "automations.session": "Session",
  "automations.workingCopy": "Working copy",
  "automations.workingCopyHint": "This repo, or a fresh worktree",
  "automations.workspace.current": "Current",
  "automations.workspace.worktree": "Fresh worktree",
  "automations.conversation": "Conversation",
  "automations.conversationHint": "New chat, or continue the last run",
  "automations.conversation.fresh": "Start fresh",
  "automations.conversation.reuse": "Continue last",
  "automations.sessionFolder": "Session folder",
  "automations.sessionFolderHint": "Where runs appear in the sidebar",
  "automations.advanced": "Advanced",
  "automations.catchUpHint": "Catch-up window for missed runs",
  "automations.missedRunGrace": "Missed-run grace",
  "automations.missedRunGraceHint": "Catch up if a scheduled run was missed",
  "automations.grace.0": "Do not catch up",
  "automations.grace.30": "30 minutes",
  "automations.grace.120": "2 hours",
  "automations.grace.720": "12 hours",
  "automations.grace.1440": "24 hours",
  "automations.history.trigger": "Trigger",
  "automations.history.triggered": "Triggered",
  "automations.history.status": "Status",
  "automations.history.duration": "Duration",
  "automations.neverRun": "This automation has not run yet.",
  "automations.noTrigger": "No trigger",
  "automations.removeTrigger": "Remove trigger",
  "automations.schedule.hourly": "Every hour at",
  "automations.schedule.daily": "Every day at",
  "automations.schedule.weekdays": "Every weekday at",
  "automations.schedule.weekly": "Every week on",
  "automations.day": "Day",
  "automations.at": "at",
  "automations.minute": "Minute",
  "automations.time": "Time",
  "automations.push": "Push",
  "automations.on": "on",
  "automations.branch": "Branch",
  "automations.selectBranch": "Select a branch",
  "automations.noBranches": "No branches found",
  "automations.chooseProject": "Choose a project first",
  "automations.by": "by",
  "automations.actor": "Actor",
  "automations.anyone": "Anyone",
  "automations.scheduleLabel.hourly": "Hourly at :{minute}",
  "automations.scheduleLabel.daily": "Daily at {time}",
  "automations.scheduleLabel.weekdays": "Weekdays at {time}",
  "automations.scheduleLabel.weekly": "{day} at {time}",
  "automations.nextRun": "Next run {date}",
  "sourceControl.loading": "Loading…",
  "sourceControl.loadDiffFailed": "Couldn’t load diff: {error}",
  "sourceControl.noStaged": "No staged changes",
  "sourceControl.noUnstaged": "No unstaged changes",
  "sourceControl.noProject": "No project folder",
  "sourceControl.loadChangesFailed": "Couldn’t load changes",
  "sourceControl.collapseGraph": "Collapse graph",
  "sourceControl.expandGraph": "Expand graph",
  "sourceControl.graph": "Graph",
  "sourceControl.noCommits": "No commits yet",
  "sourceControl.resizeGraph": "Resize graph",
  "sourceControl.newBranch": "New branch",
  "sourceControl.newBranchHint":
    "Create and check out a branch in this project.",
  "sourceControl.branchName": "Branch name",
  "sourceControl.cancel": "Cancel",
  "sourceControl.createBranch": "Create branch",
  "sourceControl.currentCommit": "Current commit{branch}",
  "sourceControl.createWorktree": "Create worktree",
  "sourceControl.worktreeHint":
    "An independent working copy of {cwd}. Existing uncommitted changes stay in their current working copy.",
  "sourceControl.branch": "Branch",
  "sourceControl.branchType": "Branch type",
  "sourceControl.createNewBranch": "Create a new branch",
  "sourceControl.useExistingBranch": "Use an existing local branch",
  "sourceControl.searchOptions": "Search options…",
  "sourceControl.existingBranch": "Existing branch",
  "sourceControl.newBranchName": "New branch name",
  "sourceControl.chooseBranch": "Choose a branch…",
  "sourceControl.searchLocalBranches": "Search local branches…",
  "sourceControl.noMatchingBranches": "No matching local branches",
  "sourceControl.startFrom": "Start from",
  "sourceControl.searchRefs": "Search branches and refs…",
  "sourceControl.createdIn": "Created in {root}",
  "sourceControl.deleteWorktreeQuestion": "Delete worktree?",
  "sourceControl.deleteWorktreeHint":
    "This permanently deletes the working copy and everything inside it.",
  "sourceControl.sessionsDeleted":
    "{count, plural, one {# session using this worktree is} other {# sessions using this worktree are}} permanently deleted.",
  "sourceControl.sessionsKept":
    "{count, plural, one {# session using this worktree is} other {# sessions using this worktree are}} kept. Select a branch or worktree to continue them.",
  "sourceControl.discardUncommitted":
    "All uncommitted and untracked changes here are discarded.",
  "sourceControl.discardUnchecked":
    "Changes could not be checked. Anything uncommitted here is discarded.",
  "sourceControl.branchKept": "The {branch} branch and its commits are kept.",
  "sourceControl.detachedBranchKept": "The branch is kept.",
  "sourceControl.unpushedKept":
    "{count, plural, one {# commit is} other {# commits are}} not on a remote. They stay on the branch.",
  "sourceControl.alsoDeleteSessions": "Also delete associated sessions",
  "sourceControl.deleteWorktreeAndSessions":
    "Delete worktree and {count, plural, one {session} other {sessions}}",
  "sourceControl.deleteWorktree": "Delete worktree",
  "sourceControl.createNamedBranch": "Create {branch}",
  "sourceControl.switchToBranch": "Switch to {branch}",
  "sourceControl.uncommittedChanges": "Uncommitted changes",
  "sourceControl.createBranchOverwrite":
    "Creating “{branch}” would overwrite your local changes. Stash them for later, or commit them on this branch first.",
  "sourceControl.switchBranchOverwrite":
    "Switching to “{branch}” would overwrite your local changes. Stash them for later, or commit them on this branch first.",
  "sourceControl.commitMessagePlaceholder": "Message ({shortcut} to commit)",
  "sourceControl.commitMessage": "Commit message",
  "sourceControl.cancelGenerateCommit": "Cancel commit message generation",
  "sourceControl.generateCommit": "Generate commit message",
  "sourceControl.commitSwitch": "Commit & switch",
  "sourceControl.stashSwitch": "Stash & switch",
  "automations.weekday.0": "Sunday",
  "automations.weekday.1": "Monday",
  "automations.weekday.2": "Tuesday",
  "automations.weekday.3": "Wednesday",
  "automations.weekday.4": "Thursday",
  "automations.weekday.5": "Friday",
  "automations.weekday.6": "Saturday",
  "automations.event.github.draft_opened": "Draft opened",
  "automations.event.github.pull_request_opened": "Pull request opened",
  "automations.event.github.issue_opened": "Issue opened",
  "automations.event.linear.issue_created": "Issue created",
  "automations.event.jira.issue_created": "Issue appeared",
  "automations.event.gitlab.merge_request_opened": "Merge request opened",
  "automations.event.gitlab.issue_opened": "Issue opened",
  "automations.event.azuredevops.pull_request_appeared":
    "Pull request appeared",
  "automations.event.azuredevops.work_item_appeared": "Work item appeared",
  "automations.event.time.hourly": "Hourly",
  "automations.event.time.daily": "Daily",
  "automations.event.time.weekdays": "Weekdays",
  "automations.event.time.weekly": "Weekly",

  "automations.template.find-critical-bugs.name": "Find critical bugs",
  "automations.template.find-critical-bugs.description":
    "Analyze recent commits for high-severity correctness bugs and submit safe fixes",
  "automations.template.find-critical-bugs.trigger": "Weekdays at 09:00",
  "automations.template.scan-vulnerabilities.name":
    "Scan codebase for vulnerabilities",
  "automations.template.scan-vulnerabilities.description":
    "Review the full repository on a schedule and alert on validated high-impact security issues",
  "automations.template.scan-vulnerabilities.trigger": "Monday at 10:00",
  "automations.template.generate-docs.name": "Generate docs",
  "automations.template.generate-docs.description":
    "Create and update developer documentation for recently changed or under-documented code",
  "automations.template.generate-docs.trigger": "Monday at 09:00",
  "automations.template.add-test-coverage.name": "Add test coverage",
  "automations.template.add-test-coverage.description":
    "Review recent changes and add tests for high-risk logic that lacks adequate coverage",
  "automations.template.add-test-coverage.trigger": "Weekdays at 11:00",
  "automations.template.review-pull-requests.name": "Review pull requests",
  "automations.template.review-pull-requests.description":
    "When a pull request is opened, review the diff for bugs, regressions, and missing tests",
  "automations.template.review-pull-requests.trigger": "Pull request opened",
  "automations.template.review-draft-prs.name": "Review draft PRs",
  "automations.template.review-draft-prs.description":
    "Give early feedback when a draft pull request is opened so issues are caught before review",
  "automations.template.review-draft-prs.trigger": "Draft opened",
  "automations.template.dependency-audit.name": "Audit dependencies",
  "automations.template.dependency-audit.description":
    "Check lockfiles and manifests for vulnerable, abandoned, or unexpectedly upgraded packages",
  "automations.template.dependency-audit.trigger": "Monday at 09:30",
  "automations.template.secret-scan.name": "Scan for secrets",
  "automations.template.secret-scan.description":
    "Search the working tree and recent history for committed credentials, tokens, and keys",
  "automations.template.secret-scan.trigger": "Monday at 09:30",
  "automations.template.triage-github-issues.name": "Triage GitHub issues",
  "automations.template.triage-github-issues.description":
    "When a GitHub issue is opened, inspect the repo and add a concrete reproduction or next step",
  "automations.template.triage-github-issues.trigger": "Issue opened",
  "automations.template.triage-new-issues.name": "Triage new issues",
  "automations.template.triage-new-issues.description":
    "When a Linear issue is created, inspect the repo and add a concrete reproduction or next step",
  "automations.template.triage-new-issues.trigger": "Issue created",
  "automations.template.failing-ci-watch.name": "Watch failing checks",
  "automations.template.failing-ci-watch.description":
    "On a weekday morning, run the project's tests and diagnose anything that is already red",
  "automations.template.failing-ci-watch.trigger": "Weekdays at 08:30",
  "automations.template.weekly-changelog.name": "Weekly changelog",
  "automations.template.weekly-changelog.description":
    "Summarize the week's commits into a changelog humans can actually read",
  "automations.template.weekly-changelog.trigger": "Friday at 16:00",
  "automations.template.repo-health.name": "Repo health check",
  "automations.template.repo-health.description":
    "Inspect the working tree, stale branches, and obvious project-setup drift on a schedule",
  "automations.template.repo-health.trigger": "Monday at 09:00",
  "automations.template.install-doctor.name": "Environment doctor",
  "automations.template.install-doctor.description":
    "Verify the project still installs and boots from a clean working copy",
  "automations.template.install-doctor.trigger": "Monday at 10:00",

  "sourceControl.pullComplete": "Pull complete",
  "sourceControl.noProjectFolder": "No project folder",
  "sourceControl.changes": "Changes",
  "sourceControl.branchActions": "Branch actions",
  "sourceControl.pullNeedsUpstream":
    "This branch needs a remote and upstream before it can pull",
  "sourceControl.pulling": "Pulling…",
  "sourceControl.prDefaultBranchConfirm":
    'Create a pull request from default branch "{branch}"?',
  "sourceControl.pushDefaultBranchConfirm":
    'Push to default branch "{branch}"?',
  "sourceControl.deleteUntrackedConfirm": "Delete untracked file {name}?",
  "sourceControl.discardFileConfirm":
    "Discard changes in {name}? This cannot be undone.",
  "sourceControl.discardAllConfirm":
    "Discard all unstaged changes in {count} files? This cannot be undone.",
  "sourceControl.delete": "Delete",
  "sourceControl.discard": "Discard",
  "sourceControl.amendPushedConfirm":
    "Amend a commit that is already pushed? MonoCode cannot push the result. You will need a force push from the terminal.",
  "sourceControl.prContentError": "Could not prepare pull request content",
  "sourceControl.amendMessagePlaceholder":
    "Amend message ({shortcut} to amend)",
  "sourceControl.amendCommit": "Amend Commit",
  "sourceControl.commitOptions": "Commit options",
  "sourceControl.commitPushCreatePr": "Commit, Push & Create PR",
  "sourceControl.amendLastCommit": "Amend Last Commit",
  "sourceControl.noUncommittedChanges": "No uncommitted changes",
  "sourceControl.loadingChanges": "Loading changes…",
  "sourceControl.stagedChanges": "Staged Changes",
  "sourceControl.openAllChanges": "Open All Changes",
  "sourceControl.unstageAllChanges": "Unstage All Changes",
  "sourceControl.discardAllChanges": "Discard All Changes",
  "sourceControl.stageAllChanges": "Stage All Changes",
  "sourceControl.divergedFrom": "Diverged from {upstream}",
  "sourceControl.unpushedCommits":
    "{count, plural, one {# unpushed commit} other {# unpushed commits}}",
  "sourceControl.incomingCommits":
    "{count, plural, one {# incoming commit} other {# incoming commits}}",
  "sourceControl.noFiles": "No files",
  "sourceControl.synchronizing": "Synchronizing Changes...",
  "sourceControl.publishNamedBranch": 'Publish Branch "{branch}"',
  "sourceControl.publishBranch": "Publish Branch",
  "sourceControl.pullAndPush":
    "Pull {behind} and push {ahead} commits between {dest}",
  "sourceControl.pullCommits":
    "Pull {count, plural, one {# commit} other {# commits}} from {dest}",
  "sourceControl.pushCommits":
    "Push {count, plural, one {# commit} other {# commits}} to {dest}",
  "sourceControl.createPrInto": "Create a pull request into {branch}",
  "sourceControl.createPr": "Create pull request",
  "sourceControl.viewPrDetails": "View PR #{number}: {title}",
  "sourceControl.viewPr": "View pull request",
  "sourceControl.syncChanges": "Sync Changes",
  "sourceControl.createPrShort": "Create PR",
  "sourceControl.viewPrNumber": "View PR #{number}",
  "sourceControl.viewPrShort": "View PR",
  "sourceControl.viewAsList": "View as List",
  "sourceControl.viewAsTree": "View as Tree",
  "sourceControl.unstageFolder": "Unstage Changes in {path}",
  "sourceControl.stageFolder": "Stage Changes in {path}",
  "sourceControl.discardChanges": "Discard Changes",
  "sourceControl.unstageChanges": "Unstage Changes",
  "sourceControl.stageChanges": "Stage Changes",
  "sourceControl.noFileChanges": "No file changes",
  "sourceControl.fileCount": "{count, plural, one {# file} other {# files}}",
  "sourceControl.expandAllFiles": "Expand all files",
  "sourceControl.collapseAllFiles": "Collapse all files",
  "sourceControl.diffTruncated":
    "Diff is too large to display in full. File list is shown without patches.",
  "sourceControl.discardFile": "Discard file",
  "sourceControl.stageFile": "Stage file",
  "sourceControl.binaryFileChanged": "Binary file changed",
  "sourceControl.diffTooLarge": "Diff is too large to display",
  "sourceControl.noTextualDiff": "No textual diff",
  "sourceControl.expandUpward": "Expand upward",
  "sourceControl.expandUnmodifiedUpward": "Expand unmodified lines upward",
  "sourceControl.expandDownward": "Expand downward",
  "sourceControl.expandUnmodifiedDownward": "Expand unmodified lines downward",
  "sourceControl.unmodifiedLines":
    "{count, plural, one {# unmodified line} other {# unmodified lines}}",
  "sourceControl.commentOnLine": "Comment on line {number}",
  "sourceControl.stageHunk": "Stage hunk",
  "sourceControl.addedCue": "Added: ",
  "sourceControl.removedCue": "Removed: ",
  "settings.update.available": "Version {version} is available.",
  "settings.update.downloading": "Downloading{progress}",
  "settings.update.checking": "Checking for updates…",
  "settings.update.current": "You're on the latest version.",
  "settings.update.failed": "Update check failed.",
  "settings.update.description":
    "MonoCode updates itself from the release feed.",
  "settings.update.version": "Version",
  "settings.update.whatsNew": "What's new",
  "settings.update.download": "Download",
  "settings.update.check": "Check for updates",
  "settings.chatBackground.title": "Chat background",
  "settings.chatBackground.description":
    "An image behind your chat panes. It stays on this device.",
  "settings.chatBackground.preview": "Empty chat preview at {percent}%",
  "settings.chatBackground.choose": "Choose an image",
  "settings.chatBackground.change": "Change",
  "settings.chatBackground.remove": "Remove",
  "settings.chatBackground.effect": "Background effect",
  "settings.chatBackground.effectName.none": "None",
  "settings.chatBackground.effectName.dither": "Dither",
  "settings.chatBackground.effectName.ascii": "ASCII",
  "settings.chatBackground.effectName.halftone": "Halftone",
  "settings.chatBackground.effectName.scanlines": "Scanlines",
  "settings.chatBackground.effectName.gradient-blur": "Haze",
  "settings.chatBackground.effectDescription.none":
    "Shows the original artwork.",
  "settings.chatBackground.effectDescription.dither":
    "Rebuilds the artwork with a dithered color palette.",
  "settings.chatBackground.effectDescription.ascii":
    "Recreates the artwork with colored characters on black.",
  "settings.chatBackground.effectDescription.halftone":
    "Recreates the artwork with colored print dots on black.",
  "settings.chatBackground.effectDescription.scanlines":
    "Adds a pronounced horizontal display-line texture.",
  "settings.chatBackground.effectDescription.gradient-blur":
    "Blurs and fades the artwork into the background below.",
  "settings.chatBackground.showOn": "Show on",
  "settings.chatBackground.showBackgroundOn": "Show background on",
  "settings.chatBackground.showOnDescription":
    "Empty sessions only, or every conversation.",
  "settings.chatBackground.emptyOnly": "Empty only",
  "settings.chatBackground.allSessions": "All sessions",
  "settings.chatBackground.emptyVisibility": "Empty chat visibility",
  "settings.chatBackground.emptyVisibilityDescription":
    "Background strength before a chat has messages.",
  "settings.chatBackground.sessionVisibility": "Session visibility",
  "settings.chatBackground.sessionVisibilityDescription":
    "Background strength once the conversation has messages.",
  "settings.usagePrivacy.title": "Usage and privacy",
  "settings.usagePrivacy.remaining": "Show remaining usage",
  "settings.usagePrivacy.remainingDescription":
    "Fill usage meters with what is left in each limit instead of what has been used.",
  "settings.usagePrivacy.maskEmails": "Mask account emails",
  "settings.usagePrivacy.maskEmailsDescription":
    "Blur account emails in Settings and the usage popover until you click one, so they stay out of screenshots.",
  "settings.accounts.saveError": "Could not save this account",
  "settings.accounts.removeConfirm":
    "Remove “{account}”? Its stored credentials will be deleted and any running turns for this account will stop. Existing conversations stay in history, but cannot continue until you switch accounts.",
  "settings.accounts.removeProvider": "Remove {provider} account",
  "settings.accounts.remove": "Remove account",
  "settings.accounts.cancel": "Cancel",
  "settings.accounts.removeError": "Could not remove this account",
  "settings.accounts.title": "Accounts",
  "settings.accounts.description":
    "Create isolated sign-ins for providers that support account profiles. Account switching stays available from the usage control in the footer.",
  "settings.accounts.count": "{count, plural, one {account} other {accounts}}",
  "settings.accounts.add": "Add account",
  "settings.accounts.providerCliProfile": "Provider CLI profile",
  "settings.accounts.isolatedProfile": "Isolated profile",
  "settings.accounts.default": "Default",
  "settings.accounts.renameNamed": "Rename {account}",
  "settings.accounts.rename": "Rename account",
  "settings.accounts.removeNamed": "Remove {account}",
  "settings.accounts.name": "Account name",
  "settings.accounts.namePlaceholder": "Work or Personal",
  "settings.accounts.newProvider": "New {provider} account",
  "settings.accounts.renameProvider": "Rename {provider} account",
  "settings.accounts.waitingBrowser": "Waiting for browser…",
  "settings.accounts.signInAdd": "Sign in and add",
  "settings.accounts.save": "Save",
  "sourceControl.commentOnLocation": "Comment on {location}",
  "sourceControl.cancelComment": "Cancel comment",
  "sourceControl.leaveComment": "Leave a comment…",
  "sourceControl.shortcutToAdd": "{shortcut} to add",
  "sourceControl.addToChat": "Add to chat",
  "settings.shortcuts.change": "Change {name} shortcut",
  "settings.shortcuts.record": "Record…",
  "settings.shortcuts.disabled": "Disabled",
  "settings.shortcuts.reset": "Reset {name} shortcut",
  "settings.shortcuts.recordHint": "Del disables · Esc cancels",
  "settings.shortcuts.quickComposerModifier":
    "Quick Composer needs ⌘ or Ctrl as a global hotkey",
  "settings.cli.codexInvalidVersion": "Codex CLI returned an invalid version.",
  "settings.cli.openCodeInvalidVersion":
    "OpenCode CLI returned an invalid version.",
  "settings.cli.openCodeTooOld":
    "OpenCode v{version} is too old. Upgrade to v{minimum} or newer.",
  "settings.cli.savePathError": "Could not save the binary path.",
  "settings.cli.showDetailsRestart":
    "Show {provider} CLI details, restart required",
  "settings.cli.showDetails": "Show {provider} CLI details",
  "settings.cli.pathRestart": "{provider} CLI path — restart required",
  "settings.cli.path": "{provider} CLI path",
  "settings.cli.globalPath": "Global path",
  "settings.cli.needsAttention": "Needs attention",
  "settings.cli.restartRequired": "Restart required",
  "settings.cli.configured": "Configured",
  "settings.cli.autoDetected": "Auto-detected",
  "settings.cli.pathLabel": "CLI path",
  "settings.cli.autoDetectedPath": "Auto-detected path",
  "settings.cli.pathHint":
    "Enter the absolute path to the CLI executable. Changes apply after restarting MonoCode.",
  "settings.cli.useAutoPath": "Use auto-detected path",
  "settings.cli.savePath": "Save path",
  "settings.cli.notResolved": "CLI could not be resolved",
  "settings.cli.checkingSelected": "Checking the selected CLI…",
  "settings.cli.retryCheck": "Retry to check this CLI",
  "settings.cli.checkingVersion": "Checking version…",
  "settings.cli.openLocationError": "Could not open the CLI location: {error}",
  "settings.cli.retryConfiguredNamed": "Retry {provider} configured path",
  "settings.cli.retryAutoNamed": "Retry {provider} auto-detect",
  "settings.cli.retryConfigured": "Retry configured path",
  "settings.cli.retryAuto": "Retry auto-detect",
  "settings.cli.openNamedLocation": "Open {provider} CLI location",
  "settings.cli.openLocation": "Open location",
  "settings.cli.editNamedPath": "Edit {provider} CLI path",
  "settings.cli.editPath": "Edit path",
  "settings.providers.availableModels":
    "{count, plural, one {# model available.} other {# models available.}}",
  "settings.providers.modelLabel": "{provider} model",
  "settings.providers.useByDefault": "Use by default",
  "settings.providers.hiddenGlobally": "Hidden globally",
  "settings.providers.showInPicker": "Show in picker",
  "settings.providers.showNamedInPicker": "Show {provider} in the model picker",
  "settings.color.default": "Default",
  "settings.color.blue": "Blue",
  "settings.color.violet": "Violet",
  "settings.color.pink": "Pink",
  "settings.color.red": "Red",
  "settings.color.orange": "Orange",
  "settings.color.green": "Green",
  "inbox.source": "Inbox source",
  "inbox.connectSource": "Connect an inbox source",
  "inbox.addConnection": "Add connection",
  "inbox.filter": "Filter inbox",
  "inbox.markAllRead": "Mark all as read",
  "inbox.readStatusError": "Could not save read status. Please try again.",
  "inbox.refresh": "Refresh",
  "inbox.connectHint": "Add a connection to start using the Inbox.",
  "inbox.noMatchingTrackerIssues": "No matching {source} issues",
  "inbox.noMatchingMergeRequests": "No matching issues or merge requests",
  "inbox.noMatchingPullRequests": "No matching issues or pull requests",
  "inbox.noTrackerIssuesFilter": "No {source} issues match these filters",
  "inbox.nothingNeedsAttention": "Nothing needs your attention",
  "inbox.noGitlabFilter": "No GitLab items match these filters",
  "inbox.noAdoFilter": "No ADO items match these filters",
  "inbox.noPullRequestsFilter":
    "No issues or pull requests match these filters",
  "inbox.noTrackerIssues": "No {source} issues",
  "inbox.openProjectHint": "Open a project to fill the inbox",
  "inbox.resizeList": "Resize inbox list",
  "inbox.title": "Inbox",
  "inbox.selectItem": "Select an inbox item",
  "inbox.reviewOnGitlab": "Review on GitLab",
  "inbox.reviewOnAdo": "Review on ADO",
  "inbox.reviewOnGithub": "Review on GitHub",
  "inbox.openInLinear": "Open in Linear",
  "inbox.openInJira": "Open in Jira",
  "inbox.openOnGitlab": "Open on GitLab",
  "inbox.openOnAdo": "Open on ADO",
  "inbox.openOnGithub": "Open on GitHub",
  "inbox.mergeRequest": "Merge request",
  "inbox.pullRequest": "Pull request",
  "inbox.noLink": "No link available",
  "inbox.unassigned": "Unassigned",
  "inbox.created": "Created {time}",
  "inbox.updated": "Updated {time}",
  "inbox.relatedThreads":
    "Related {count, plural, one {thread} other {threads}}",
  "inbox.openThread": "Open thread: {title}",
  "inbox.archived": "Archived",
  "inbox.sending": "Sending...",
  "inbox.sendToAgent": "Send to agent",
  "inbox.ask": "Ask",
  "inbox.mergeRequestSections": "Merge request sections",
  "inbox.pullRequestSections": "Pull request sections",
  "inbox.summary": "Summary",
  "inbox.code": "Code",
  "inbox.diffContext": "Diff context",
  "inbox.hunks": "Hunks",
  "inbox.fullFile": "Full file",
  "inbox.noDescription": "No description",
  "inbox.copied": "Copied",
  "inbox.copyBranchName": "Copy branch name",
  "inbox.chooseProject": "Choose project",
  "inbox.linkedItem": "Linked {kind} #{number}",
  "inbox.resizeLinkedPanel": "Resize linked {kind} panel",
  "inbox.closeLinkedPanel": "Close {kind} panel",
  "inbox.pr.thisBranch": "this branch",
  "inbox.pr.baseBranch": "the base branch",
  "inbox.pr.mergeQuestion": "Merge this pull request?",
  "inbox.pr.mergeDetail":
    "Every commit from {source} will be added to {destination} with a merge commit.",
  "inbox.pr.merge": "Merge pull request",
  "inbox.pr.merging": "Merging…",
  "inbox.pr.squashQuestion": "Squash and merge?",
  "inbox.pr.squashDetail":
    "The commits from {source} will be combined into one commit on {destination}.",
  "inbox.pr.squash": "Squash and merge",
  "inbox.pr.rebaseQuestion": "Rebase and merge?",
  "inbox.pr.rebaseDetail":
    "The commits from {source} will be rebased individually onto {destination}.",
  "inbox.pr.rebase": "Rebase and merge",
  "inbox.pr.draftQuestion": "Convert to draft?",
  "inbox.pr.draftDetail":
    "Reviewers will see that this pull request is not ready to merge.",
  "inbox.pr.convertDraft": "Convert to draft",
  "inbox.pr.converting": "Converting…",
  "inbox.pr.readyQuestion": "Mark as ready for review?",
  "inbox.pr.readyDetail":
    "Reviewers will see that this pull request is ready for feedback.",
  "inbox.pr.ready": "Ready for review",
  "inbox.pr.updating": "Updating…",
  "inbox.pr.closeQuestion": "Close this pull request?",
  "inbox.pr.closeDetail":
    "The pull request will close without merging. You can reopen it later.",
  "inbox.pr.close": "Close pull request",
  "inbox.pr.closing": "Closing…",
  "inbox.pr.reopenQuestion": "Reopen this pull request?",
  "inbox.pr.reopenDetail": "The pull request will return to the open state.",
  "inbox.pr.reopen": "Reopen pull request",
  "inbox.pr.reopening": "Reopening…",
  "inbox.pr.mergeQueued": "Merge queued or auto-merge enabled.",
  "inbox.pr.mergeOptions": "Merge options",
  "inbox.pr.mergeMethod": "Merge method",
  "inbox.pr.option.merge": "Create a merge commit",
  "inbox.pr.option.squash": "Squash and merge",
  "inbox.pr.option.rebase": "Rebase and merge",
  "inbox.pr.optionDescription.merge": "Add every commit to the base branch.",
  "inbox.pr.optionDescription.squash": "Combine the commits into one.",
  "inbox.pr.optionDescription.rebase":
    "Add the commits without a merge commit.",
  "inbox.status.open": "Open",
  "inbox.status.closed": "Closed",
  "inbox.status.draft": "Draft",
  "inbox.status.merged": "Merged",
  "inbox.newCue": ", new",
  "inbox.relatedThreadsCount":
    "{count, plural, one {# related thread} other {# related threads}}",
  "notes.filter": "Filter notes",
  "notes.new": "New note",
  "notes.noMatches": "No matching notes",
  "notes.empty":
    "No notes yet. Save a turn from the transcript, or create one here.",
  "notes.resizeList": "Resize notes list",
  "notes.title": "Notes",
  "notes.select": "Select a note",
  "notes.singular": "Note",
  "notes.noteTitle": "Note title",
  "notes.untitled": "Untitled",
  "notes.delete": "Delete",
  "notes.saveError": "Could not save note: {error}",
  "notes.retry": "Retry",
  "notes.sections": "Note sections",
  "notes.preview": "Preview",
  "notes.source": "Source",
  "notes.addingImages": "Adding images…",
  "notes.dropImages": "Drop images here",
  "notes.writeMarkdown": "Write markdown…",
  "notes.tags": "Tags",
  "notes.removeTag": "Remove #{tag}",
  "notes.addTag": "Add note tag",
  "notes.addTagPlaceholder": "Add tag…",
  "inbox.filters.needsAttention": "Needs attention",
  "inbox.filters.assignedToMe": "Assigned to me",
  "inbox.filters.status": "Status",
  "inbox.filters.time": "Time",
  "inbox.filters.time.all": "All time",
  "inbox.filters.time.today": "Today",
  "inbox.filters.time.7d": "Last 7 days",
  "inbox.filters.time.30d": "Last 30 days",
  "inbox.filters.type": "Type",
  "inbox.filters.mergeRequests": "Merge requests",
  "inbox.filters.pullRequests": "Pull requests",
  "inbox.filters.issues": "Issues",
  "inbox.filters.teams": "Teams",
  "inbox.filters.projects": "Projects",
  "inbox.filters.clear": "Clear filters",
  "inbox.descriptionMediaOnly": "Description is media only",
  "inbox.showLess": "Show less",
  "inbox.showFullDescription": "Show full description",
  "inbox.imageCount": "{count, plural, one {# image} other {# images}}",
  "inbox.changedFiles": "Changed files",
  "inbox.viewAllFiles": "View all {count}",
  "inbox.viewDiff": "View diff",
  "inbox.comments.count": "{count, plural, one {# comment} other {# comments}}",
  "inbox.comments.commitCount":
    "{count, plural, one {# commit} other {# commits}}",
  "inbox.comments.activity": "Activity",
  "inbox.comments.latestMore": "Latest comments · more on {source}",
  "inbox.comments.replyingTo": "Replying to {author}",
  "inbox.comments.comment": "Comment",
  "inbox.comments.cancelReply": "Cancel reply",
  "inbox.comments.writeReply": "Write a reply ({shortcut})",
  "inbox.comments.leaveComment": "Leave a comment ({shortcut})",
  "inbox.comments.posting": "Posting...",
  "inbox.comments.reply": "Reply",
  "inbox.comments.loading": "Loading comments",
  "inbox.comments.resolved": "Resolved",
  "inbox.comments.showMore": "Show more",
  "inbox.comments.approved": "approved",
  "inbox.comments.requestedChanges": "requested changes",
  "inbox.comments.reviewDismissed": "had a review dismissed",
  "inbox.comments.reviewed": "reviewed",
  "inbox.comments.addedCommits":
    "added {count, plural, one {a commit} other {# commits}}",
  "inbox.comments.openCommit": "Open commit",
  "inbox.checks.title": "Checks",
  "inbox.checks.tabLabel": "Checks: {description}",
  "inbox.checks.loading": "Loading checks",
  "inbox.checks.loadError": "Checks failed to load",
  "inbox.checks.state.pass": "Passed",
  "inbox.checks.state.fail": "Failed",
  "inbox.checks.state.pending": "In progress",
  "inbox.checks.state.cancel": "Cancelled",
  "inbox.checks.state.unknown": "Unknown",
  "inbox.checks.state.skipping": "Skipped",
  "inbox.checks.stateCount.pass": "{count} passed",
  "inbox.checks.stateCount.fail": "{count} failed",
  "inbox.checks.stateCount.pending": "{count} in progress",
  "inbox.checks.stateCount.cancel": "{count} cancelled",
  "inbox.checks.stateCount.unknown": "{count} unknown",
  "inbox.checks.stateCount.skipping": "{count} skipped",
  "inbox.checks.failedAt": "Failed at {step}",
  "inbox.checks.rowTitle": "{name} · {status}{duration}{workflow}",
  "inbox.checks.took": ", took {duration}",
  "inbox.checks.details": "{name} details",
  "inbox.checks.fixNamed": "Fix {name} with AI",
  "inbox.checks.fixWithAi": "Fix with AI",
  "inbox.checks.collapseDetails": "Collapse {name} details",
  "inbox.checks.expandDetails": "Expand {name} details",
  "inbox.checks.viewLog": "View full log on GitHub",
  "inbox.checks.viewNamed": "View {name} on GitHub",
  "inbox.checks.loadingSteps": "Loading steps…",
  "inbox.checks.loadDetailsError": "Could not load job details.",
  "inbox.checks.retryDetails": "Retry details",
  "inbox.checks.viewSteps": "View run steps",
  "inbox.checks.namedSteps": "{name} steps",
  "inbox.checks.retryLoading": "Retry loading checks",
  "inbox.checks.needsFix":
    "{count, plural, one {# check needs a fix} other {# checks need a fix}}",
  "inbox.checks.running":
    "{count, plural, one {# check is running} other {# checks are running}}",
  "inbox.checks.needsAttention":
    "{count, plural, one {# check needs attention} other {# checks need attention}}",
  "inbox.checks.passed": "Checks passed",
  "inbox.checks.noneRan": "No checks ran",
  "inbox.checks.prChecks": "Pull request checks",
  "inbox.checks.fixAllFailed": "Fix all failed",
  "inbox.checks.refresh": "Refresh checks",
  "inbox.checks.stale": "Saved results may be out of date.",
  "inbox.checks.filter": "Filter checks",
  "inbox.checks.attention": "Needs attention",
  "inbox.checks.all": "All checks",
  "inbox.checks.failuresFirst": "Failures first",
  "inbox.checks.noReported": "No checks reported",
  "inbox.notConnected": "Not connected",
  "inbox.connectNamed": "Connect {source}",
  "inbox.discussion.askAbout": "Ask about {item}",
  "inbox.discussion.resize": "Resize discussion",
  "inbox.discussion.title": "Ask · {item}",
  "inbox.discussion.restart": "Restart conversation",
  "inbox.discussion.close": "Close panel",
  "inbox.openInProvider": "Open in {provider}",
  "inbox.openItemInProvider": "Open {kind} {identifier} in {provider}",
  "inbox.remove": "Remove",
  "inbox.removeItem": "Remove {kind} {identifier}",
  "inbox.notifications.muteAll": "Mute all projects",
  "inbox.notifications.resume": "Resume muted projects",
  "inbox.notifications.settings": "Notification settings…",
  "inbox.notifications.muteProject": "Mute project notifications",
  "inbox.notifications.actions": "Inbox actions",
  "inbox.notifications.summary":
    "{count, plural, one {# project} other {# projects}} · {muted} muted",
  "inbox.repair.newChat": "New project chat",
  "inbox.repair.untitledChat": "Untitled chat",
  "inbox.repair.fixWithAi": "Fix with AI",
  "inbox.repair.fixChecksWithAi": "Fix checks with AI",
  "inbox.repair.closePicker": "Close fix picker",
  "inbox.repair.searchChats": "Search project chats",
  "inbox.repair.searchChatsPlaceholder": "Search chats...",
  "inbox.repair.projectChats": "Project chats",
  "inbox.repair.ciIncluded": "CI details included",
  "inbox.repair.preparing": "Preparing...",
  "inbox.repair.start": "Start fix",
  "inbox.repair.failedChecks": "{count} failed checks",
  "inbox.repair.noMatches": "No matching chats",
  "inbox.repair.waitLatest":
    "Wait for the latest checks before starting a fix.",
  "inbox.evidence.showMore": "Show {count} more annotations",
  "inbox.evidence.viewSource": "View source at the checked commit",
  "inbox.evidence.viewOnGithub": "View {location} on GitHub",
  "inbox.evidence.sourceAt": "Source at {commit}",
  "quickComposer.drag": "Drag to move",
  "quickComposer.close": "Close composer",
  "quickComposer.closeShortcut": "Close (Esc)",
  "quickComposer.dropAttach": "Drop to attach",
  "quickComposer.projectShortcut": "Project (⌘P)",
  "quickComposer.noProject": "No project",
  "quickComposer.attachments": "Attachments",
  "quickComposer.startSession": "Start a {provider} session in {project}…",
  "quickComposer.openProjectFirst": "Open a project in MonoCode first",
  "quickComposer.prompt": "Prompt",
  "quickComposer.attachmentsUnsupported":
    "Choose a provider that supports attachments, or remove the attached files.",
  "quickComposer.addAttachment": "Add attachment",
  "quickComposer.attachHint": "Attach files or take a screenshot",
  "quickComposer.attachUnsupportedHint":
    "This provider does not support attachments",
  "quickComposer.modelShortcut": "Model (⌘.)",
  "quickComposer.permissions": "Permissions",
  "quickComposer.addingAttachment": "Adding attachment…",
  "quickComposer.start": "start",
  "quickComposer.startAndOpen": "start and open",
  "quickComposer.saveDraft": "Save draft",
  "quickComposer.startCapital": "Start",
  "quickComposer.chooseFiles": "Choose files…",
  "quickComposer.screenshot": "Take screenshot…",
  "quickComposer.commands": "Commands",
  "quickComposer.noCommands": "No matching commands",
  "quickComposer.findProject": "Find a project",
  "quickComposer.projects": "Projects",
  "quickComposer.noMatches": "No matches",
  "quickComposer.loadingModel": "Loading model…",
  "quickComposer.modelSelector": "Model selector",
  "quickComposer.providers": "Providers",
  "quickComposer.favorites": "Favorites",
  "quickComposer.searchModels": "Search models",
  "quickComposer.searchModelsPlaceholder": "Search models…",
  "quickComposer.models": "Models",
  "quickComposer.removeFavorite": "Remove from favorites",
  "quickComposer.addFavorite": "Add to favorites",
  "quickComposer.removeModelFavorite": "Remove {model} from favorites",
  "quickComposer.addModelFavorite": "Add {model} to favorites",
  "quickComposer.noMatchingModels": "No matching models",
  "quickComposer.noFavoriteModels": "No favorite models",
  "quickComposer.loadingModels": "Loading models…",
  "quickComposer.fastMode": "Fast mode",
  "quickComposer.fastOff": "Turn off fast mode",
  "quickComposer.fastOn": "Turn on fast mode",
  "quickComposer.resetDefaults": "Reset to saved defaults",
  "projectSearch.noProject": "No project folder",
  "projectSearch.backToFiles": "Back to files",
  "projectSearch.title": "Search in files",
  "projectSearch.search": "Search",
  "projectSearch.matchCase": "Match case",
  "projectSearch.wholeWord": "Match whole word",
  "projectSearch.regex": "Use regular expression",
  "projectSearch.include": "files to include",
  "projectSearch.exclude": "files to exclude",
  "projectSearch.searching": "Searching…",
  "projectSearch.noResults": "No results",
  "projectSearch.resultCount":
    "{matches, plural, one {# result} other {# results}} in {files, plural, one {# file} other {# files}}",
  "projectSearch.limited": " (limited)",
  "projectSearch.hint": "Type to search across the project",
  "composer.queue.paused": "Queue paused because you interrupted",
  "composer.queue.resume": "Resume",
  "composer.queue.attachments":
    "{count, plural, one {# attachment} other {# attachments}}",
  "composer.queue.edit": "Edit queued message",
  "composer.queue.save": "Save queued message",
  "composer.queue.cancelEdit": "Cancel queued message edit",
  "composer.queue.steer": "Steer",
  "composer.queue.remove": "Remove queued message",
  "composer.addFilesOrMode": "Add files or choose a mode",
  "composer.addToMessage": "Add to message",
  "composer.uploadFile": "Upload file",
  "composer.attachFiles": "Attach files or images",
  "composer.updateHostAttachments":
    "Update this machine’s host to attach files",
  "composer.unsupportedAttachments": "{provider} does not support attachments",
  "composer.planMode": "Plan mode",
  "composer.planHint": "Review a plan before building",
  "composer.operatorHint": "Give this thread access to MonoCode",
  "composer.orchestratorHint": "Plan and coordinate agent work",
  "composer.draft": "Draft",
  "composer.draftHint": "Save this message without starting the agent",
  "composer.stopEditing": "Stop editing last message",
  "composer.cancelEdit": "Cancel edit",
  "quickComposer.permission.supervised.label": "Supervised",
  "quickComposer.permission.supervised.hint":
    "Ask before commands and file changes.",
  "quickComposer.permission.auto-accept-edits.label": "Auto-accept edits",
  "quickComposer.permission.auto-accept-edits.hint":
    "Auto-approve edits, ask before other actions.",
  "quickComposer.permission.auto.label": "Auto",
  "quickComposer.permission.auto.hint":
    "An AI reviewer can approve or deny actions.",
  "quickComposer.permission.full-access.label": "Full access",
  "quickComposer.permission.full-access.hint":
    "Allow commands, edits, and supported MCP confirmations in non-plan turns without prompts.",
  "quickComposer.newWorktree": "New worktree",
  "quickComposer.workspaceLabel": "Workspace {label}",
  "quickComposer.fromBase": "From {base}",
  "quickComposer.noRepo": "No repo",
  "quickComposer.loading": "Loading…",
  "quickComposer.createWorktreeFrom": "Create worktree from {base}",
  "quickComposer.chooseBranch": "Choose branch",
  "workspacePicker.existingWorktree": "Existing worktree…",
  "workspacePicker.openSettings": "Open worktree settings",
  "workspacePicker.settings": "Worktree settings",
  "workspacePicker.existingWorktrees": "Existing worktrees",
  "workspacePicker.createFrom": "Create from {branch}",
  "workspacePicker.createWorktreeFrom": "Create worktree from {branch}",
  "workspacePicker.from": "From {branch}",
  "workspacePicker.baseBranch": "Worktree base branch",
  "workspacePicker.searchBaseBranchesPlaceholder": "Search base branches…",
  "workspacePicker.searchBaseBranches": "Search base branches",
  "workspacePicker.baseBranches": "Base branches",
  "projectRail.pinned": "Pinned",
  "projectRail.groups": "Groups",
  "projectRail.resize": "Resize project sidebar",
  "projectRail.newGroup": "New project group",
  "projectRail.openProject": "Open project",
  "workspace.title": "Workspace",
  "fileTree.newFile": "New File",
  "fileTree.newFolder": "New Folder",
  "fileTree.collapseAll": "Collapse All",
  "worktrees.notGitRepository":
    "This project is not a Git repository. Select a Git project to create worktrees.",
  "projectMenu.newGroup": "New group…",
  "projectMenu.ungrouped": "Ungrouped",
  "projectMenu.background": "Background image",
  "projectMenu.moveToGroup": "Move to group",
  "projectMenu.unpin": "Unpin project",
  "projectMenu.pin": "Pin project",
  "projectMenu.revealFinder": "Reveal in Finder",
  "projectMenu.revealExplorer": "Reveal in File Explorer",
  "projectMenu.revealFolder": "Open Containing Folder",
  "projectMenu.openInEditor": "Open in editor",
  "projectMenu.lookingForEditors": "Looking for editors…",
  "projectMenu.noEditors": "No supported editors found",
  "projectMenu.muteNotifications": "Mute notifications",
  "projectMenu.notificationSettings": "Notification settings…",
  "projectMenu.archive": "Archive",
  "projectMenu.delete": "Delete",
  "projectMenu.notificationSaveError":
    "Could not save notification preferences. Please try again.",
  "projectMenu.resumeNotifications": "Resume notifications",
  "projectMenu.groupActions": "Project group actions",
  "projectMenu.deleteGroup": "Delete group",
  "projectMenu.deleteGroupDescription": "Projects will become ungrouped",
  "projectMenu.muteProjectNotifications": "Mute project notifications",
  "projectMenu.tabGroupActions": "Tab group actions",
  "projectMenu.groupName": "Group name",
  "projectMenu.changeLogo": "Change project logo",
  "projectMenu.addLogo": "Add project logo",
  "projectMenu.logo": "Project logo",
  "projectMenu.logoShown": "Shown in tabs and composer",
  "projectMenu.logoOptional": "Optional — replaces folder icon",
  "projectMenu.removeLogo": "Remove project logo",
  "projectMenu.mascot": "Mascot",
  "projectMenu.mascotNamed": "Mascot {name}",
  "projectMenu.action.new-tab": "New tab in group",
  "projectMenu.action.new-window": "Move group to new window",
  "projectMenu.action.close-group": "Close group",
  "projectMenu.action.ungroup": "Ungroup",
  "projectMenu.action.delete-group": "Delete group",
  "projectMenu.mutedUntilResumed": "Muted until resumed",
  "projectMenu.mutedUntil": "Muted until {date}",
  "projectMenu.untilResumed": "Until resumed",
  "projectMenu.chooseDateTime": "Choose date and time",
  "projectMenu.tomorrow": "Tomorrow, ",
  "projectMenu.hours": "{count, plural, one {# hour} other {# hours}}",
  "projectBackground.title": "Background Image",
  "projectBackground.description": "Choose a background image for {name}",
  "projectBackground.none": "No background selected",
  "projectBackground.changeImage": "Change image",
  "projectBackground.chooseImage": "Choose image",
  "projectBackground.overrideHint":
    "This image overrides the global background for this project.",
  "projectBackground.globalHint":
    "This project currently follows the global Appearance setting.",
  "projectBackground.effectLabel": "Project background effect",
  "projectBackground.showOnLabel": "Show project background on",
  "projectBackground.emptyVisibilityLabel":
    "Project background visibility in empty chats",
  "projectBackground.sessionVisibilityLabel":
    "Project background visibility in sessions",
  "projectBackground.removeImage": "Remove background image",
  "removeProject.aria": "Delete {name}",
  "removeProject.title": "Delete “{name}”?",
  "removeProject.description":
    "All conversations for this project will be deleted. It also leaves the sidebar. The folder on disk stays put, and opening it again brings the project back empty.",
  "removeProject.sessionCount":
    "{count, plural, one {# saved conversation will be removed.} other {# saved conversations will be removed.}}",
  "removeProject.cancel": "Cancel",
  "removeProject.delete": "Delete",
  "projectNotification.projectsMuted": "{muted} of {total} projects muted",
  "projectNotification.changeMuteDuration": "Change mute duration",
  "projectNotification.muteHint":
    "Mute pauses all project notifications without changing your category choices.",
  "projectNotification.muted": "Muted",
  "projectNotification.mute": "Mute",
  "projectNotification.muteAllFor": "Mute all notifications for",
  "projectNotification.validDateTime": "Choose a valid date and time.",
  "projectNotification.futureDateTime": "Choose a date and time in the future.",
  "projectNotification.muteUntil": "Mute all notifications until",
  "projectNotification.muteUntilThen": "Mute until then",
  "projectNotification.title": "Project notifications",
  "projectNotification.description":
    "Choose sounds, banners and sidebar indicators by category. Mute pauses them without changing your choices. Unread items stay marked in Inbox.",
  "projectNotification.done": "Done",
  "projectNotification.selectProjects": "Select projects",
  "projectNotification.empty":
    "Open a project or connect an Inbox provider to configure its notifications.",
  "projectNotification.selectAll": "Select all projects",
  "projectNotification.selectedCount": "{count} selected",
  "projectNotification.muteSelected": "Mute selected projects",
  "projectNotification.selectNamed": "Select {name}",
  "projectNotification.categoriesFor": "Notification categories for {name}",
  "projectNotification.localProject": "Local project · ",
  "projectNotification.allPaused": "All notifications paused",
  "projectNotification.allEnabled": "All categories enabled",
  "projectNotification.enabledCount": "{count} of {total} enabled",
  "projectNotification.mutedHint":
    "Your category choices apply when notifications resume. You can edit them while muted.",
  "projectNotification.categoryFor": "{category} for {name}",
  "projectNotification.category.pullRequests": "Pull requests / Merge requests",
  "projectNotification.category.issues": "Issues and Linear tasks",
  "projectNotification.category.agentFinished": "Agent finished",
  "projectNotification.category.agentInput": "Agent approvals and questions",
  "projectNotification.category.reminders": "Reminders",
  "fileTree.cut": "Cut",
  "fileTree.copy": "Copy",
  "fileTree.paste": "Paste",
  "fileTree.duplicate": "Duplicate",
  "fileTree.copyPath": "Copy Path",
  "fileTree.copyRelativePath": "Copy Relative Path",
  "fileTree.rename": "Rename",
  "fileTree.delete": "Delete",
  "fileTree.openInTerminal": "Open in Terminal",
  "dateTime.previousMonth": "Previous month",
  "dateTime.nextMonth": "Next month",
  "dateTime.day.monday": "Mo",
  "dateTime.day.tuesday": "Tu",
  "dateTime.day.wednesday": "We",
  "dateTime.day.thursday": "Th",
  "dateTime.day.friday": "Fr",
  "dateTime.day.saturday": "Sa",
  "dateTime.day.sunday": "Su",
  "dateTime.time": "Time",
  "dateTime.timeHint": "Local time, 24-hour",
  "composer.queue.failed":
    "A message couldn't be sent",
  "composer.queue.messagesPaused":
    "Messages paused",
  "composer.queue.retry":
    "Retry",
  "composer.queue.sending":
    "Sending…",
  "composer.queue.waiting":
    "Waiting to send",
  "composer.queue.sessionsFinished":
    "{count, plural, one {# session finished} other {# sessions finished}}",
  "composer.queue.sessionStatus":
    "{status, select, completed {Session completed: {title}} failed {Session failed: {title}} cancelled {Session cancelled: {title}} other {Session {status}: {title}}}",

  "transcript.jumpToLatest":
    "Jump to latest",


  "worktreeSwitcher.projectFolder":
    "Project folder",
  "worktreeSwitcher.projectFolderDetail":
    "Project folder · all sessions",
  "worktreeSwitcher.detachedSha":
    "Detached {sha}",
  "worktreeSwitcher.detachedWorktree":
    "Detached worktree",
  "worktreeSwitcher.detached":
    "detached",
  "worktreeSwitcher.switch":
    "Switch working copy",
  "worktreeSwitcher.creating":
    "Creating worktree",
  "worktreeSwitcher.switching":
    "Switching working copy",
  "worktreeSwitcher.list":
    "Working copies",
  "worktreeSwitcher.search":
    "Search working copies",
  "worktreeSwitcher.placeholder":
    "Search or create a worktree...",
  "worktreeSwitcher.loading":
    "Loading working copies…",
  "worktreeSwitcher.noMatch":
    "No matching working copies",
  "worktreeSwitcher.create":
    "Create worktree {name}",
  "worktreeSwitcher.openTabs":
    "{count, plural, one {# open tab} other {# open tabs}}{busy, select, true {, working} other {}}",

  "projectBackground.lockedHint":
    "Shown behind {name}'s chat, dimmed with the Haze effect.",

  "monos.intro.aria":
    "Meet Monos",
  "monos.intro.title":
    "Meet Monos",
  "monos.experimental":
    "Experimental",
  "monos.intro.body":
    "Agents of your own that live on the rail and work across your projects. They remember what matters and pick up habits they run on their own.",
  "monos.intro.create":
    "Create your mono",
  "monos.intro.later":
    "Not now",
  "monos.header.greetingProjects":
    "I can see every session, note and folder in {projects}. Ask what’s going on, or hand me work.",
  "monos.header.greetingNoProjects":
    "Add the projects I should work on from my details, or just ask me something.",
  "monos.status.working":
    "Working",
  "monos.status.needs-you":
    "Needs you",
  "monos.status.idle":
    "Idle",
  "monos.activity.label":
    "{name} activity",
  "monos.activity.title":
    "Activity",
  "monos.activity.working":
    "Working",
  "monos.activity.finished":
    "Finished",
  "monos.sidebar.hide":
    "Hide {title}",
  "monos.sidebar.resize":
    "{kind, select, activity {Resize Mono activity} other {Resize Mono details}}",
  "monos.projects.remove":
    "Remove {name}",
  "monos.projects.add":
    "Add project",
  "monos.projects.addLabel":
    "Add a project",
  "monos.projects.all":
    "It already works on every project.",
  "monos.confirm.cancel":
    "Cancel",
  "monos.confirm.resetting":
    "Resetting…",

  "monos.back":
    "Back",
  "monos.color.blue":
    "Blue",
  "monos.color.coral":
    "Coral",
  "monos.color.yellow":
    "Yellow",
  "monos.color.green":
    "Green",
  "monos.color.pink":
    "Pink",
  "monos.color.purple":
    "Purple",
  "monos.color.teal":
    "Teal",
  "monos.color.orange":
    "Orange",
  "monos.color.indigo":
    "Indigo",
  "monos.file.conflict":
    "{author} changed this while you were editing.",
  "monos.file.useTheirs":
    "Use theirs",
  "monos.file.keepMine":
    "Keep mine",
  "monos.memory.notLoading":
    "{count, plural, one {# line not loading} other {# lines not loading}}",
  "monos.memory.lines":
    "{used} / {max} lines",
  "monos.details.title":
    "Details",
  "monos.details.label":
    "{name} details",
  "monos.details.model":
    "Model",
  "monos.details.projects":
    "Projects",
  "monos.habits.title":
    "Habits",
  "monos.habits.atMost":
    "At most {max} habits",
  "monos.habits.new":
    "New habit",

  "monos.settings.title":
    "Settings",
  "monos.settings.soul":
    "Soul",
  "monos.settings.soulDescription":
    "Defines who this bot is and the rules it follows. Always included in its context.",
  "monos.settings.habits":
    "Habits",
  "monos.settings.habitsDescription":
    "Recurring tasks this bot runs on its own.",
  "monos.settings.memory":
    "Memory",
  "monos.settings.memoryDescription":
    "Facts and preferences this bot remembers.",
  "monos.reset.label":
    "Reset conversation",
  "monos.reset.title":
    "Reset {name}'s conversation?",
  "monos.reset.body":
    "All messages in this Mono's conversation will be deleted and any active reply will be stopped. This can't be undone.",
  "monos.reset.kept":
    "Its soul, memory and habits will be kept.",
  "monos.reset.failure":
    "Could not reset the conversation.",
  "monos.reset.hint":
    "Clear all messages and start fresh",
  "monos.name":
    "Name",
  "monos.habit.runningNow":
    "Running now ·",
  "monos.habit.starting":
    "Starting…",
  "monos.habit.pausedSchedule":
    "Paused · {schedule}",
  "monos.habit.alreadyRunning":
    "Already running",
  "monos.habit.startingShort":
    "Starting",
  "monos.habit.runNow":
    "Run now",
  "monos.habit.pause":
    "Pause",
  "monos.habit.resume":
    "Resume",
  "monos.habit.remove":
    "Remove",
  "monos.habit.loading":
    "Loading…",
  "monos.habit.none":
    "No habits yet",
  "monos.habit.upcoming":
    "Upcoming",
  "monos.habit.done":
    "Done",

  "monos.run.posted":
    "Messaged you",
  "monos.run.quiet":
    "Nothing to report",
  "monos.run.failed":
    "Couldn't finish",
  "monos.when.today":
    "Today {time}",
  "monos.habit.paused":
    "Paused",
  "monos.habit.runs":
    "Runs",
  "monos.habit.next":
    "Next",
  "monos.habit.whatItDoes":
    "What it does",
  "monos.habit.recentRuns":
    "Recent runs",
  "monos.habit.neverRan":
    "It hasn't run yet.",
  "monos.habit.runningNowRow":
    "Running now",
  "monos.habit.create":
    "Create",
  "monos.habit.kind.daily":
    "Daily",
  "monos.habit.kind.weekdays":
    "Weekdays",
  "monos.habit.kind.weekly":
    "Weekly",
  "monos.habit.kind.hourly":
    "Hourly",
  "monos.habit.repeats":
    "Repeats",
  "monos.habit.on":
    "on",
  "monos.habit.day":
    "Day",
  "monos.habit.at":
    "at",
  "monos.habit.minute":
    "Minute",
  "monos.habit.time":
    "Time",
  "monos.habit.instructionsPlaceholder":
    "What it should do on each run, and when it's worth telling you about.",
  "monos.habit.addFailed":
    "Could not add the habit.",

  "monos.soul.label":
    "{name} soul",
  "monos.soul.placeholder":
    "Who it is, and what it should always keep in mind",
  "monos.memory.changed":
    "This memory changed or is ambiguous. Check it before trying again.",
  "monos.memory.conflict":
    "Memory kept changing while saving. Your edit was not saved; try again.",
  "monos.memory.add":
    "Add memory",
  "monos.memory.nothing":
    "Nothing remembered yet",
  "monos.memory.new":
    "New memory",
  "monos.memory.newPlaceholder":
    "Something it should remember",
  "monos.memory.edit":
    "Edit memory",
  "monos.memory.editShort":
    "Edit",
  "monos.memory.forget":
    "Forget: {text}",
  "monos.usage.chooseModel":
    "Choose another model",
  "monos.usage.chooseAccount":
    "Choose another account",

  "monos.composer.dropFiles":
    "Drop files to attach",
  "monos.composer.nothingDropped":
    "Nothing to attach from that drop — the file may have been moved, renamed, or deleted.",
  "monos.composer.message":
    "Message {name}",
  "monos.composer.send":
    "Send",
  "monos.composer.reading":
    "Reading attachments…",
  "monos.rail.title":
    "Monos",
  "monos.rail.new":
    "New mono",
  "monos.rail.noProjects":
    "No projects yet",
  "monos.rail.options":
    "Mono options",
  "monos.rail.optionsNamed":
    "{name} options",
  "monos.rail.nameLabel":
    "Mono name",
  "monos.rail.delete":
    "Delete mono…",

  "monos.page.title":
    "Monos",
  "monos.page.show":
    "Show monos",
  "monos.page.showDescription":
    "Agents of your own on the project rail. Each works on the projects you give it, remembers what matters and picks up habits it runs on its own. Turn this off to hide them.",
  "monos.page.yours":
    "Your monos",
  "monos.page.yoursDescription":
    "Add one with the plus beside Monos on the rail. Choose its projects from its details.",
  "monos.page.none":
    "No monos yet.",
  "monos.row.worksOn":
    "Works on {projects}",
  "monos.row.resetLabel":
    "Reset Mono",
  "monos.row.resetTitle":
    "Reset {name} to its defaults?",
  "monos.row.resetBody":
    "Its soul goes back to the default and its name to {defaultName}. Changes to its soul can't be recovered.",
  "monos.row.resetKept":
    "Its conversation, projects, memory and habits will be kept.",
  "monos.row.resetFailure":
    "Could not reset the Mono.",
  "monos.row.resetDefaults":
    "Reset to defaults",
  "monos.row.resetNamed":
    "Reset {name} to defaults",
  "settings.search.row.monos-enabled":
    "Show monos",
  "settings.search.row.mono-list":
    "Your monos",

  "monos.composer.attach":
    "Attach files",
} satisfies Record<string, string>;

export type MessageKey = keyof typeof en;
