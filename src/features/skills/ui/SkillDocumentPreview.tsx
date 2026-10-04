import { MarkdownDocumentPreview } from "../../sessions/ui/MarkdownDocumentPreview";
import { useIntl } from "react-intl";

/** Keep the skill's YAML header readable without interpreting it as Markdown. */
export function SkillDocumentPreview({ text }: { text: string }) {
  const { formatMessage: t } = useIntl();
  return (
    <MarkdownDocumentPreview
      text={text}
      metadataLabel={t({ id: "skills.metadata" })}
    />
  );
}
