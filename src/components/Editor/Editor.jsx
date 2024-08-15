import { useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import './styles.css';

const Editor = forwardRef(({ readMode = false, savedData }, ref) => {
  const editorInstance = useRef(null);

  useImperativeHandle(ref, () => ({
    editorInstance: editorInstance.current,
  }));

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        tools: {
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile',
                byUrl: 'http://localhost:8008/fetchUrl',
              },
            },
          },
        },
        placeholder: '내용을 입력하세요',
        data: savedData || {},
        readOnly: readMode,
      });
    }

    return () => {
      if (
        editorInstance.current &&
        typeof editorInstance.current.destroy === 'function'
      ) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  });

  return <div spellCheck={false} id="editorjs" />;
});

Editor.displayName = 'Editor';

Editor.propTypes = {
  readMode: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  savedData: PropTypes.object.isRequired,
};

export default Editor;
