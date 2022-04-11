import React, { useCallback, useRef } from "react";

const FileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCheckFile = (files: FileList | null) => {
    return (
      files && ["text/javascript", "application/json"].includes(files[0].type)
    );
  };

  const onResetFile = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [inputRef]);

  const onUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onCheckFile(e.target.files)) {
      alert("json형식 파일을 첨부해주세요.");
      onResetFile();
      return;
    }

    const file = e.target.files as FileList;
    const fileReader = new FileReader();
    fileReader.onload = (reader) => {
      try {
        console.log(reader.target?.result);
      } catch (e) {
        onResetFile();
      }
    };
    fileReader.readAsText(file[0]);
  };

  return (
    <div>
      <label htmlFor="file_input">
        <button className="btn_primary">File</button>
      </label>
      <input
        ref={inputRef}
        id="file_input"
        type="file"
        onChange={onUploadFile}
      />
    </div>
  );
};

export default FileInput;
