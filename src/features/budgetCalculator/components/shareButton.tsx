import { useState } from "react";
import { ShareButtonProps } from "../../../config/types";
import Button from "../../../common/components/button";

const ShareButton = ({ getShareableUrl }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = getShareableUrl();

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      alert(`Failed to copy to clipboard: ${errorMessage}\n\nYou can manually copy this URL:\n${url}`);
    }
  };

  return (
    <Button onClick={handleShare}>
      {copied ? "✓ Copied!" : "Share Budget"}
    </Button>
  );
};

export default ShareButton;