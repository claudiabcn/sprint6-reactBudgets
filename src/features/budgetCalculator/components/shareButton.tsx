import { useState } from "react";
import { ShareButtonProps } from "../../../config/types";

const ShareButton = ({ getShareableUrl }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = getShareableUrl();

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert(`Share this URL:\n${url}`);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
    >
      {copied ? "✓ Copied!" : "Share Budget"}
    </button>
  );
};

export default ShareButton;