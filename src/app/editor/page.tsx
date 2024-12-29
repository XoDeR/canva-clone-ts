"use client";

import { Editor } from "@/features/editor/components/editor";

const EditorPage = () => {
    const data =
    {
        name: "Untitled project",
        json: "",
        width: 900,
        height: 1200,
    };

    return <Editor initialData={data} />
};

export default EditorPage;
