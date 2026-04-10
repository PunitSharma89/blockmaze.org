import { useDocumentOperation } from "sanity";

interface DocumentActionProps {
  id: string;
  type: string;
  draft?: Record<string, unknown> | null;
  published?: Record<string, unknown> | null;
  onComplete: () => void;
}

export function PublishAction({ id, type, draft, onComplete }: DocumentActionProps) {
  const { publish } = useDocumentOperation(id, type);

  return {
    label: "Publish",
    tone: "positive" as const,
    disabled: !draft || !!publish.disabled,
    title: draft ? "Publish this document" : "No unpublished changes",
    onHandle: () => {
      publish.execute();
      onComplete();
    },
  };
}
