import { Icon } from "@iconify/react";
import Code from "@uiw/react-textarea-code-editor";
import useTypeWriter from "../../hooks/useTypeWriter";

export type File = {
  name: string;
  language: string;
};

interface IProps {
  files: File[];
  activeFile: File;
  code: string;
  language: string;
  animation?: boolean;
}

const icons = {
  ts: "mdi:language-javascript",
  js: "mdi:language-javascript",
  css: "cib:css3",
};

const CodeEditor = (props: IProps) => {
  const { files, activeFile, code, language, animation } = props;
  const text = useTypeWriter(code);

  return (
    <div className="code-editor-container tw-shadow-md">
      <div className="tab-nav tw-flex tw-justify-between tw-items-center">
        <ul className="tw-flex tw-gap-4 tw-h-full">
          {files.map((el: File) => {
            return (
              <li
                className={`tw-flex tw-items-center ${
                  el.name === activeFile.name ? "active" : ""
                }`}
              >
                <Icon
                  className="tw-inline tw-text-3xl tw-mx-1"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //   @ts-ignore
                  icon={icons[el.language]}
                />
                {el.name}
              </li>
            );
          })}
        </ul>
        <div className="tw-flex">
          <div className="tw-w-5 tw-h-5 tw-bg-red-600 tw-rounded-full tw-cursor-pointer"></div>
          <div className="tw-w-5 tw-h-5 tw-bg-yellow-600 tw-rounded-full tw-mx-2 tw-cursor-pointer"></div>
          <div className="tw-w-5 tw-h-5 tw-bg-green-600 tw-rounded-full tw-cursor-pointer"></div>
        </div>
      </div>

      <Code
        disabled
        value={text}
        className="code-editor"
        language={language}
        style={{
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
};

export default CodeEditor;
