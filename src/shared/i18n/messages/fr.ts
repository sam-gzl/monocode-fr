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

  "settings.page.general.description":
    "La version que vous utilisez, comment MonoCode vous contacte, et les panneaux affichés.",
  "settings.page.connections.description":
    "Connectez vos machines et lancez des agents à distance via SSH.",
  "settings.page.appearance.description":
    "Thème, teinte, translucidité, mise en page de l'espace de travail et arrière-plans des conversations.",
  "settings.page.keybindings.description":
    "Tous les raccourcis gérés par l'espace de travail, depuis le menu de l'app et le gestionnaire de touches.",
  "settings.page.chat.description":
    "Comment les transcriptions s'affichent, ce que fait le compositeur avec un suivi, comment les fichiers s'enregistrent et comment les différences s'ouvrent.",
  "settings.page.providers.description":
    "Comptes fournisseurs, CLI d'agents que MonoCode peut piloter, et le modèle avec lequel les nouvelles sessions démarrent.",
  "settings.page.mcp.description":
    "Trouvez les serveurs MCP de tous les fournisseurs et gérez leurs connexions.",
  "settings.page.skills.description":
    "Découvrez et gérez les compétences de fichiers depuis les dossiers du projet, personnels et du harnais.",
  "settings.page.inbox.description":
    "Gérez les services de la boîte de réception et les préférences de notification pour chaque projet.",
  "settings.page.archive.description":
    "Projets et conversations que vous avez archivés.",
  "settings.page.worktrees.description":
    "Gérez les worktrees supplémentaires pour chaque projet.",

  "settings.restoreDefaults": "Réinitialiser",

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

  "keybindings.title": "Raccourcis",
  "keybindings.description":
    "Cliquez sur un raccourci pour enregistrer de nouvelles touches. Appuyez sur Suppr pendant l'enregistrement pour le désactiver.",
  "keybindings.bindingCount.one": "raccourci",
  "keybindings.bindingCount.other": "raccourcis",
  "keybindings.filter.placeholder": "Filtrer",
  "keybindings.filter.ariaLabel": "Filtrer les raccourcis",
  "keybindings.column.command": "Commande",
  "keybindings.column.keybinding": "Raccourci",
  "keybindings.column.when": "Quand",
  "keybindings.noMatches": "Aucun raccourci correspondant",

  "chat.transcript.title": "Transcription",
  "chat.transcript.description": "Comment une conversation se lit en grandissant.",
  "chat.transcriptLayout.label": "Mise en page de la transcription",
  "chat.transcriptLayout.description":
    "Pleine largeur garde les prompts utilisateur comme une carte étendue. Discussion les aligne à droite avec une largeur maximale, comme une app de messagerie.",
  "chat.transcriptLayout.full": "Pleine largeur",
  "chat.transcriptLayout.chat": "Discussion",
  "chat.anchorPrompts.label": "Ancrer les prompts en haut",
  "chat.anchorPrompts.description":
    "Quand vous envoyez, le nouveau prompt se place en haut de la transcription et la réponse grandit dans l'espace en dessous. Désactivez pour garder la mise en page classique, avec le dernier message posé sur le compositeur.",

  "chat.composer.title": "Compositeur",
  "chat.composer.description": "Ce que fait le compositeur avec ce que vous tapez.",
  "chat.followUp.label": "Comportement du suivi",
  "chat.followUp.description":
    "Mettez les suivis en file jusqu'à la fin du tour actif, ou orientez le tour actif immédiatement.",
  "chat.followUp.queue": "File",
  "chat.followUp.steer": "Orienter",
  "chat.modelControls.label": "Contrôles du modèle",
  "chat.modelControls.description":
    "Affiche les options du modèle à côté du sélecteur plutôt que dans le menu du modèle.",
  "chat.modelControls.menu": "Menu",
  "chat.modelControls.beside": "À côté",

  "chat.editor.title": "Éditeur",
  "chat.editor.description":
    "Ce qui se passe quand vous enregistrez un fichier dans l'éditeur de l'espace de travail.",
  "chat.formatOnSave.label": "Formater à l'enregistrement",
  "chat.formatOnSave.description":
    "Exécute Prettier sur les fichiers pris en charge avant d'écrire. Désactivé garde le texte que vous avez tapé, y compris le style de guillemets.",

  "chat.codeReview.title": "Revue de code",
  "chat.codeReview.description":
    "Où s'ouvrent les modifications d'un tour quand vous allez les lire.",
  "chat.diffView.label": "Vue des différences",
  "chat.diffView.description":
    "Éditeur garde les modifications de l'arbre de travail dans le fichier. Unifié empile chaque fichier modifié dans une seule revue, avec des en-têtes collants et les lignes inchangées repliées.",
  "chat.diffView.editor": "Éditeur",
  "chat.diffView.unified": "Unifié",

  "chat.extras.title": "Extras",
  "chat.extras.description":
    "Animation au repos, et rien d'autre. Désactivez les deux pour un espace de travail immobile.",
  "chat.composerMascot.label": "Mascotte du compositeur",
  "chat.composerMascot.description":
    "Quand un tour est en cours, la mascotte du projet court le long du compositeur, cogne le bouton de défilement vers le dernier message la première fois, puis le saute, et récupère parfois une pièce.",
  "chat.emptySessionGames.label": "Jeux de session vide",
  "chat.emptySessionGames.description":
    "Pac-man et snake tournent au repos sur la grille de session vide. Survolez la bande pour prendre le contrôle de celui affiché. Désactivez pour garder le panneau immobile.",

  "inbox.github.description":
    "Pull requests, revues et issues, lues via le CLI GitHub.",
  "inbox.gitlab.description":
    "Merge requests depuis GitLab.com ou une instance auto-hébergée.",
  "inbox.ado.description":
    "Pull requests et éléments de travail Boards de votre organisation ADO.",
  "inbox.jira.description":
    "Issues Jira Cloud des projets que vous choisissez.",
  "inbox.linear.description":
    "Issues qui vous sont assignées, des équipes que vous choisissez.",

  "archive.projects.title": "Projets archivés",
  "archive.projects.description":
    "Archivez un projet depuis la barre pour garder ses discussions sans le lister dans la barre latérale.",
  "archive.projects.empty": "Aucun projet archivé.",
  "archive.restore": "Restaurer",
  "archive.delete": "Supprimer",
  "archive.conversations.titleIn": "Archivées dans {project}",
  "archive.conversations.title": "Conversations archivées",
  "archive.showArchived.label": "Afficher les archives dans la barre latérale",
  "archive.showArchived.description":
    "Garder les conversations archivées listées avec les conversations actives.",
  "archive.conversations.openProject":
    "Ouvrez un projet pour voir ses conversations archivées.",
  "archive.conversations.empty": "Aucune conversation archivée dans ce projet.",
  "archive.unarchive": "Désarchiver",

  "providers.scope.global": "Global",
  "providers.agentClis.title": "CLI des agents",
  "providers.scope.label": "Portée des réglages par défaut",
  "providers.agentClis.description.project":
    "Ces réglages par défaut s'appliquent uniquement à {project}. Un fournisseur avec Afficher dans le sélecteur désactivé est aussi exclu des nouvelles conversations démarrées dans ce projet. Les chemins des CLI restent globaux pour MonoCode.",
  "providers.agentClis.description.global":
    "Un fournisseur est listé comme installé dès que son CLI est trouvé dans votre PATH. Les CLI non installés restent listés mais sont exclus du sélecteur de modèle, comme les CLI installés avec Afficher dans le sélecteur désactivé. Le modèle à côté d'un fournisseur est celui avec lequel ses nouvelles conversations démarrent ; Utiliser par défaut choisit le fournisseur lui-même. Les chemins des CLI sont globaux pour MonoCode et s'appliquent à tous les projets.",
  "providers.advanced.title": "Avancé",
  "providers.claudeHooks.label": "Hooks Claude Code",
  "providers.claudeHooks.description":
    "Exécute les hooks configurés dans vos fichiers settings.json — réécritures de commandes PreToolUse, blocages, notifications, etc. — comme le ferait le CLI Claude Code. Désactivez si un hook se comporte mal et que vous devez récupérer la session. Prend effet au prochain tour.",

  "mcp.addServer.title": "Ajouter un serveur MCP",
  "mcp.addServer.description":
    "Collez une configuration de serveur et choisissez où l'ajouter.",
  "mcp.provider.label": "Fournisseur",
  "mcp.scope.label": "Portée",
  "mcp.name.label": "Nom",
  "mcp.name.optional": "(optionnel pour un bloc mcpServers)",
  "mcp.config.label": "Configuration JSON",
  "mcp.config.hint":
    "Collez une entrée d'un bloc mcpServers, ou un objet serveur unique avec un nom ci-dessus.",
  "mcp.cancel": "Annuler",
  "mcp.addServer.submit": "Ajouter le serveur",
  "mcp.addServer.adding": "Ajout en cours…",
  "mcp.scope.local": "Local",
  "mcp.scope.project": "Projet",
  "mcp.scope.user": "Utilisateur",

  "mcp.connections.title": "Connexions MCP",
  "mcp.connections.description":
    "Serveurs configurés pour le projet sélectionné et vos comptes fournisseurs.",
  "mcp.refresh": "Actualiser",
  "mcp.showAvailableProviders": "Afficher les fournisseurs disponibles",
  "mcp.showAllProviders": "Afficher tous les fournisseurs",
  "mcp.showingAllProviders": "Affiche tous les fournisseurs",
  "mcp.showingAvailableProviders": "Affiche les fournisseurs disponibles",
  "mcp.addServerAria": "Ajouter un serveur MCP",
  "mcp.filterByProvider": "Filtrer les serveurs MCP par fournisseur",
  "mcp.all": "Tous",
  "mcp.claudeStatusUnavailable":
    "Statut de connexion Claude indisponible : {error}",
  "mcp.checkingServers": "Vérification des serveurs…",
  "mcp.noServersConfigured": "Aucun serveur MCP configuré pour ce fournisseur.",
  "mcp.signIn": "Se connecter",
  "mcp.remove": "Supprimer",
  "mcp.showConfig": "Afficher la config",
  "mcp.footer":
    "Le statut de Claude Code provient de son CLI. Les autres fournisseurs affichent les entrées configurées. Se connecter ouvre votre navigateur quand c'est possible.",
  "mcp.removeConfirm": "Supprimer {name} de la portée {scope} ?",
  "mcp.removeServer.title": "Supprimer le serveur MCP",
};
