import {
  INBOX_SOURCE_LABELS,
  type ConnectableInboxSource,
} from "../model/inboxFilters";
import { useIntl } from "react-intl";
import { InboxProviderMark } from "./InboxProviderMark";
import { Popover, type PopoverAnchor } from "../../../shared/ui/Popover";

const WIDTH = 188;

export function InboxConnectMenu({
  anchor,
  sources,
  onConnect,
  onClose,
}: {
  anchor: PopoverAnchor;
  sources: ConnectableInboxSource[];
  onConnect: (source: ConnectableInboxSource) => void;
  onClose: () => void;
}) {
  const { formatMessage: t } = useIntl();
  return (
    <Popover
      anchor={anchor}
      gap={4}
      width={WIDTH}
      onDismiss={onClose}
      role="menu"
      aria-label={t({ id: "inbox.connectSource" })}
      onContextMenu={(event) => event.preventDefault()}
      className="p-1"
    >
      <div className="px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-content/40">
        {t({ id: "inbox.notConnected" })}
      </div>
      {sources.map((source) => (
        <button
          key={source}
          type="button"
          role="menuitem"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            onClose();
            onConnect(source);
          }}
          className="flex h-7 w-full items-center gap-2 rounded-lg px-2 text-left text-[13px] leading-none text-content hover:bg-content/5"
        >
          <InboxProviderMark
            provider={source}
            className="block size-3.5 shrink-0"
          />
          <span className="min-w-0 flex-1 truncate">
            {t(
              { id: "inbox.connectNamed" },
              { source: INBOX_SOURCE_LABELS[source] },
            )}
          </span>
        </button>
      ))}
    </Popover>
  );
}
