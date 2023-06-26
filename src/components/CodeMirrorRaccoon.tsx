"use client";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { githubLight } from "@uiw/codemirror-theme-github";

import React from "react";

const CodeMirrorRaccoon = ({ code }: { code: string }) => {
  return (
    <CodeMirror
      value={code}
      height="200px"
      extensions={[StreamLanguage.define(ruby)]}
      theme={githubLight}
      readOnly
    />
  );
};

export default CodeMirrorRaccoon;
