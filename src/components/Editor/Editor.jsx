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

  const apiUrl = import.meta.env.VITE_API_URL;
  const uploadEndPoint = `${apiUrl}/post/uploads`;
  const fetchEndPoint = `${apiUrl}/post`;

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        tools: {
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile(file) {
                  const formData = new FormData();
                  formData.append('uploadFile', file, file.name);

                  return fetch(uploadEndPoint, {
                    method: 'POST',
                    headers: {
                      Accept: '*/*',
                      // 'Content-Type': 'multipart/form-data', // 주의: 이 부분은 생략해야 브라우저가 자동으로 설정합니다.
                    },
                    body: formData,
                  })
                    .then((response) => response.json())
                    .then((result) => {
                      if (result.success) {
                        return {
                          success: 1,
                          file: {
                            url: result.file.url,
                          },
                        };
                      } else {
                        throw new Error('Image upload failed');
                      }
                    })
                    .catch((error) => {
                      console.error('Error during image upload:', error);
                      return {
                        success: 0,
                        file: {
                          url: '',
                        },
                      };
                    });
                },

                uploadByUrl(url) {
                  return fetch(fetchEndPoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: '*/*',
                    },
                    body: JSON.stringify({
                      url: url,
                    }),
                  })
                    .then((response) => response.json())
                    .then((result) => {
                      if (result.success) {
                        return {
                          success: 1,
                          file: {
                            url: result.file.url,
                          },
                        };
                      } else {
                        throw new Error('Image fetch failed');
                      }
                    })
                    .catch((error) => {
                      console.error('Error during image fetch:', error);
                      return {
                        success: 0,
                        file: {
                          url: '',
                        },
                      };
                    });
                },
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
  savedData: PropTypes.object,
};

Editor.defaultProps = {
  savedData: {},
};

export default Editor;
