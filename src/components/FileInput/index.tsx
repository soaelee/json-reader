import { useJson } from 'hooks';
import React, { useCallback, useRef, ChangeEvent } from 'react';

const FileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onParse } = useJson();

  const onCheckFile = useCallback((files: FileList | null) => {
    const _json = ['text/javascript', 'application/json'];
    return files && _json.includes(files[0].type);
  }, []);

  const onResetFile = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [inputRef]);

  const onUploadFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!onCheckFile(e.target.files)) {
        alert('json형식 파일을 첨부해주세요.');
        onResetFile();
        return;
      }

      const file = e.target.files as FileList;
      const fileReader = new FileReader();
      fileReader.onload = reader => {
        try {
          onParse(reader.target?.result as string);
        } catch (e) {
          alert('파일을 다시 첨부해주세요.');
          onResetFile();
        }
      };
      fileReader.readAsText(file[0]);
    },
    [onResetFile, onParse, onCheckFile]
  );

  return (
    <div className="upload-file">
      <input
        ref={inputRef}
        id="file_input"
        type="file"
        onChange={onUploadFile}
        placeholder="JSON 파일을 첨부해주세요"
      />
      <label htmlFor="file_input">
        {inputRef.current?.value ? 'Reupload Json File' : 'Upload Json File'}
      </label>
    </div>
  );
};

export default React.memo(FileInput);
