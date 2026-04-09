import { useDocumentOperation } from "sanity";

interface DocumentActionProps {
  id: string;
  type: string;
  draft?: Record<string, unknown> | null;
  onComplete: () => void;
}

export function PublishAction({ id, type, draft, onComplete }: DocumentActionProps) {
  const { publish } = useDocumentOperation(id, type);

  if (!draft) return null;

  return {
    label: "Publish",
    tone: "positive" as const,
    disabled: !!publish.disabled,
    onHandle: () => {
      publish.execute();
      onComplete();
    },
  };
}

export function DeleteAction({ id, type, onComplete }: DocumentActionProps) {
  const { delete: deleteOp } = useDocumentOperation(id, type);

  return {
    label: "Delete",
    tone: "critical" as const,
    disabled: !!deleteOp.disabled,
    onHandle: () => {
      if (window.confirm("Are you sure you want to delete this document?")) {
        deleteOp.execute();
        onComplete();
      }
    },
  };
}
