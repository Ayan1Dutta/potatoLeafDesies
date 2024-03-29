import React, { useMemo, useState } from 'react'
import { useRef } from 'react';
import JoditEditor from "jodit-react";
function RichEditor({setDescription,theme}) {
    console.log(theme)
    const editor = useRef(null);

    const config=useMemo(()=>{
        return  {
            readonly: false , 
            enableDragAndDropFileToEditor: true,
            
            buttons: [
                'source',
                'bold',
                'italic',
                '|',
                'underline',
                '|',
                'font',
                'fontsize',
                '|',
                'image',
                'link',
                '|',
                'undo',
                'redo',
                '|',
                'eraser',
            ],
            uploader: { insertImageAsBase64URI: true },
            removeButtons: ['brush', 'file','grid'],
            showXPathInStatusbar: false,
            showCharsCounter: false,
            showWordsCounter: false,
            toolbarAdaptive: true,
            toolbarSticky: true,
             theme : theme,
            style: {
                background: 'black.300',
                
            },
        };
    },[theme])
    return (
        
            <JoditEditor ref={editor}  width="100%" maxWidth={"100%"}
            config={config} onChange={e=>setDescription(e)}
            />
        
    )
}

export default RichEditor