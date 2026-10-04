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
  "rail.settings": "Réglages",
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

  "appearance.theme.title": "Thème",
  "appearance.theme.description":
    "Les thèmes sombre et clair partagent la même teinte, donc les réglages de couleur ci-dessous s'appliquent aux deux.",
  "appearance.theme.label": "Thème",
  "appearance.theme.description.row": "Système suit l'apparence du système d'exploitation.",
  "appearance.theme.system": "Système",
  "appearance.theme.dark": "Sombre",
  "appearance.theme.light": "Clair",
  "appearance.accentColor.label": "Couleur d'accent",
  "appearance.accentColor.description":
    "Utilisée pour le bouton d'envoi du compositeur et vos bulles de message.",
  "appearance.diffColors.label": "Couleurs des différences",
  "appearance.diffColors.description":
    "Couleurs pour les lignes ajoutées et supprimées. Daltonien et Contraste élevé utilisent du bleu et de l'orange au lieu du vert et du rouge ; Contraste élevé ajoute des teintes et du texte plus marqués.",
  "appearance.diffColors.default": "Par défaut",
  "appearance.diffColors.colorblind": "Daltonien",
  "appearance.diffColors.highContrast": "Contraste élevé",

  "appearance.color.title": "Couleur",
  "appearance.color.description":
    "La teinte et la saturation colorent chaque surface. La luminosité n'affecte que le thème sombre.",
  "appearance.hue.label": "Teinte",
  "appearance.hue.description": "Teinte de base pour les accents et les surfaces colorées.",
  "appearance.saturation.label": "Saturation",
  "appearance.saturation.description":
    "À quel point la teinte colore l'interface. Zéro la garde neutre.",
  "appearance.darkLightness.label": "Luminosité du mode sombre",
  "appearance.darkLightness.description.glassDisabled":
    "Ceci n'affecte que le mode sombre. Votre valeur du mode sombre est préservée.",
  "appearance.darkLightness.description":
    "Luminosité de base du thème sombre. Des valeurs plus basses sont plus sombres ; zéro est noir pur.",

  "appearance.translucency.title": "Translucidité",
  "appearance.translucency.description.glassDisabled":
    "Le mode clair utilise toujours une fenêtre opaque, donc ces réglages sont désactivés. Vos valeurs du mode sombre sont préservées.",
  "appearance.translucency.description":
    "Quelle part du bureau transparaît à travers MonoCode. Le flou coûte plus cher à afficher plus il est élevé.",
  "appearance.sidebarOpacity.label": "Opacité de la barre latérale",
  "appearance.sidebarOpacity.description":
    "S'applique à la barre des projets et aux autres surfaces vitrées.",
  "appearance.blur.label": "Rayon de flou",
  "appearance.blur.description": "Flou d'arrière-plan derrière la fenêtre.",
  "appearance.mainPaneGlass.label": "Verre du panneau principal",
  "appearance.mainPaneGlass.description":
    "Étend l'effet translucide au panneau principal derrière les sessions et les éditeurs.",

  "appearance.layout.title": "Mise en page",
  "appearance.collapsedProjectRail.label": "Barre de projets repliée",
  "appearance.collapsedProjectRail.description":
    "Garder la navigation des projets disponible sous forme de barre d'icônes compacte, ou masquer complètement la barre.",
  "appearance.collapsedProjectRail.iconRail": "Barre d'icônes",
  "appearance.collapsedProjectRail.hidden": "Masquée",
  "appearance.interfaceScale.label": "Échelle de l'interface",
  "appearance.interfaceScale.description":
    "Zoome toute l'interface. Vous pouvez aussi utiliser Ctrl+=, Ctrl+- et Ctrl+0 (Cmd sur macOS).",
  "appearance.showExcludedFiles.label": "Afficher les fichiers exclus",
  "appearance.showExcludedFiles.description":
    "Afficher les fichiers et dossiers exclus par Git, comme les fichiers de build et les dépendances, dans l'explorateur.",
};
