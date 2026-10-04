import type { MessageKey } from "./en";

/** French UI strings. Keys must stay in sync with en.ts. */
export const fr: Record<MessageKey, string> = {
  "menuBar.file": "Fichier",
  "menuBar.view": "Affichage",
  "menuBar.terminal": "Terminal",

  "menuBar.file.newTab": "Nouvel onglet",
  "menuBar.file.newTerminal": "Nouveau terminal",
  "menuBar.file.newWindow": "Nouvelle fenêtre",
  "menuBar.file.autosave": "Enregistrement automatique",
  "menuBar.file.openProject": "Ouvrir un projet…",
  "menuBar.file.search": "Rechercher…",
  "menuBar.file.goToFile": "Aller au fichier…",
  "menuBar.file.findInFiles": "Rechercher dans les fichiers…",
  "menuBar.file.closePane": "Fermer le panneau",
  "menuBar.file.closeOtherTabs": "Fermer les autres onglets",
  "menuBar.file.closeAllTabs": "Fermer tous les onglets",
  "menuBar.file.checkForUpdates": "Vérifier les mises à jour…",

  "menuBar.view.toggleSidebar": "Afficher/masquer la barre latérale",
  "menuBar.view.toggleSessionSidebar": "Afficher/masquer les sessions",
  "menuBar.view.inbox": "Boîte de réception",
  "menuBar.view.notes": "Notes",
  "menuBar.view.toggleTerminal": "Afficher/masquer le terminal",
  "menuBar.view.switchModel": "Changer de modèle…",
  "menuBar.view.toggleChanges": "Afficher/masquer les modifications",
  "menuBar.view.zoomIn": "Zoomer",
  "menuBar.view.zoomOut": "Dézoomer",
  "menuBar.view.resetZoom": "Réinitialiser le zoom",

  "menuBar.terminal.newTerminal": "Nouveau terminal",
  "menuBar.terminal.toggleTerminal": "Afficher/masquer le terminal",

  "settings.language.label": "Langue",
  "settings.language.english": "Anglais",
  "settings.language.french": "Français",

  "settings.nav.group.app": "Application",
  "settings.nav.group.agents": "Agents",
  "settings.nav.group.workspace": "Espace de travail",
  "settings.nav.general": "Général",
  "settings.nav.connections": "Connexions",
  "settings.nav.appearance": "Apparence",
  "settings.nav.keybindings": "Raccourcis clavier",
  "settings.nav.chat": "Discussion",
  "settings.nav.providers": "Fournisseurs",
  "settings.nav.mcp": "MCP",
  "settings.nav.skills": "Compétences",
  "settings.nav.inbox": "Boîte de réception",
  "settings.nav.archive": "Archives",
  "settings.nav.worktrees": "Worktrees",
  "settings.nav.back": "Retour",

  "settings.general.language.title": "Langue",
  "settings.general.language.description":
    "Choisissez la langue utilisée dans toute l'application.",

  "settings.general.alerts.title": "Alertes",
  "settings.general.alerts.description":
    "Comment MonoCode vous prévient lorsque vous regardez ailleurs.",
  "settings.general.sounds.label": "Sons",
  "settings.general.sounds.description":
    "Signaux courts pour l'activité des projets, les tours terminés et les mises à jour disponibles. Choisissez les catégories de notification par projet dans les réglages de la boîte de réception. Les changements et la copie en fin de tour émettent aussi un son.",
  "settings.general.notifications.label": "Notifications",
  "settings.general.notifications.description":
    "Notifie lorsqu'un rappel est dû, ou qu'un agent termine ou a besoin d'une saisie dans une autre session, ou encore lorsque MonoCode est en arrière-plan. Cliquez sur la notification pour ouvrir cette session.",
  "settings.general.notifications.unsupported": "Non disponible sur cette plateforme",

  "settings.general.workspace.title": "Espace de travail",
  "settings.general.workspace.description":
    "Comment la navigation entre projets et les onglets de l'espace de travail se comportent.",
  "settings.general.fileTabs.label": "Onglets de fichiers",
  "settings.general.fileTabs.description":
    "Ouvrez les fichiers à côté de la discussion active, ou donnez à chaque fichier un onglet classique dans la barre du haut. Les fichiers de la barre du haut peuvent quand même être combinés en vues scindées.",
  "settings.general.fileTabs.besideChat": "À côté de la discussion",
  "settings.general.fileTabs.topBar": "Barre du haut",
  "settings.general.tabAnimations.label": "Animations des onglets",
  "settings.general.tabAnimations.description":
    "Anime les onglets à l'ouverture et à la fermeture. Désactivez pour des changements d'onglets instantanés.",
  "settings.general.notes.label": "Notes",
  "settings.general.notes.description":
    "Un carnet markdown global sur la barre latérale des projets. Enregistrez un tour terminé depuis la transcription, puis mentionnez-le plus tard avec @note ou ajoutez-le à la discussion.",
  "settings.general.quickComposer.label": "Compositeur rapide",
  "settings.general.quickComposer.description":
    "Appuyez sur {shortcut} dans n'importe quelle app pour faire flotter un prompt au-dessus et démarrer une session sans basculer vers MonoCode. Changez le raccourci dans Raccourcis clavier. Entrée la démarre en arrière-plan ; ⌘Entrée la démarre et ramène la session au premier plan.",
  "settings.general.workingAgents.label": "Agents en cours",
  "settings.general.workingAgents.description":
    "Quand deux discussions ou plus sont en cours, une carte sur la barre latérale des projets les liste pour naviguer entre les projets. Les tours terminés restent jusqu'à ce que vous ouvriez cette session.",
  "settings.general.closeToTray.label": "Fermer dans la barre système",
  "settings.general.closeToTray.description":
    "Fermer une fenêtre la cache dans la barre système au lieu de quitter, pour que les agents en cours continuent de tourner. Rouvrez depuis l'icône de la barre système, et quittez réellement depuis son menu. Désactivez pour que fermer termine la fenêtre.",

  "settings.general.about.title": "À propos",

  "rail.search": "Rechercher",
  "rail.inbox": "Boîte de réception",
  "rail.inboxNewItems": "Boîte de réception, nouveaux éléments",
  "rail.notes": "Notes",
  "rail.automations": "Automatisations",
  "rail.projects": "Projets",
  "rail.noProjectsYet": "Pas encore de projet",

  "workspace.tab.sessions": "Sessions",
  "workspace.tab.explorer": "Explorateur",
  "workspace.tab.changes": "Modifications",
  "workspace.tab.stagedChanges": "Modifications indexées",
  "workspace.searchConversations": "Rechercher dans les conversations...",

  "workspace.currentCheckout": "Checkout actuel",
  "workspace.newWorktree": "Nouveau worktree",

  "branchPicker.noRepo": "Pas de dépôt",
  "branchPicker.noGitRepository": "Pas de dépôt git",
  "branchPicker.loadingBranch": "Chargement de la branche…",

  "composer.placeholder": "Demandez, construisez, / pour les commandes, @ pour les références... ",
  "composer.placeholder.worktreeRemoved":
    "Sélectionnez une branche ou un worktree pour continuer…",
  "composer.placeholder.inboxCard": "Ajoutez une note, ou envoyez pour commencer…",
  "composer.placeholder.noteCard": "Ajoutez un message, ou envoyez…",
  "composer.placeholder.handoffCard": "Ajoutez du contexte, ou envoyez pour continuer…",
};
