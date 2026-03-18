"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

interface CommentsProps {
  /** Used as the discussion mapping term (typically the article slug) */
  term?: string;
}

export default function Comments({ term }: CommentsProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      style={{
        marginTop: "var(--space-12)",
        paddingTop: "var(--space-8)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <h3
        style={{
          fontSize: "var(--text-2xl)",
          fontWeight: "var(--font-bold)",
          marginBottom: "var(--space-6)",
          color: "var(--color-text-primary)",
        }}
      >
        💬 Join the Discussion
      </h3>
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "var(--text-sm)",
          marginBottom: "var(--space-6)",
          lineHeight: "1.6",
        }}
      >
        Have a question, suggestion, or something to share? Sign in with GitHub
        to leave a comment below.
      </p>
      <Giscus
        id="comments"
        repo="Farhan4711/academia-pilot"
        repoId=""
        category="General"
        categoryId=""
        mapping="pathname"
        term={term}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === "light" ? "light" : "dark"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
